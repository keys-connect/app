import { task } from 'hardhat/config';

task('request-mint', 'request a trusted minimized mint', async (taskArgs, hre) => {
  const viem = hre.viem;
  const accounts = await viem.getWalletClients();

  const contractAddr = '0xB21ea083d9f17D5c9E47A99c1520F65368D8df62';
  const subscriptionId = 825;
  const slotId = 0;
  const callbackGasLimit = 250_000;

  console.log(process.env.GRAPH_KEY);
});
