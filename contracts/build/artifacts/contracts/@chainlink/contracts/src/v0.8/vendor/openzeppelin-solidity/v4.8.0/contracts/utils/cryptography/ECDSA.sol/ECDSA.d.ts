// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ECDSA$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ECDSA",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/cryptography/ECDSA.sol",
  "abi": [],
  "bytecode": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208b730634017670080bfd5a6c017aa07feb0137982e0b72451fe7817c5adec40b64736f6c63430008140033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208b730634017670080bfd5a6c017aa07feb0137982e0b72451fe7817c5adec40b64736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ECDSA",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ECDSA$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/cryptography/ECDSA.sol:ECDSA",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ECDSA$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ECDSA",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ECDSA$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/cryptography/ECDSA.sol:ECDSA",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ECDSA$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ECDSA",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ECDSA$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/utils/cryptography/ECDSA.sol:ECDSA",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ECDSA$Type["abi"]>>;
}
