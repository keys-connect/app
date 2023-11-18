// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ITermsOfServiceAllowList$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ITermsOfServiceAllowList",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/accessControl/interfaces/ITermsOfServiceAllowList.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "acceptor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        }
      ],
      "name": "acceptTermsOfService",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "blockSender",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllAllowedSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "acceptor",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "getMessage",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "isBlockedSender",
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
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "unblockSender",
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
    contractName: "ITermsOfServiceAllowList",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/accessControl/interfaces/ITermsOfServiceAllowList.sol:ITermsOfServiceAllowList",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ITermsOfServiceAllowList",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/accessControl/interfaces/ITermsOfServiceAllowList.sol:ITermsOfServiceAllowList",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ITermsOfServiceAllowList",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/accessControl/interfaces/ITermsOfServiceAllowList.sol:ITermsOfServiceAllowList",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ITermsOfServiceAllowList$Type["abi"]>>;
}
