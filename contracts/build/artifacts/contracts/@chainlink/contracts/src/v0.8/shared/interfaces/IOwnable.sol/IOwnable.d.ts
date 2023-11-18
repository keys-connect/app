// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IOwnable$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IOwnable",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/shared/interfaces/IOwnable.sol",
  "abi": [
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
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
    contractName: "IOwnable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IOwnable$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/shared/interfaces/IOwnable.sol:IOwnable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IOwnable$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IOwnable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IOwnable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/shared/interfaces/IOwnable.sol:IOwnable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IOwnable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IOwnable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IOwnable$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/shared/interfaces/IOwnable.sol:IOwnable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IOwnable$Type["abi"]>>;
}
