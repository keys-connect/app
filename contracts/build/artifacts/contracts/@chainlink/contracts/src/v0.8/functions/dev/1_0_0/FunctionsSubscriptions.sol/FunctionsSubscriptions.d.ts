// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FunctionsSubscriptions$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsSubscriptions",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsSubscriptions.sol",
  "abi": [
    {
      "inputs": [],
      "name": "CannotRemoveWithPendingRequests",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint96",
          "name": "currentBalanceJuels",
          "type": "uint96"
        }
      ],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCalldata",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidConsumer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSubscription",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "proposedOwner",
          "type": "address"
        }
      ],
      "name": "MustBeProposedOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MustBeSubscriptionOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableFromLink",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TimeoutNotExceeded",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "maximumConsumers",
          "type": "uint16"
        }
      ],
      "name": "TooManyConsumers",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "totalBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deductionAttempt",
          "type": "uint256"
        }
      ],
      "name": "TotalBalanceInvariantViolated",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "FundsRecovered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "RequestTimedOut",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "fundsRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fundsAmount",
          "type": "uint256"
        }
      ],
      "name": "SubscriptionCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "SubscriptionConsumerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "SubscriptionConsumerRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "SubscriptionCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldBalance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "SubscriptionFunded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "SubscriptionOwnerTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "SubscriptionOwnerTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "acceptSubscriptionOwnerTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "addConsumer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "cancelSubscription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "createSubscription",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "createSubscriptionWithConsumer",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "client",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "getConsumer",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "allowed",
              "type": "bool"
            },
            {
              "internalType": "uint64",
              "name": "initiatedRequests",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "completedRequests",
              "type": "uint64"
            }
          ],
          "internalType": "struct IFunctionsSubscriptions.Consumer",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "getFlags",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "getSubscription",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint96",
              "name": "balance",
              "type": "uint96"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "blockedBalance",
              "type": "uint96"
            },
            {
              "internalType": "address",
              "name": "proposedOwner",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "consumers",
              "type": "address[]"
            },
            {
              "internalType": "bytes32",
              "name": "flags",
              "type": "bytes32"
            }
          ],
          "internalType": "struct IFunctionsSubscriptions.Subscription",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSubscriptionCount",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalBalance",
      "outputs": [
        {
          "internalType": "uint96",
          "name": "",
          "type": "uint96"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "onTokenTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "amount",
          "type": "uint96"
        }
      ],
      "name": "oracleWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "ownerCancelSubscription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint96",
          "name": "amount",
          "type": "uint96"
        }
      ],
      "name": "ownerWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        }
      ],
      "name": "pendingRequestExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "proposeSubscriptionOwnerTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "recoverFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        }
      ],
      "name": "removeConsumer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "flags",
          "type": "bytes32"
        }
      ],
      "name": "setFlags",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "requestId",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "coordinator",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "estimatedTotalCostJuels",
              "type": "uint96"
            },
            {
              "internalType": "address",
              "name": "client",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "subscriptionId",
              "type": "uint64"
            },
            {
              "internalType": "uint32",
              "name": "callbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "adminFee",
              "type": "uint72"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadBeforeCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "gasOverheadAfterCallback",
              "type": "uint40"
            },
            {
              "internalType": "uint32",
              "name": "timeoutTimestamp",
              "type": "uint32"
            }
          ],
          "internalType": "struct FunctionsResponse.Commitment[]",
          "name": "requestsToTimeoutByCommitment",
          "type": "tuple[]"
        }
      ],
      "name": "timeoutRequests",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "FunctionsSubscriptions",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsSubscriptions$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsSubscriptions.sol:FunctionsSubscriptions",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsSubscriptions$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FunctionsSubscriptions",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsSubscriptions$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsSubscriptions.sol:FunctionsSubscriptions",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsSubscriptions$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FunctionsSubscriptions",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsSubscriptions$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsSubscriptions.sol:FunctionsSubscriptions",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsSubscriptions$Type["abi"]>>;
}