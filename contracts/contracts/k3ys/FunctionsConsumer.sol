// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {FunctionsClient} from "../@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "../@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "../@chainlink/contracts/src/v0.8/functions/dev/1_0_0/libraries/FunctionsRequest.sol";

import {Token} from './Token.sol';

// import "hardhat/console.sol";


/**
 * @title Chainlink Functions example on-demand consumer contract example
 */
contract FunctionsConsumer is FunctionsClient, ConfirmedOwner {
  using FunctionsRequest for FunctionsRequest.Request;

  bytes32 public donId; // DON ID for the Functions DON to which the requests are sent

  bytes32 public s_lastRequestId;
  bytes public s_lastResponse;
  bytes public s_lastError;

  mapping(bytes32 => address) receivers;
  mapping(address=>bool) received;

  error CantMintTwice(address adr);

  constructor(address router, bytes32 _donId) FunctionsClient(router) ConfirmedOwner(msg.sender) {
    donId = _donId;
  }

  /**
   * @notice Triggers an on-demand Functions request using remote encrypted secrets
   * @param source JavaScript source code
   * @param secretsLocation Location of secrets (only Location.Remote & Location.DONHosted are supported)
   * @param encryptedSecretsReference Reference pointing to encrypted secrets
   * @param subscriptionId Subscription ID used to pay for request (FunctionsConsumer contract address must first be added to the subscription)
   * @param callbackGasLimit Maximum amount of gas used to call the inherited `handleOracleFulfillment` method
   */
  function sendRequest(
    string calldata source,
    FunctionsRequest.Location secretsLocation,
    bytes calldata encryptedSecretsReference,
    string[] calldata args,
    bytes[] calldata bytesArgs,
    uint64 subscriptionId,
    uint32 callbackGasLimit
  ) external onlyOwner {
    
    FunctionsRequest.Request memory req;
    req.initializeRequest(FunctionsRequest.Location.Inline, FunctionsRequest.CodeLanguage.JavaScript, source);
    req.secretsLocation = secretsLocation;
    req.encryptedSecretsReference = encryptedSecretsReference;    
    req.setArgs(args);
    req.setBytesArgs(bytesArgs);
    
    s_lastRequestId = _sendRequest(req.encodeCBOR(), subscriptionId, callbackGasLimit, donId);
    
    // associate this request id to the NFT receiver;
    address to = address(uint160(uint256(bytes32(bytesArgs[0]))));
    receivers[s_lastRequestId] = to;
    received[to] = true;
  }

  /**
   * @notice Store latest result/error
   * @param requestId The request ID, returned by sendRequest()
   * @param response Aggregated response from the user code
   * @param err Aggregated error from the user code or from the execution pipeline
   * Either response or error parameter will be set, but never both
   */
  function fulfillRequest(bytes32 requestId, bytes memory response, bytes memory err) internal override {
    s_lastResponse = response;
    s_lastError = err;

    uint256 res = uint256(bytes32(response));

    if (res == 1) {
      mint(receivers[requestId]);
    }
  }

  function mint(address to) internal {
    Token(to).mintOracle(to);
  }
}
