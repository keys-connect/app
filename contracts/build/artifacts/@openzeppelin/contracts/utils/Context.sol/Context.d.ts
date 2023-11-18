// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Context$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Context",
  "sourceName": "@openzeppelin/contracts/utils/Context.sol",
  "abi": [],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/Context.sol:Context",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Context$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/Context.sol:Context",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Context$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/Context.sol:Context",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Context$Type["abi"]>>;
}