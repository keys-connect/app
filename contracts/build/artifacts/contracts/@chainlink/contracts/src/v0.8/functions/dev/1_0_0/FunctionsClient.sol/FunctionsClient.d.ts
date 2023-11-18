// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FunctionsClient$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsClient",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol",
  "abi": [
    {
      "inputs": [],
      "name": "OnlyRouterCanFulfill",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestSent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "handleOracleFulfillment",
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
    contractName: "FunctionsClient",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsClient$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol:FunctionsClient",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsClient$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FunctionsClient",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsClient$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol:FunctionsClient",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsClient$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FunctionsClient",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsClient$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/FunctionsClient.sol:FunctionsClient",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsClient$Type["abi"]>>;
}
