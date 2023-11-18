import { simulateScript } from '@chainlink/functions-toolkit';
import { task } from 'hardhat/config';
import * as path from 'path';

task('request-mint', 'request a trusted minimized mint', async (taskArgs, hre) => {
  const viem = hre.viem;
  const accounts = await viem.getWalletClients();

  const contractAddr = '0xB21ea083d9f17D5c9E47A99c1520F65368D8df62';
  const subscriptionId = 825;
  const slotId = 0;
  const callbackGasLimit = 250_000;
  const configpath = './chainlink-fun-config/request-config';

  const requestConfig = require(path.join(process.cwd(), configpath));

  const { responseBytesHexstring, errorString } = await simulateScript(requestConfig);
  console.log({ responseBytesHexstring, errorString });
});
