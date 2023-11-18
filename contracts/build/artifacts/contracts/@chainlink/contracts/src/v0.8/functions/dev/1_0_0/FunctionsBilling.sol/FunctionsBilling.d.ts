// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FunctionsBilling$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsBilling",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsBilling.sol",
  "abi": [
    {
      "inputs": [],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCalldata",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "linkWei",
          "type": "int256"
        }
      ],
      "name": "InvalidLinkWeiPrice",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "MustBeSubOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoTransmittersSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableByRouter",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyCallableByRouterOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PaymentTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RouterMustBeSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnauthorizedSender",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedRequestDataVersion",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "CommitmentDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "maxCallbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "indexed": false,
          "internalType": "struct FunctionsBilling.Config",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "ConfigUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "deleteCommitment",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
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
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint32",
          "name": "callbackGasLimit",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "gasPriceGwei",
          "type": "uint256"
        }
      ],
      "name": "estimateCost",
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
      "inputs": [],
      "name": "getAdminFee",
      "outputs": [
        {
          "internalType": "uint72",
          "name": "",
          "type": "uint72"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "maxCallbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "internalType": "struct FunctionsBilling.Config",
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
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "getDONFee",
      "outputs": [
        {
          "internalType": "uint72",
          "name": "",
          "type": "uint72"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWeiPerUnitLink",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
      "inputs": [],
      "name": "oracleWithdrawAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "typeAndVersion",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "maxCallbackGasLimit",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "feedStalenessSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadBeforeCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "gasOverheadAfterCallback",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "requestTimeoutSeconds",
              "type": "uint32"
            },
            {
              "internalType": "uint72",
              "name": "donFee",
              "type": "uint72"
            },
            {
              "internalType": "uint16",
              "name": "maxSupportedRequestDataVersion",
              "type": "uint16"
            },
            {
              "internalType": "uint32",
              "name": "fulfillmentGasPriceOverEstimationBP",
              "type": "uint32"
            },
            {
              "internalType": "uint224",
              "name": "fallbackNativePerUnitLink",
              "type": "uint224"
            }
          ],
          "internalType": "struct FunctionsBilling.Config",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "updateConfig",
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
    contractName: "FunctionsBilling",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsBilling$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsBilling.sol:FunctionsBilling",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsBilling$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FunctionsBilling",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsBilling$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsBilling.sol:FunctionsBilling",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsBilling$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FunctionsBilling",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsBilling$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsBilling.sol:FunctionsBilling",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsBilling$Type["abi"]>>;
}
