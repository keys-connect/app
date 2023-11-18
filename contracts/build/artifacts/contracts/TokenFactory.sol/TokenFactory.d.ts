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
  "sourceName": "contracts/TokenFactory.sol",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405161075438038061075483398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6106c1806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063593502921461003b578063dfb9ca341461006a575b600080fd5b61004e610049366004610223565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e610078366004610486565b6100e9565b600080546040513060388201526f5af43d82803e903d91602b57fd5bf3ff60248201526001600160a01b039091166014820152733d602d80600a3d3981f3363d3d373d3d3d363d738152605881018390526037600c820120607882015260556043909101205b92915050565b60008054610100906001600160a01b0316836101b5565b60405163bac17ba560e01b81529091506001600160a01b0382169063bac17ba590610137908a908a908a908a908a90600401610592565b600060405180830381600087803b15801561015157600080fd5b505af1158015610165573d6000803e3d6000fd5b5050604080513381526001600160a01b03851660208201527fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c8139935001905060405180910390a19695505050505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008360601b60e81c176000526e5af43d82803e903d91602b57fd5bf38360781b1760205281603760096000f590506001600160a01b0381166100e3576040516330be1a3d60e21b815260040160405180910390fd5b60006020828403121561023557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561027b5761027b61023c565b604052919050565b600082601f83011261029457600080fd5b813567ffffffffffffffff8111156102ae576102ae61023c565b6102c1601f8201601f1916602001610252565b8181528460208386010111156102d657600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b038116811461030a57600080fd5b919050565b600067ffffffffffffffff8211156103295761032961023c565b5060051b60200190565b600082601f83011261034457600080fd5b813560206103596103548361030f565b610252565b82815260059290921b8401810191818101908684111561037857600080fd5b8286015b8481101561039a5761038d816102f3565b835291830191830161037c565b509695505050505050565b600082601f8301126103b657600080fd5b813560206103c66103548361030f565b828152600592831b85018201928282019190878511156103e557600080fd5b8387015b8581101561047957803567ffffffffffffffff8111156104095760008081fd5b8801603f81018a1361041b5760008081fd5b85810135604061042d6103548361030f565b82815291851b8301810191888101908d84111561044a5760008081fd5b938201935b838510156104685784358252938901939089019061044f565b8852505050938501935084016103e9565b5090979650505050505050565b60008060008060008060c0878903121561049f57600080fd5b863567ffffffffffffffff808211156104b757600080fd5b6104c38a838b01610283565b975060208901359150808211156104d957600080fd5b6104e58a838b01610283565b96506104f360408a016102f3565b9550606089013591508082111561050957600080fd5b6105158a838b01610333565b9450608089013591508082111561052b57600080fd5b5061053889828a016103a5565b92505060a087013590509295509295509295565b6000815180845260005b8181101561057257602081850181015186830182015201610556565b506000602082860101526020601f19601f83011685010191505092915050565b60a0815260006105a560a083018861054c565b6020838203818501526105b8828961054c565b6001600160a01b038881166040870152858203606087015287518083528389019450909183019060005b818110156106005785518416835294840194918401916001016105e2565b50508581036080870152865180825283820194509150600582901b8101830183880160005b8481101561067957838303601f1901875281518051808552908701908785019060005b8181101561066457835183529289019291890191600101610648565b50509787019793505090850190600101610625565b50909c9b50505050505050505050505056fea264697066735822122093f942332381e03cc5ec55b90b09aca6c42ca19df16068038ada754c6193ee5164736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063593502921461003b578063dfb9ca341461006a575b600080fd5b61004e610049366004610223565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e610078366004610486565b6100e9565b600080546040513060388201526f5af43d82803e903d91602b57fd5bf3ff60248201526001600160a01b039091166014820152733d602d80600a3d3981f3363d3d373d3d3d363d738152605881018390526037600c820120607882015260556043909101205b92915050565b60008054610100906001600160a01b0316836101b5565b60405163bac17ba560e01b81529091506001600160a01b0382169063bac17ba590610137908a908a908a908a908a90600401610592565b600060405180830381600087803b15801561015157600080fd5b505af1158015610165573d6000803e3d6000fd5b5050604080513381526001600160a01b03851660208201527fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c8139935001905060405180910390a19695505050505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008360601b60e81c176000526e5af43d82803e903d91602b57fd5bf38360781b1760205281603760096000f590506001600160a01b0381166100e3576040516330be1a3d60e21b815260040160405180910390fd5b60006020828403121561023557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561027b5761027b61023c565b604052919050565b600082601f83011261029457600080fd5b813567ffffffffffffffff8111156102ae576102ae61023c565b6102c1601f8201601f1916602001610252565b8181528460208386010111156102d657600080fd5b816020850160208301376000918101602001919091529392505050565b80356001600160a01b038116811461030a57600080fd5b919050565b600067ffffffffffffffff8211156103295761032961023c565b5060051b60200190565b600082601f83011261034457600080fd5b813560206103596103548361030f565b610252565b82815260059290921b8401810191818101908684111561037857600080fd5b8286015b8481101561039a5761038d816102f3565b835291830191830161037c565b509695505050505050565b600082601f8301126103b657600080fd5b813560206103c66103548361030f565b828152600592831b85018201928282019190878511156103e557600080fd5b8387015b8581101561047957803567ffffffffffffffff8111156104095760008081fd5b8801603f81018a1361041b5760008081fd5b85810135604061042d6103548361030f565b82815291851b8301810191888101908d84111561044a5760008081fd5b938201935b838510156104685784358252938901939089019061044f565b8852505050938501935084016103e9565b5090979650505050505050565b60008060008060008060c0878903121561049f57600080fd5b863567ffffffffffffffff808211156104b757600080fd5b6104c38a838b01610283565b975060208901359150808211156104d957600080fd5b6104e58a838b01610283565b96506104f360408a016102f3565b9550606089013591508082111561050957600080fd5b6105158a838b01610333565b9450608089013591508082111561052b57600080fd5b5061053889828a016103a5565b92505060a087013590509295509295509295565b6000815180845260005b8181101561057257602081850181015186830182015201610556565b506000602082860101526020601f19601f83011685010191505092915050565b60a0815260006105a560a083018861054c565b6020838203818501526105b8828961054c565b6001600160a01b038881166040870152858203606087015287518083528389019450909183019060005b818110156106005785518416835294840194918401916001016105e2565b50508581036080870152865180825283820194509150600582901b8101830183880160005b8481101561067957838303601f1901875281518051808552908701908785019060005b8181101561066457835183529289019291890191600101610648565b50509787019793505090850190600101610625565b50909c9b50505050505050505050505056fea264697066735822122093f942332381e03cc5ec55b90b09aca6c42ca19df16068038ada754c6193ee5164736f6c63430008140033",
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
    contractName: "contracts/TokenFactory.sol:TokenFactory",
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
    contractName: "contracts/TokenFactory.sol:TokenFactory",
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
    contractName: "contracts/TokenFactory.sol:TokenFactory",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TokenFactory$Type["abi"]>>;
}
