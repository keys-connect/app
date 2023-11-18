// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Strings$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Strings",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Strings.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220073a6357049af8378fd4b42a07693b9b6ed020fbfeac43ba0bc583d4a2e39a6264736f6c63430008140033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220073a6357049af8378fd4b42a07693b9b6ed020fbfeac43ba0bc583d4a2e39a6264736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Strings.sol:Strings",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Strings$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Strings.sol:Strings",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Strings$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/Strings.sol:Strings",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Strings$Type["abi"]>>;
}
