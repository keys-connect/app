// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TestErc20$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TestErc20",
  "sourceName": "contracts/k3ys/test/TestErc20.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_supply",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "decimals_",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
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
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162000cf038038062000cf083398101604081905262000034916200022a565b60036200004286826200036a565b5060046200005185826200036a565b506005805460ff191660ff83161790556200006d828462000078565b50505050506200045e565b6001600160a01b038216620000d35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000e7919062000436565b90915550506001600160a01b038216600090815260208190526040812080548392906200011690849062000436565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018d57600080fd5b81516001600160401b0380821115620001aa57620001aa62000165565b604051601f8301601f19908116603f01168101908282118183101715620001d557620001d562000165565b81604052838152602092508683858801011115620001f257600080fd5b600091505b83821015620002165785820183015181830184015290820190620001f7565b600093810190920192909252949350505050565b600080600080600060a086880312156200024357600080fd5b85516001600160401b03808211156200025b57600080fd5b6200026989838a016200017b565b965060208801519150808211156200028057600080fd5b506200028f888289016200017b565b60408801516060890151919650945090506001600160a01b0381168114620002b657600080fd5b608087015190925060ff81168114620002ce57600080fd5b809150509295509295909350565b600181811c90821680620002f157607f821691505b6020821081036200031257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200016057600081815260208120601f850160051c81016020861015620003415750805b601f850160051c820191505b8181101562000362578281556001016200034d565b505050505050565b81516001600160401b0381111562000386576200038662000165565b6200039e81620003978454620002dc565b8462000318565b602080601f831160018114620003d65760008415620003bd5750858301515b600019600386901b1c1916600185901b17855562000362565b600085815260208120601f198616915b828110156200040757888601518255948401946001909101908401620003e6565b5085821015620004265787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200045857634e487b7160e01b600052601160045260246000fd5b92915050565b610882806200046e6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101a6565b6040516100c391906106cc565b60405180910390f35b6100df6100da366004610736565b610238565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610760565b610252565b60055460405160ff90911681526020016100c3565b6100df610137366004610736565b610276565b6100f361014a36600461079c565b6001600160a01b031660009081526020819052604090205490565b6100b6610298565b6100df61017b366004610736565b6102a7565b6100df61018e366004610736565b610327565b6100f36101a13660046107be565b610335565b6060600380546101b5906107f1565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906107f1565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050905090565b600033610246818585610360565b60019150505b92915050565b600033610260858285610484565b61026b8585856104fe565b506001949350505050565b6000336102468185856102898383610335565b610293919061082b565b610360565b6060600480546101b5906107f1565b600033816102b58286610335565b90508381101561031a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61026b8286868403610360565b6000336102468185856104fe565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103c25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610311565b6001600160a01b0382166104235760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610311565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104908484610335565b905060001981146104f857818110156104eb5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610311565b6104f88484848403610360565b50505050565b6001600160a01b0383166105625760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610311565b6001600160a01b0382166105c45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610311565b6001600160a01b0383166000908152602081905260409020548181101561063c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610311565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061067390849061082b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106bf91815260200190565b60405180910390a36104f8565b600060208083528351808285015260005b818110156106f9578581018301518582016040015282016106dd565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461073157600080fd5b919050565b6000806040838503121561074957600080fd5b6107528361071a565b946020939093013593505050565b60008060006060848603121561077557600080fd5b61077e8461071a565b925061078c6020850161071a565b9150604084013590509250925092565b6000602082840312156107ae57600080fd5b6107b78261071a565b9392505050565b600080604083850312156107d157600080fd5b6107da8361071a565b91506107e86020840161071a565b90509250929050565b600181811c9082168061080557607f821691505b60208210810361082557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561024c57634e487b7160e01b600052601160045260246000fdfea2646970667358221220e7d4d8e51f99d57f30d861972949fafa5b65a615565c17f13e8f58ddfbe1714064736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b4114610165578063a457c2d71461016d578063a9059cbb14610180578063dd62ed3e1461019357600080fd5b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101a6565b6040516100c391906106cc565b60405180910390f35b6100df6100da366004610736565b610238565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610760565b610252565b60055460405160ff90911681526020016100c3565b6100df610137366004610736565b610276565b6100f361014a36600461079c565b6001600160a01b031660009081526020819052604090205490565b6100b6610298565b6100df61017b366004610736565b6102a7565b6100df61018e366004610736565b610327565b6100f36101a13660046107be565b610335565b6060600380546101b5906107f1565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906107f1565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050905090565b600033610246818585610360565b60019150505b92915050565b600033610260858285610484565b61026b8585856104fe565b506001949350505050565b6000336102468185856102898383610335565b610293919061082b565b610360565b6060600480546101b5906107f1565b600033816102b58286610335565b90508381101561031a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61026b8286868403610360565b6000336102468185856104fe565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103c25760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610311565b6001600160a01b0382166104235760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610311565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104908484610335565b905060001981146104f857818110156104eb5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610311565b6104f88484848403610360565b50505050565b6001600160a01b0383166105625760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610311565b6001600160a01b0382166105c45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610311565b6001600160a01b0383166000908152602081905260409020548181101561063c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610311565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061067390849061082b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106bf91815260200190565b60405180910390a36104f8565b600060208083528351808285015260005b818110156106f9578581018301518582016040015282016106dd565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461073157600080fd5b919050565b6000806040838503121561074957600080fd5b6107528361071a565b946020939093013593505050565b60008060006060848603121561077557600080fd5b61077e8461071a565b925061078c6020850161071a565b9150604084013590509250925092565b6000602082840312156107ae57600080fd5b6107b78261071a565b9392505050565b600080604083850312156107d157600080fd5b6107da8361071a565b91506107e86020840161071a565b90509250929050565b600181811c9082168061080557607f821691505b60208210810361082557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561024c57634e487b7160e01b600052601160045260246000fdfea2646970667358221220e7d4d8e51f99d57f30d861972949fafa5b65a615565c17f13e8f58ddfbe1714064736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TestErc20",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, _supply: AbiParameterToPrimitiveType<{"name":"_supply","type":"uint256"}>, holder: AbiParameterToPrimitiveType<{"name":"holder","type":"address"}>, decimals_: AbiParameterToPrimitiveType<{"name":"decimals_","type":"uint8"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TestErc20$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/k3ys/test/TestErc20.sol:TestErc20",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, _supply: AbiParameterToPrimitiveType<{"name":"_supply","type":"uint256"}>, holder: AbiParameterToPrimitiveType<{"name":"holder","type":"address"}>, decimals_: AbiParameterToPrimitiveType<{"name":"decimals_","type":"uint8"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TestErc20$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TestErc20",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, _supply: AbiParameterToPrimitiveType<{"name":"_supply","type":"uint256"}>, holder: AbiParameterToPrimitiveType<{"name":"holder","type":"address"}>, decimals_: AbiParameterToPrimitiveType<{"name":"decimals_","type":"uint8"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TestErc20$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/k3ys/test/TestErc20.sol:TestErc20",
    constructorArgs: [name_: AbiParameterToPrimitiveType<{"name":"name_","type":"string"}>, symbol_: AbiParameterToPrimitiveType<{"name":"symbol_","type":"string"}>, _supply: AbiParameterToPrimitiveType<{"name":"_supply","type":"uint256"}>, holder: AbiParameterToPrimitiveType<{"name":"holder","type":"address"}>, decimals_: AbiParameterToPrimitiveType<{"name":"decimals_","type":"uint8"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TestErc20$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TestErc20",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TestErc20$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/k3ys/test/TestErc20.sol:TestErc20",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TestErc20$Type["abi"]>>;
}
