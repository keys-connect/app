// hardhat.ts

// eslint-disable-next-line
import { ExternalProvider } from '@ethersproject/providers/src.ts/web3-provider';

export {};

declare global {
  interface hre {
    ethers: ExternalProvider;
  }
  interface Window {
    ethereum: ExternalProvider;
  }
}

export {};
