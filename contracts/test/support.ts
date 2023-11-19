import { artifacts, viem } from 'hardhat';
import { parseEther, parseUnits, TransactionReceipt, decodeEventLog, keccak256, stringToBytes, zeroAddress } from 'viem';

import { EventType, IVerifier, Signer, Token, TokenCreatedEvent, TokenFactory, TransferEventType } from './viem.types';
import { getContractEventsFromReceipt } from './utils';

export interface User {
  s: Signer;
}

export interface Condition {
  verifier: HexStr;
  pars: HexStr[];
}

export type HexStr = `0x${string}`;

export const numOf = (str: string): string => {
  return str.replace(/\s/g, '');
};

export const toWei = (str: string) => {
  return parseEther(numOf(str));
};

export const toBigInt = (num: string, decimals: number) => {
  return parseUnits(num, decimals);
};

export const shouldFail = async (fun: () => any, expectedMsg?: string): Promise<void> => {
  const FAIL = 'function execution did not failed';
  try {
    await fun();
    throw new Error(FAIL);
  } catch (e: any) {
    const msg = e.message as string;
    if (msg == FAIL) {
      throw new Error(FAIL);
    }
    if (expectedMsg !== undefined && !msg.includes(expectedMsg)) {
      throw new Error(`unexpected error message. Received: "${msg}" - Expected: "${expectedMsg}"`);
    } else {
      return;
    }
  }
};

export async function getTimestamp(blockHash?: HexStr) {
  const client = await viem.getPublicClient();
  const block = await client.getBlock(blockHash === undefined ? { blockTag: 'latest' } : { blockHash });
  return block.timestamp;
}

export async function fastForwardFromBlock(blockHash: HexStr, seconds: bigint): Promise<void> {
  const client = await viem.getTestClient();
  const now = await getTimestamp();
  const timeSinceTimemark = now - (await getTimestamp(blockHash));
  const fastforwardAmount = seconds - timeSinceTimemark;
  await client.increaseTime({ seconds: Number(fastforwardAmount) });
  await client.mine({ blocks: 1 });
}

export async function fastForwardToTimestamp(toTimestamp: bigint): Promise<void> {
  const client = await viem.getTestClient();
  const now = await getTimestamp();
  const fastforwardAmount = toTimestamp - now;
  await client.increaseTime({ seconds: Number(fastforwardAmount) });
  await client.mine({ blocks: 1 });
}

export const deployToken = async (signer: Signer): Promise<Token> => {
  return viem.deployContract('Token', [], { walletClient: signer }) as unknown as Token;
};

export const deployVerifier = async (name: string, signer: Signer): Promise<IVerifier> => {
  return viem.deployContract(name, [], { walletClient: signer }) as unknown as IVerifier;
};

export const deployTokenFactory = async (masterAddress: string, signer: Signer): Promise<TokenFactory> => {
  return viem.deployContract('TokenFactory', [masterAddress], { walletClient: signer }) as unknown as TokenFactory;
};

export const getContractEventsFromHash = async (contractName: string, hash: HexStr): Promise<EventType[]> => {
  const client = await viem.getPublicClient();
  const receipt = await client.waitForTransactionReceipt({ hash });
  return getContractEventsFromReceipt(contractName, receipt);
};

export const createTokenHelper = async (factory: TokenFactory, owner: HexStr, name: string, conditions: Condition[]) => {
  const salt = keccak256(stringToBytes(Date.now().toString() + name));
  const oracle = zeroAddress;

  const verifiers = conditions.map((c) => c.verifier);
  const parsArray = conditions.map((c) => c.pars);

  const hash = await factory.write.create([name.slice(0, 3), name, owner, verifiers, parsArray, oracle, salt]);
  const factoryEvents = await getContractEventsFromHash('TokenFactory', hash);

  const createdEvent = factoryEvents?.find((e) => e.eventName === 'TokenCreated') as TokenCreatedEvent;
  if (!createdEvent || !createdEvent.args) throw new Error('Event not found');
  const address = createdEvent?.args.token;

  const tokenEvents = await getContractEventsFromHash('Token', hash);
  return { address, factoryEvents, tokenEvents };
};

export const tokenFrom = (address: HexStr, signer: Signer): Promise<Token> => {
  return viem.getContractAt('Token', address, { walletClient: signer }) as unknown as Promise<Token>;
};

export const addressToBytes32 = (adr: HexStr): HexStr => {
  if (!adr.startsWith('0x') || adr.length !== 42) {
    throw new Error('Invalid Ethereum address');
  }

  // Remove the '0x' prefix, then pad with zeros, and finally add '0x' prefix
  return ('0x' + adr.slice(2).padStart(64, '0')) as HexStr;
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ZERO_BYTES = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const SECONDS_IN_WEEK = 604800;
export const SECONDS_IN_DAY = 86400;
