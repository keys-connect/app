import { TransactionReceipt, decodeEventLog } from 'viem';
import { EventType } from './viem.types';
import { tokenFactoryABI } from 'export/abis';

export const getContractEventsFromReceipt = async (contractName: string, rec: TransactionReceipt): Promise<EventType[]> => {
  if (!rec.logs) return [];
  const events = rec.logs
    .map((log) => {
      try {
        const event = decodeEventLog({
          abi: tokenFactoryABI,
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
