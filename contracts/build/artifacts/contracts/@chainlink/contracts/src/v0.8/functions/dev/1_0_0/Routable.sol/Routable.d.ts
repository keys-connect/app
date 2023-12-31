// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Routable$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Routable",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/Routable.sol",
  "abi": [
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
      "name": "RouterMustBeSet",
      "type": "error"
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Routable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Routable$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/Routable.sol:Routable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Routable$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Routable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Routable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/Routable.sol:Routable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Routable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Routable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Routable$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/Routable.sol:Routable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Routable$Type["abi"]>>;
}
