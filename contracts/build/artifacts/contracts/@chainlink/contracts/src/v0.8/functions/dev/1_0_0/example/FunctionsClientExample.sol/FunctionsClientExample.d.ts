// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface FunctionsClientExample$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "FunctionsClientExample",
  "sourceName": "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/example/FunctionsClientExample.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "router",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "EmptyArgs",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySecrets",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySource",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoInlineSecrets",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyRouterCanFulfill",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "UnexpectedRequestID",
      "type": "error"
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
        }
      ],
      "name": "OwnershipTransferRequested",
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
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_CALLBACK_GAS",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "handleOracleFulfillment",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastError",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastErrorLength",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastRequestId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastResponse",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastResponseLength",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "source",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "encryptedSecretsReferences",
          "type": "bytes"
        },
        {
          "internalType": "string[]",
          "name": "args",
          "type": "string[]"
        },
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "jobId",
          "type": "bytes32"
        }
      ],
      "name": "sendRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60a06040523480156200001157600080fd5b50604051620016a3380380620016a3833981016040819052620000349162000180565b6001600160a01b0381166080523380600081620000985760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000cb57620000cb81620000d5565b50505050620001b2565b336001600160a01b038216036200012f5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200008f565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000602082840312156200019357600080fd5b81516001600160a01b0381168114620001ab57600080fd5b9392505050565b6080516114ce620001d56000396000818161018c015261082501526114ce6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80636d9809a0116100715780636d9809a01461012857806379ba5097146101325780638da5cb5b1461013a578063b1e2174914610155578063f2fde38b1461015e578063f7b4c06f1461017157600080fd5b80630ca76175146100ae5780633944ea3a146100c357806342748b2a146100df5780634b0795a81461010c5780635fa353e714610115575b600080fd5b6100c16100bc366004610fe1565b610181565b005b6100cc60035481565b6040519081526020015b60405180910390f35b6005546100f790640100000000900463ffffffff1681565b60405163ffffffff90911681526020016100d6565b6100cc60045481565b6100c16101233660046110b1565b6101da565b6100f76201117081565b6100c16102f4565b6000546040516001600160a01b0390911681526020016100d6565b6100cc60025481565b6100c161016c366004611194565b6103a3565b6005546100f79063ffffffff1681565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101ca5760405163c6829f8360e01b815260040160405180910390fd5b6101d58383836103b7565b505050565b6101e261043a565b61022b6040805161010081019091528060008152602001600081526020016000815260200160608152602001606081526020016060815260200160608152602001606081525090565b61026d89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859392505061048f9050565b85156102b5576102b587878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506104a09050565b83156102cf576102cf6102c885876111bd565b82906104d1565b6102e66102db826104fb565b846201117085610820565b600255505050505050505050565b6001546001600160a01b0316331461034c5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b60448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6103ab61043a565b6103b4816108f2565b50565b82600254146103dc5760405163d068bf5b60e01b815260048101849052602401610343565b6103e58261099b565b60035581516005805463ffffffff191663ffffffff90921691909117905561040c8161099b565b600455516005805463ffffffff9092166401000000000267ffffffff00000000199092169190911790555050565b6000546001600160a01b0316331461048d5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610343565b565b61049c8260008084610a05565b5050565b80516000036104c25760405163e889636f60e01b815260040160405180910390fd5b60016020830152608090910152565b80516000036104f35760405163fe936cb760e01b815260040160405180910390fd5b60c090910152565b6060600061050a610100610a83565b90506105436040518060400160405280600c81526020016b31b7b232a637b1b0ba34b7b760a11b81525082610aa490919063ffffffff16565b825161056190600281111561055a5761055a611254565b8290610abd565b6040805180820190915260088152676c616e677561676560c01b602082015261058b908290610aa4565b60408301516105a290801561055a5761055a611254565b604080518082019091526006815265736f7572636560d01b60208201526105ca908290610aa4565b60608301516105da908290610aa4565b60a083015151156106275760408051808201909152601081526f726571756573745369676e617475726560801b6020820152610617908290610aa4565b60a0830151610627908290610af2565b60c083015151156106bb576040805180820190915260048152636172677360e01b6020820152610658908290610aa4565b61066181610aff565b60005b8360c00151518110156106b1576106a18460c00151828151811061068a5761068a61126a565b602002602001015183610aa490919063ffffffff16565b6106aa81611296565b9050610664565b506106bb81610b23565b6080830151511561077f576000836020015160028111156106de576106de611254565b036106fc5760405163a80d31f760e01b815260040160405180910390fd5b60408051808201909152600f81526e39b2b1b932ba39a637b1b0ba34b7b760891b602082015261072d908290610aa4565b6107468360200151600281111561055a5761055a611254565b6040805180820190915260078152667365637265747360c81b602082015261076f908290610aa4565b608083015161077f908290610af2565b60e083015151156108185760408051808201909152600981526862797465734172677360b81b60208201526107b5908290610aa4565b6107be81610aff565b60005b8360e001515181101561080e576107fe8460e0015182815181106107e7576107e761126a565b602002602001015183610af290919063ffffffff16565b61080781611296565b90506107c1565b5061081881610b23565b515192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663461d27628688600188886040518663ffffffff1660e01b81526004016108789594939291906112af565b6020604051808303816000875af1158015610897573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bb9190611330565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b336001600160a01b0382160361094a5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610343565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b600080602090506020835110156109b0575081515b60005b818110156109fe576109c6816008611349565b8482815181106109d8576109d861126a565b01602001516001600160f81b031916901c92909217916109f781611296565b90506109b3565b5050919050565b8051600003610a27576040516322ce3edd60e01b815260040160405180910390fd5b83836002811115610a3a57610a3a611254565b90816002811115610a4d57610a4d611254565b90525060408401828015610a6357610a63611254565b90818015610a7357610a73611254565b9052506060909301929092525050565b610a8b610eef565b8051610a979083610b41565b5060006020820152919050565b610ab18260038351610bbb565b81516101d59082610cda565b8151610aca9060c2610d02565b5061049c8282604051602001610ae291815260200190565b6040516020818303038152906040525b610ab18260028351610bbb565b610b0a816004610d6b565b600181602001818151610b1d9190611360565b90525050565b610b2e816007610d6b565b600181602001818151610b1d9190611373565b604080518082019091526060815260006020820152610b61602083611386565b15610b8957610b71602083611386565b610b7c906020611373565b610b869083611360565b91505b602080840183905260405180855260008152908184010181811015610bad57600080fd5b604052508290505b92915050565b6017816001600160401b031611610be7578251610be19060e0600585901b168317610d02565b50505050565b60ff816001600160401b031611610c27578251610c0f906018611fe0600586901b1617610d02565b508251610be1906001600160401b0383166001610d82565b61ffff816001600160401b031611610c68578251610c50906019611fe0600586901b1617610d02565b508251610be1906001600160401b0383166002610d82565b63ffffffff816001600160401b031611610cab578251610c9390601a611fe0600586901b1617610d02565b508251610be1906001600160401b0383166004610d82565b8251610cc290601b611fe0600586901b1617610d02565b508251610be1906001600160401b0383166008610d82565b604080518082019091526060815260006020820152610cfb83838451610e07565b9392505050565b6040805180820190915260608152600060208201528251516000610d27826001611360565b905084602001518210610d4857610d4885610d43836002611349565b610ed8565b8451602083820101858153508051821115610d61578181525b5093949350505050565b81516101d590601f611fe0600585901b1617610d02565b6040805180820190915260608152600060208201528351516000610da68285611360565b90508560200151811115610dc357610dc386610d43836002611349565b60006001610dd38661010061148c565b610ddd9190611373565b90508651828101878319825116178152508051831115610dfb578281525b50959695505050505050565b6040805180820190915260608152600060208201528251821115610e2a57600080fd5b8351516000610e398483611360565b90508560200151811115610e5657610e5686610d43836002611349565b855180518382016020019160009180851115610e70578482525b505050602086015b60208610610eb05780518252610e8f602083611360565b9150610e9c602082611360565b9050610ea9602087611373565b9550610e78565b51815160001960208890036101000a0190811690199190911617905250849150509392505050565b8151610ee48383610b41565b50610be18382610cda565b6040518060400160405280610f17604051806040016040528060608152602001600081525090565b8152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610f6257610f62610f24565b604052919050565b60006001600160401b03831115610f8357610f83610f24565b610f96601f8401601f1916602001610f3a565b9050828152838383011115610faa57600080fd5b828260208301376000602084830101529392505050565b600082601f830112610fd257600080fd5b610cfb83833560208501610f6a565b600080600060608486031215610ff657600080fd5b8335925060208401356001600160401b038082111561101457600080fd5b61102087838801610fc1565b9350604086013591508082111561103657600080fd5b5061104386828701610fc1565b9150509250925092565b60008083601f84011261105f57600080fd5b5081356001600160401b0381111561107657600080fd5b60208301915083602082850101111561108e57600080fd5b9250929050565b80356001600160401b03811681146110ac57600080fd5b919050565b60008060008060008060008060a0898b0312156110cd57600080fd5b88356001600160401b03808211156110e457600080fd5b6110f08c838d0161104d565b909a50985060208b013591508082111561110957600080fd5b6111158c838d0161104d565b909850965060408b013591508082111561112e57600080fd5b818b0191508b601f83011261114257600080fd5b81358181111561115157600080fd5b8c60208260051b850101111561116657600080fd5b60208301965080955050505061117e60608a01611095565b9150608089013590509295985092959890939650565b6000602082840312156111a657600080fd5b81356001600160a01b0381168114610cfb57600080fd5b60006001600160401b03808411156111d7576111d7610f24565b8360051b60206111e8818301610f3a565b86815291850191818101903684111561120057600080fd5b865b848110156112485780358681111561121a5760008081fd5b880136601f82011261122c5760008081fd5b61123a368235878401610f6a565b845250918301918301611202565b50979650505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016112a8576112a8611280565b5060010190565b6001600160401b03861681526000602060a08184015286518060a085015260005b818110156112ec5788810183015185820160c0015282016112d0565b50600060c0828601015260c0601f19601f83011685010192505050611317604083018661ffff169052565b63ffffffff939093166060820152608001529392505050565b60006020828403121561134257600080fd5b5051919050565b8082028115828204841417610bb557610bb5611280565b80820180821115610bb557610bb5611280565b81810381811115610bb557610bb5611280565b6000826113a357634e487b7160e01b600052601260045260246000fd5b500690565b600181815b808511156113e35781600019048211156113c9576113c9611280565b808516156113d657918102915b93841c93908002906113ad565b509250929050565b6000826113fa57506001610bb5565b8161140757506000610bb5565b816001811461141d576002811461142757611443565b6001915050610bb5565b60ff84111561143857611438611280565b50506001821b610bb5565b5060208310610133831016604e8410600b8410161715611466575081810a610bb5565b61147083836113a8565b806000190482111561148457611484611280565b029392505050565b6000610cfb83836113eb56fea2646970667358221220d12d86199fe47ef5a6ee35e2c2ff9a4ee32548e9b9943c493493125930e7b78b64736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80636d9809a0116100715780636d9809a01461012857806379ba5097146101325780638da5cb5b1461013a578063b1e2174914610155578063f2fde38b1461015e578063f7b4c06f1461017157600080fd5b80630ca76175146100ae5780633944ea3a146100c357806342748b2a146100df5780634b0795a81461010c5780635fa353e714610115575b600080fd5b6100c16100bc366004610fe1565b610181565b005b6100cc60035481565b6040519081526020015b60405180910390f35b6005546100f790640100000000900463ffffffff1681565b60405163ffffffff90911681526020016100d6565b6100cc60045481565b6100c16101233660046110b1565b6101da565b6100f76201117081565b6100c16102f4565b6000546040516001600160a01b0390911681526020016100d6565b6100cc60025481565b6100c161016c366004611194565b6103a3565b6005546100f79063ffffffff1681565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101ca5760405163c6829f8360e01b815260040160405180910390fd5b6101d58383836103b7565b505050565b6101e261043a565b61022b6040805161010081019091528060008152602001600081526020016000815260200160608152602001606081526020016060815260200160608152602001606081525090565b61026d89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859392505061048f9050565b85156102b5576102b587878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506104a09050565b83156102cf576102cf6102c885876111bd565b82906104d1565b6102e66102db826104fb565b846201117085610820565b600255505050505050505050565b6001546001600160a01b0316331461034c5760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b60448201526064015b60405180910390fd5b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6103ab61043a565b6103b4816108f2565b50565b82600254146103dc5760405163d068bf5b60e01b815260048101849052602401610343565b6103e58261099b565b60035581516005805463ffffffff191663ffffffff90921691909117905561040c8161099b565b600455516005805463ffffffff9092166401000000000267ffffffff00000000199092169190911790555050565b6000546001600160a01b0316331461048d5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b6044820152606401610343565b565b61049c8260008084610a05565b5050565b80516000036104c25760405163e889636f60e01b815260040160405180910390fd5b60016020830152608090910152565b80516000036104f35760405163fe936cb760e01b815260040160405180910390fd5b60c090910152565b6060600061050a610100610a83565b90506105436040518060400160405280600c81526020016b31b7b232a637b1b0ba34b7b760a11b81525082610aa490919063ffffffff16565b825161056190600281111561055a5761055a611254565b8290610abd565b6040805180820190915260088152676c616e677561676560c01b602082015261058b908290610aa4565b60408301516105a290801561055a5761055a611254565b604080518082019091526006815265736f7572636560d01b60208201526105ca908290610aa4565b60608301516105da908290610aa4565b60a083015151156106275760408051808201909152601081526f726571756573745369676e617475726560801b6020820152610617908290610aa4565b60a0830151610627908290610af2565b60c083015151156106bb576040805180820190915260048152636172677360e01b6020820152610658908290610aa4565b61066181610aff565b60005b8360c00151518110156106b1576106a18460c00151828151811061068a5761068a61126a565b602002602001015183610aa490919063ffffffff16565b6106aa81611296565b9050610664565b506106bb81610b23565b6080830151511561077f576000836020015160028111156106de576106de611254565b036106fc5760405163a80d31f760e01b815260040160405180910390fd5b60408051808201909152600f81526e39b2b1b932ba39a637b1b0ba34b7b760891b602082015261072d908290610aa4565b6107468360200151600281111561055a5761055a611254565b6040805180820190915260078152667365637265747360c81b602082015261076f908290610aa4565b608083015161077f908290610af2565b60e083015151156108185760408051808201909152600981526862797465734172677360b81b60208201526107b5908290610aa4565b6107be81610aff565b60005b8360e001515181101561080e576107fe8460e0015182815181106107e7576107e761126a565b602002602001015183610af290919063ffffffff16565b61080781611296565b90506107c1565b5061081881610b23565b515192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663461d27628688600188886040518663ffffffff1660e01b81526004016108789594939291906112af565b6020604051808303816000875af1158015610897573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bb9190611330565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b336001600160a01b0382160361094a5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401610343565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b600080602090506020835110156109b0575081515b60005b818110156109fe576109c6816008611349565b8482815181106109d8576109d861126a565b01602001516001600160f81b031916901c92909217916109f781611296565b90506109b3565b5050919050565b8051600003610a27576040516322ce3edd60e01b815260040160405180910390fd5b83836002811115610a3a57610a3a611254565b90816002811115610a4d57610a4d611254565b90525060408401828015610a6357610a63611254565b90818015610a7357610a73611254565b9052506060909301929092525050565b610a8b610eef565b8051610a979083610b41565b5060006020820152919050565b610ab18260038351610bbb565b81516101d59082610cda565b8151610aca9060c2610d02565b5061049c8282604051602001610ae291815260200190565b6040516020818303038152906040525b610ab18260028351610bbb565b610b0a816004610d6b565b600181602001818151610b1d9190611360565b90525050565b610b2e816007610d6b565b600181602001818151610b1d9190611373565b604080518082019091526060815260006020820152610b61602083611386565b15610b8957610b71602083611386565b610b7c906020611373565b610b869083611360565b91505b602080840183905260405180855260008152908184010181811015610bad57600080fd5b604052508290505b92915050565b6017816001600160401b031611610be7578251610be19060e0600585901b168317610d02565b50505050565b60ff816001600160401b031611610c27578251610c0f906018611fe0600586901b1617610d02565b508251610be1906001600160401b0383166001610d82565b61ffff816001600160401b031611610c68578251610c50906019611fe0600586901b1617610d02565b508251610be1906001600160401b0383166002610d82565b63ffffffff816001600160401b031611610cab578251610c9390601a611fe0600586901b1617610d02565b508251610be1906001600160401b0383166004610d82565b8251610cc290601b611fe0600586901b1617610d02565b508251610be1906001600160401b0383166008610d82565b604080518082019091526060815260006020820152610cfb83838451610e07565b9392505050565b6040805180820190915260608152600060208201528251516000610d27826001611360565b905084602001518210610d4857610d4885610d43836002611349565b610ed8565b8451602083820101858153508051821115610d61578181525b5093949350505050565b81516101d590601f611fe0600585901b1617610d02565b6040805180820190915260608152600060208201528351516000610da68285611360565b90508560200151811115610dc357610dc386610d43836002611349565b60006001610dd38661010061148c565b610ddd9190611373565b90508651828101878319825116178152508051831115610dfb578281525b50959695505050505050565b6040805180820190915260608152600060208201528251821115610e2a57600080fd5b8351516000610e398483611360565b90508560200151811115610e5657610e5686610d43836002611349565b855180518382016020019160009180851115610e70578482525b505050602086015b60208610610eb05780518252610e8f602083611360565b9150610e9c602082611360565b9050610ea9602087611373565b9550610e78565b51815160001960208890036101000a0190811690199190911617905250849150509392505050565b8151610ee48383610b41565b50610be18382610cda565b6040518060400160405280610f17604051806040016040528060608152602001600081525090565b8152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610f6257610f62610f24565b604052919050565b60006001600160401b03831115610f8357610f83610f24565b610f96601f8401601f1916602001610f3a565b9050828152838383011115610faa57600080fd5b828260208301376000602084830101529392505050565b600082601f830112610fd257600080fd5b610cfb83833560208501610f6a565b600080600060608486031215610ff657600080fd5b8335925060208401356001600160401b038082111561101457600080fd5b61102087838801610fc1565b9350604086013591508082111561103657600080fd5b5061104386828701610fc1565b9150509250925092565b60008083601f84011261105f57600080fd5b5081356001600160401b0381111561107657600080fd5b60208301915083602082850101111561108e57600080fd5b9250929050565b80356001600160401b03811681146110ac57600080fd5b919050565b60008060008060008060008060a0898b0312156110cd57600080fd5b88356001600160401b03808211156110e457600080fd5b6110f08c838d0161104d565b909a50985060208b013591508082111561110957600080fd5b6111158c838d0161104d565b909850965060408b013591508082111561112e57600080fd5b818b0191508b601f83011261114257600080fd5b81358181111561115157600080fd5b8c60208260051b850101111561116657600080fd5b60208301965080955050505061117e60608a01611095565b9150608089013590509295985092959890939650565b6000602082840312156111a657600080fd5b81356001600160a01b0381168114610cfb57600080fd5b60006001600160401b03808411156111d7576111d7610f24565b8360051b60206111e8818301610f3a565b86815291850191818101903684111561120057600080fd5b865b848110156112485780358681111561121a5760008081fd5b880136601f82011261122c5760008081fd5b61123a368235878401610f6a565b845250918301918301611202565b50979650505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016112a8576112a8611280565b5060010190565b6001600160401b03861681526000602060a08184015286518060a085015260005b818110156112ec5788810183015185820160c0015282016112d0565b50600060c0828601015260c0601f19601f83011685010192505050611317604083018661ffff169052565b63ffffffff939093166060820152608001529392505050565b60006020828403121561134257600080fd5b5051919050565b8082028115828204841417610bb557610bb5611280565b80820180821115610bb557610bb5611280565b81810381811115610bb557610bb5611280565b6000826113a357634e487b7160e01b600052601260045260246000fd5b500690565b600181815b808511156113e35781600019048211156113c9576113c9611280565b808516156113d657918102915b93841c93908002906113ad565b509250929050565b6000826113fa57506001610bb5565b8161140757506000610bb5565b816001811461141d576002811461142757611443565b6001915050610bb5565b60ff84111561143857611438611280565b50506001821b610bb5565b5060208310610133831016604e8410600b8410161715611466575081810a610bb5565b61147083836113a8565b806000190482111561148457611484611280565b029392505050565b6000610cfb83836113eb56fea2646970667358221220d12d86199fe47ef5a6ee35e2c2ff9a4ee32548e9b9943c493493125930e7b78b64736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "FunctionsClientExample",
    constructorArgs: [router: AbiParameterToPrimitiveType<{"name":"router","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsClientExample$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/example/FunctionsClientExample.sol:FunctionsClientExample",
    constructorArgs: [router: AbiParameterToPrimitiveType<{"name":"router","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<FunctionsClientExample$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "FunctionsClientExample",
    constructorArgs: [router: AbiParameterToPrimitiveType<{"name":"router","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsClientExample$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/example/FunctionsClientExample.sol:FunctionsClientExample",
    constructorArgs: [router: AbiParameterToPrimitiveType<{"name":"router","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<FunctionsClientExample$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "FunctionsClientExample",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsClientExample$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/@chainlink/contracts/src/v0.8/functions/dev/1_0_0/example/FunctionsClientExample.sol:FunctionsClientExample",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<FunctionsClientExample$Type["abi"]>>;
}
