import { simulateScript, SubscriptionManager, SecretsManager, Location, ReturnType, CodeLanguage } from '@chainlink/functions-toolkit';

import { task } from 'hardhat/config';
import * as fs from 'fs';

import { config as envConfig } from 'dotenv';
envConfig({ path: './.env' });

import { networks } from '../chainlink-fun-config/networks';

task('request-mint', 'request a trusted minimized mint', async (taskArgs, hre) => {
  const viem = hre.viem;
  const ethers = hre.ethers;

  const networkName = 'polygonMumbai';
  const contractAddr = '0x2b18D3657f4B4129B36D74BCF5B2889C91fBa252';
  const subscriptionId = 825;
  const slotId = 0;
  const callbackGasLimit = 250_000;
  const configpath = './chainlink-fun-config/request-config';

  const requestConfig: any = {
    source: fs.readFileSync('./chainlink-fun/graphquery.js').toString(),
    codeLocation: Location.Inline,
    secrets: { graphKey: process.env.GRAPH_KEY },
    // Optional if secrets are expected in the sourceLocation of secrets (only Remote or DONHosted is supported)
    secretsLocation: Location.DONHosted,
    args: ['0x7730B4Cdc1B1E7a33A309AB7205411faD009C106'],
    // Code language (only JavaScript is currently supported)
    codeLanguage: CodeLanguage.JavaScript,
    // Expected type of the returned value
    expectedReturnType: ReturnType.uint256,
  };

  const { responseBytesHexstring, errorString } = await simulateScript(requestConfig);
  console.log({ responseBytesHexstring, errorString });

  // signer needs to be connected to mumbai
  const signers = await ethers.getSigners();
  const signer = signers[0];

  const linkTokenAddress = networks[networkName]['linkToken'];
  const functionsRouterAddress = networks[networkName]['functionsRouter'];
  const donId = networks[networkName]['donId'];

  const subManager = new SubscriptionManager({ signer: signer as any, linkTokenAddress, functionsRouterAddress });
  await subManager.initialize();

  const subInfo = await subManager.getSubscriptionInfo(subscriptionId);
  if (!subInfo.consumers.map((c) => c.toLowerCase()).includes(contractAddr.toLowerCase())) {
    throw Error(`Consumer contract ${contractAddr} has not been added to subscription ${subscriptionId}`);
  }
  console.log({ subInfo });

  const { gasPrice } = await ethers.provider.getFeeData();
  const gasPriceWei = BigInt(ethers.utils.formatUnits(gasPrice, 'wei'));
  const estimatedCostJuels = await subManager.estimateFunctionsRequestCost({
    donId,
    subscriptionId,
    callbackGasLimit,
    gasPriceWei,
  });

  // Ensure that the subscription has a sufficient balance
  const estimatedCostLink = ethers.utils.formatUnits(estimatedCostJuels, 18);
  const subBalanceLink = ethers.utils.formatUnits(subInfo.balance, 18);
  console.log({ subBalanceLink });
  if (subInfo.balance <= estimatedCostJuels) {
    throw Error(
      `Subscription ${subscriptionId} does not have sufficient funds. The estimated cost is ${estimatedCostLink} LINK, but the subscription only has ${subBalanceLink} LINK.`
    );
  }

  // Secrets
  const secretsManager = new SecretsManager({ signer: signer as any, functionsRouterAddress, donId });
  await secretsManager.initialize();

  const encryptedSecrets = await secretsManager.encryptSecrets(requestConfig.secrets);

  const { version } = await secretsManager.uploadEncryptedSecretsToDON({
    encryptedSecretsHexstring: encryptedSecrets.encryptedSecrets,
    gatewayUrls: networks[networkName]['gatewayUrls'],
    slotId,
    minutesUntilExpiration: 5,
  });
  const encryptedSecretsReference = secretsManager.buildDONHostedEncryptedSecretsReference({
    slotId,
    version,
  });

  console.log({ encryptedSecretsReference });
});
