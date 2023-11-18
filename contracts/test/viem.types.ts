import { PublicClient, Account, Chain, Transport, WalletClient, decodeEventLog, GetContractReturnType } from 'viem';

import { tokenFactoryABI, tokenABI } from '../export/abis';

export type TransactionReceipt = Awaited<ReturnType<PublicClient['waitForTransactionReceipt']>>;
export type Signer = WalletClient<Transport, Chain, Account>;

export type TokenFactory = GetContractReturnType<typeof tokenFactoryABI, PublicClient, Signer>;
export type Token = GetContractReturnType<typeof tokenABI, PublicClient, Signer>;

export type EventType = Awaited<ReturnType<typeof decodeEventLog>>;
export type TransferEventType = Awaited<ReturnType<typeof decodeEventLog<typeof tokenABI, 'Transfer'>>>;
export type TokenCreatedEvent = Awaited<ReturnType<typeof decodeEventLog<typeof tokenFactoryABI, 'TokenCreated'>>>;
