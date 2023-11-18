// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TokenFactory$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TokenFactory",
  "sourceName": "contracts/k3ys/TokenFactory.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_master",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ERC1167FailedCreateClone",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "TokenCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        }
      ],
      "name": "contractAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "__name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "__symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_verifiers",
          "type": "address[]"
        },
        {
          "internalType": "bytes32[][]",
          "name": "_parsArray",
          "type": "bytes32[][]"
        },
        {
          "internalType": "address",
          "name": "_oracle",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "proxy",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161078a38038061078a83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6106f7806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063593502921461003b5780637589b1591461006a575b600080fd5b61004e610049366004610227565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e61007836600461048a565b6100e9565b600080546040513060388201526f5af43d82803e903d91602b57fd5bf3ff60248201526001600160a01b039091166014820152733d602d80600a3d3981f3363d3d373d3d3d363d738152605881018390526037600c820120607882015260556043909101205b92915050565b60008054610100906001600160a01b0316836101b9565b604051636381e62f60e01b81529091506001600160a01b03821690636381e62f90610139908b908b908b908b908b908b90600401610624565b600060405180830381600087803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b5050604080513381526001600160a01b03851660208201527fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c8139935001905060405180910390a15b979650505050505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008360601b60e81c176000526e5af43d82803e903d91602b57fd5bf38360781b1760205281603760096000f590506001600160a01b0381166100e3576040516330be1a3d60e21b815260040160405180910390fd5b60006020828403121561023957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561027f5761027f610240565b604052919050565b600082601f83011261029857600080fd5b813567ffffffffffffffff8111156102b2576102b2610240565b6102c5601f8201601f1916602001610256565b8181528460208386010111156102da57600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b038116811461030e57600080fd5b919050565b600067ffffffffffffffff82111561032d5761032d610240565b5060051b60200190565b600082601f83011261034857600080fd5b8135602061035d61035883610313565b610256565b82815260059290921b8401810191818101908684111561037c57600080fd5b8286015b8481101561039e57610391816102f7565b8352918301918301610380565b509695505050505050565b600082601f8301126103ba57600080fd5b813560206103ca61035883610313565b828152600592831b85018201928282019190878511156103e957600080fd5b8387015b8581101561047d57803567ffffffffffffffff81111561040d5760008081fd5b8801603f81018a1361041f5760008081fd5b85810135604061043161035883610313565b82815291851b8301810191888101908d84111561044e5760008081fd5b938201935b8385101561046c57843582529389019390890190610453565b8852505050938501935084016103ed565b5090979650505050505050565b600080600080600080600060e0888a0312156104a557600080fd5b873567ffffffffffffffff808211156104bd57600080fd5b6104c98b838c01610287565b985060208a01359150808211156104df57600080fd5b6104eb8b838c01610287565b97506104f960408b016102f7565b965060608a013591508082111561050f57600080fd5b61051b8b838c01610337565b955060808a013591508082111561053157600080fd5b5061053e8a828b016103a9565b93505061054d60a089016102f7565b915060c0880135905092959891949750929550565b6000815180845260005b818110156105885760208185018101518683018201520161056c565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501808196508360051b810191508286016000805b86811015610616578385038a52825180518087529087019087870190845b81811015610601578351835292890192918901916001016105e5565b50509a87019a955050918501916001016105c7565b509298975050505050505050565b60c08152600061063760c0830189610562565b60208382038185015261064a828a610562565b6001600160a01b03898116604087015285820360608701528851808352838a019450909183019060005b81811015610692578551841683529484019491840191600101610674565b505085810360808701526106a681896105a8565b9450505050506101ae60a08301846001600160a01b0316905256fea264697066735822122003d8e724f9f52afcf2801b522cd0f62c4859d59ec8e284ab9753e0bb8495c99464736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063593502921461003b5780637589b1591461006a575b600080fd5b61004e610049366004610227565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e61007836600461048a565b6100e9565b600080546040513060388201526f5af43d82803e903d91602b57fd5bf3ff60248201526001600160a01b039091166014820152733d602d80600a3d3981f3363d3d373d3d3d363d738152605881018390526037600c820120607882015260556043909101205b92915050565b60008054610100906001600160a01b0316836101b9565b604051636381e62f60e01b81529091506001600160a01b03821690636381e62f90610139908b908b908b908b908b908b90600401610624565b600060405180830381600087803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b5050604080513381526001600160a01b03851660208201527fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c8139935001905060405180910390a15b979650505050505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008360601b60e81c176000526e5af43d82803e903d91602b57fd5bf38360781b1760205281603760096000f590506001600160a01b0381166100e3576040516330be1a3d60e21b815260040160405180910390fd5b60006020828403121561023957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561027f5761027f610240565b604052919050565b600082601f83011261029857600080fd5b813567ffffffffffffffff8111156102b2576102b2610240565b6102c5601f8201601f1916602001610256565b8181528460208386010111156102da57600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b038116811461030e57600080fd5b919050565b600067ffffffffffffffff82111561032d5761032d610240565b5060051b60200190565b600082601f83011261034857600080fd5b8135602061035d61035883610313565b610256565b82815260059290921b8401810191818101908684111561037c57600080fd5b8286015b8481101561039e57610391816102f7565b8352918301918301610380565b509695505050505050565b600082601f8301126103ba57600080fd5b813560206103ca61035883610313565b828152600592831b85018201928282019190878511156103e957600080fd5b8387015b8581101561047d57803567ffffffffffffffff81111561040d5760008081fd5b8801603f81018a1361041f5760008081fd5b85810135604061043161035883610313565b82815291851b8301810191888101908d84111561044e5760008081fd5b938201935b8385101561046c57843582529389019390890190610453565b8852505050938501935084016103ed565b5090979650505050505050565b600080600080600080600060e0888a0312156104a557600080fd5b873567ffffffffffffffff808211156104bd57600080fd5b6104c98b838c01610287565b985060208a01359150808211156104df57600080fd5b6104eb8b838c01610287565b97506104f960408b016102f7565b965060608a013591508082111561050f57600080fd5b61051b8b838c01610337565b955060808a013591508082111561053157600080fd5b5061053e8a828b016103a9565b93505061054d60a089016102f7565b915060c0880135905092959891949750929550565b6000815180845260005b818110156105885760208185018101518683018201520161056c565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501808196508360051b810191508286016000805b86811015610616578385038a52825180518087529087019087870190845b81811015610601578351835292890192918901916001016105e5565b50509a87019a955050918501916001016105c7565b509298975050505050505050565b60c08152600061063760c0830189610562565b60208382038185015261064a828a610562565b6001600160a01b03898116604087015285820360608701528851808352838a019450909183019060005b81811015610692578551841683529484019491840191600101610674565b505085810360808701526106a681896105a8565b9450505050506101ae60a08301846001600160a01b0316905256fea264697066735822122003d8e724f9f52afcf2801b522cd0f62c4859d59ec8e284ab9753e0bb8495c99464736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TokenFactory",
    constructorArgs: [_master: AbiParameterToPrimitiveType<{"name":"_master","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TokenFactory$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/k3ys/TokenFactory.sol:TokenFactory",
    constructorArgs: [_master: AbiParameterToPrimitiveType<{"name":"_master","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TokenFactory$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TokenFactory",
    constructorArgs: [_master: AbiParameterToPrimitiveType<{"name":"_master","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TokenFactory$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/k3ys/TokenFactory.sol:TokenFactory",
    constructorArgs: [_master: AbiParameterToPrimitiveType<{"name":"_master","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TokenFactory$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TokenFactory",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TokenFactory$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/k3ys/TokenFactory.sol:TokenFactory",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TokenFactory$Type["abi"]>>;
}