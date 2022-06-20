/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721A, ERC721AInterface } from "../ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001415380380620014158339810160408190526200003491620001df565b8151620000499060029060208501906200006c565b5080516200005f9060039060208401906200006c565b5050600080555062000285565b8280546200007a9062000249565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013a57600080fd5b81516001600160401b038082111562000157576200015762000112565b604051601f8301601f19908116603f0116810190828211818310171562000182576200018262000112565b816040528381526020925086838588010111156200019f57600080fd5b600091505b83821015620001c35785820183015181830184015290820190620001a4565b83821115620001d55760008385830101525b9695505050505050565b60008060408385031215620001f357600080fd5b82516001600160401b03808211156200020b57600080fd5b620002198683870162000128565b935060208501519150808211156200023057600080fd5b506200023f8582860162000128565b9150509250929050565b600181811c908216806200025e57607f821691505b6020821081036200027f57634e487b7160e01b600052602260045260246000fd5b50919050565b61118080620002956000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d6578063b88d4fde146101e9578063c87b56dd146101fc578063e985e9c51461020f57600080fd5b80636352211e146101a857806370a08231146101bb57806395d89b41146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806318160ddd1461016c57806323b872dd1461018257806342842e0e1461019557600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610d37565b61024b565b60405190151581526020015b60405180910390f35b61011f6102e8565b60405161010e9190610dac565b61013f61013a366004610dbf565b61037a565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610df4565b6103d7565b005b600154600054035b60405190815260200161010e565b61016a610190366004610e1e565b610496565b61016a6101a3366004610e1e565b6104a1565b61013f6101b6366004610dbf565b6104bc565b6101746101c9366004610e5a565b6104ce565b61011f610536565b61016a6101e4366004610e75565b610545565b61016a6101f7366004610ec7565b6105f3565b61011f61020a366004610dbf565b610644565b61010261021d366004610fa3565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102ae57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102e257507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060600280546102f790610fd6565b80601f016020809104026020016040519081016040528092919081815260200182805461032390610fd6565b80156103705780601f1061034557610100808354040283529160200191610370565b820191906000526020600020905b81548152906001019060200180831161035357829003601f168201915b5050505050905090565b6000610385826106ee565b6103bb576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006103e2826104bc565b9050806001600160a01b0316836001600160a01b03160361042f576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336001600160a01b0382161480159061044f575061044d813361021d565b155b15610486576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610491838383610719565b505050565b61049183838361078d565b610491838383604051806020016040528060008152506105f3565b60006104c7826109c8565b5192915050565b60006001600160a01b038216610510576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6060600380546102f790610fd6565b336001600160a01b03831603610587576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6105fe84848461078d565b6001600160a01b0383163b15158015610620575061061e84848484610afd565b155b1561063e576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061064f826106ee565b610685576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061069c60408051602081019091526000815290565b905080516000036106bc57604051806020016040528060008152506106e7565b806106c684610be9565b6040516020016106d7929190611010565b6040516020818303038152906040525b9392505050565b60008054821080156102e2575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000610798826109c8565b9050836001600160a01b031681600001516001600160a01b0316146107e9576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000336001600160a01b03861614806108075750610807853361021d565b806108225750336108178461037a565b6001600160a01b0316145b90508061085b576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b03841661089b576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108a760008487610719565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b4290921691909102178355870180845292208054919390911661097d57600054821461097d578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b604080516060810182526000808252602082018190529181019190915281600054811015610acb57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290610ac95780516001600160a01b031615610a5f579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215610ac4579392505050565b610a5f565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610b3290339089908890889060040161103f565b6020604051808303816000875af1925050508015610b6d575060408051601f3d908101601f19168201909252610b6a9181019061107b565b60015b610bcb573d808015610b9b576040519150601f19603f3d011682016040523d82523d6000602084013e610ba0565b606091505b508051600003610bc3576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606081600003610c2c57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610c565780610c40816110ae565b9150610c4f9050600a836110dd565b9150610c30565b60008167ffffffffffffffff811115610c7157610c71610eb1565b6040519080825280601f01601f191660200182016040528015610c9b576020820181803683370190505b5090505b8415610be157610cb06001836110f1565b9150610cbd600a86611108565b610cc890603061111c565b60f81b818381518110610cdd57610cdd611134565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610d17600a866110dd565b9450610c9f565b6001600160e01b031981168114610d3457600080fd5b50565b600060208284031215610d4957600080fd5b81356106e781610d1e565b60005b83811015610d6f578181015183820152602001610d57565b8381111561063e5750506000910152565b60008151808452610d98816020860160208601610d54565b601f01601f19169290920160200192915050565b6020815260006106e76020830184610d80565b600060208284031215610dd157600080fd5b5035919050565b80356001600160a01b0381168114610def57600080fd5b919050565b60008060408385031215610e0757600080fd5b610e1083610dd8565b946020939093013593505050565b600080600060608486031215610e3357600080fd5b610e3c84610dd8565b9250610e4a60208501610dd8565b9150604084013590509250925092565b600060208284031215610e6c57600080fd5b6106e782610dd8565b60008060408385031215610e8857600080fd5b610e9183610dd8565b915060208301358015158114610ea657600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610edd57600080fd5b610ee685610dd8565b9350610ef460208601610dd8565b925060408501359150606085013567ffffffffffffffff80821115610f1857600080fd5b818701915087601f830112610f2c57600080fd5b813581811115610f3e57610f3e610eb1565b604051601f8201601f19908116603f01168101908382118183101715610f6657610f66610eb1565b816040528281528a6020848701011115610f7f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fb657600080fd5b610fbf83610dd8565b9150610fcd60208401610dd8565b90509250929050565b600181811c90821680610fea57607f821691505b60208210810361100a57634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611022818460208801610d54565b835190830190611036818360208801610d54565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526110716080830184610d80565b9695505050505050565b60006020828403121561108d57600080fd5b81516106e781610d1e565b634e487b7160e01b600052601160045260246000fd5b6000600182016110c0576110c0611098565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826110ec576110ec6110c7565b500490565b60008282101561110357611103611098565b500390565b600082611117576111176110c7565b500690565b6000821982111561112f5761112f611098565b500190565b634e487b7160e01b600052603260045260246000fdfea26469706673582212205f0ef41d5afe085326757bf707e7914b95732805a74a8673df186c7fa7c6511d64736f6c634300080e0033";

export class ERC721A__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}
