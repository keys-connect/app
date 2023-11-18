import { artifacts, viem } from 'hardhat';
import { parseEther, parseUnits, TransactionReceipt, decodeEventLog, keccak256, stringToBytes } from 'viem';

import { EventType, Registry, RegistryFactory, Signer, TokenCreatedEvent, TokenFactory, TransferEventType } from './viem.types';

export interface User {
  s: Signer;
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

export const deployToken = async (signer: Signer): Promise<Registry> => {
  return viem.deployContract('Token', ["", ""], { walletClient: signer }) as unknown as Registry;
};

export const deployTokenFactory = async (masterAddress: string, signer: Signer): Promise<RegistryFactory> => {
  return viem.deployContract('TokenFactory', [masterAddress], { walletClient: signer }) as unknown as RegistryFactory;
};

export const getContractEventsFromHash = async (contractName: string, hash: HexStr): Promise<EventType[]> => {
  const client = await viem.getPublicClient();
  const receipt = await client.waitForTransactionReceipt({ hash });
  return getContractEventsFromReceipt(contractName, receipt);
};

export const getContractEventsFromReceipt = async (contractName: string, rec: TransactionReceipt): Promise<EventType[]> => {
  const factoryArtifact = await artifacts.readArtifact(contractName);
  if (!rec.logs) return [];
  const events = rec.logs
    .map((log) => {
      try {
        const event = decodeEventLog({
          abi: factoryArtifact.abi,
          data: log.data,
          topics: log.topics,
          strict: false,
        });
        return event;
      } catch (e) {
        return undefined;
      }
    })
    .filter((e) => e !== undefined);

  return events as unknown as EventType[];
};

export const createTokenHelper = async (factory: TokenFactory, name: string) => {
  const salt = keccak256(stringToBytes(Date.now().toString() + name));
  const hash = await factory.write.create([name.slice(0,3), name, salt]);
  const factoryEvents = await getContractEventsFromHash('TokenFactory', hash);

  const createdEvent = factoryEvents?.find((e) => e.eventName === 'TokenCreated') as TokenCreatedEvent;
  if (!createdEvent || !createdEvent.args) throw new Error('Event not found');
  const address = createdEvent?.args.token;

  const tokenEvents = await getContractEventsFromHash('Token', hash);
  return {address, factoryEvents, tokenEvents}

}

export const vouchHelper = async (registryAddress: HexStr, by: User, vouched: User) => {
  const token = await tokenFrom(registryAddress, by.s);
  const tx = await token.write.vouch([vouched.s.account.address]);
  const client = await viem.getPublicClient();
  const receipt = await client.waitForTransactionReceipt({ hash: tx });
  const events = await getContractEventsFromReceipt('Registry', receipt);

  const transferEvent = events.find((e) => e.eventName === 'Transfer') as TransferEventType | undefined;

  return { transferEvent, receipt };
};

export const getChallengeParse = (returned: Awaited<ReturnType<Registry['read']['getChallenge']>>) => {
  return {
    creationDate: returned[0],
    endDate: returned[1],
    lastOutcome: returned[2],
    nVoted: returned[3],
    nFor: returned[4],
    executed: returned[5],
  };
};

export const tokenFrom = (address: HexStr, signer: Signer): Promise<Registry> => {
  return viem.getContractAt('Token', address, { walletClient: signer }) as unknown as Promise<Registry>;
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ZERO_BYTES = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const SECONDS_IN_WEEK = 604800;
export const SECONDS_IN_DAY = 86400;
