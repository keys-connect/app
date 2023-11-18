import { task } from 'hardhat/config';

task('request-mint', 'request a trusted minimized mint', async (taskArgs, hre) => {
  const viem = (hre as any).viem;
  const accounts = await viem.getWalletClients();

  for (const account of accounts) {
    console.log({ account });
  }
});
