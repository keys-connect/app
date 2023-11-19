// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FunctionsResponse$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsResponse",
  "sourceName": "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsResponse.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220355a202b8f2ce445765b9844729fff0ef54e55ff0d7425c0212ac3f05a8fb08164736f6c63430008140033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220355a202b8f2ce445765b9844729fff0ef54e55ff0d7425c0212ac3f05a8fb08164736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "FunctionsResponse",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsResponse$Type["abi"]>>;
  export function deployContract(
    contractName: "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsResponse.sol:FunctionsResponse",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsResponse$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FunctionsResponse",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsResponse$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsResponse.sol:FunctionsResponse",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsResponse$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FunctionsResponse",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsResponse$Type["abi"]>>;
  export function getContractAt(
    contractName: "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsResponse.sol:FunctionsResponse",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsResponse$Type["abi"]>>;
}