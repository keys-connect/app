// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Address$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Address",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Address.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122077befd16f4e4e05aa4cdf7b0f1981704993946ed40e092b2402d98a2c012b06664736f6c63430008140033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122077befd16f4e4e05aa4cdf7b0f1981704993946ed40e092b2402d98a2c012b06664736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Address.sol:Address",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Address$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Address.sol:Address",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Address$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Address.sol:Address",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Address$Type["abi"]>>;
}
