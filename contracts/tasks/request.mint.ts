import { simulateScript, SubscriptionManager } from '@chainlink/functions-toolkit';
import { task } from 'hardhat/config';
import * as path from 'path';

import { config as envConfig } from 'dotenv';
envConfig({ path: './.env' });

import { networks } from '../chainlink-fun-config/networks';

task('request-mint', 'request a trusted minimized mint', async (taskArgs, hre) => {
  const viem = hre.viem;
  const ethers = hre.ethers;

  const networkName = 'polygonMumbai';
  const contractAddr = '0xB21ea083d9f17D5c9E47A99c1520F65368D8df62';
  const subscriptionId = 825;
  const slotId = 0;
  const callbackGasLimit = 250_000;
  const configpath = './chainlink-fun-config/request-config';

  const requestConfig = require(path.join(process.cwd(), configpath));

  const { responseBytesHexstring, errorString } = await simulateScript(requestConfig);
  console.log({ responseBytesHexstring, errorString });

  // signer needs to be connected to mumbai
  const signers = await ethers.getSigners();
  const signer = signers[0];

  const linkTokenAddress = networks[networkName]['linkToken'];
  const functionsRouterAddress = networks[networkName]['functionsRouter'];
  const subManager = new SubscriptionManager({ signer: signer as any, linkTokenAddress, functionsRouterAddress });
  await subManager.initialize();

  const subInfo = await subManager.getSubscriptionInfo(subscriptionId);
  if (!subInfo.consumers.map((c) => c.toLowerCase()).includes(contractAddr.toLowerCase())) {
    throw Error(`Consumer contract ${contractAddr} has not been added to subscription ${subscriptionId}`);
  }
});
