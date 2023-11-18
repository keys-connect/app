import { expect } from 'chai';
import { viem } from 'hardhat';
import { PublicClient, getAddress, numberToHex, pad, parseEther } from 'viem';

import {
  Condition,
  HexStr,
  User,
  ZERO_BYTES,
  addressToBytes32,
  createTokenHelper,
  deployToken,
  deployTokenFactory,
  deployVerifier,
  getContractEventsFromReceipt,
  shouldFail,
  tokenFrom,
} from './support';
import { IVerifier, Signer, TestErc20, Token, TokenFactory } from './viem.types';

const WRONG_TOKEN_ID = 9999999999n;
const FOUNDERS_VOUCHER = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;

describe('Token', () => {
  let client: PublicClient;

  let factory: TokenFactory;
  let testERC20Token: any;

  let keyContractRead: Token;
  let erc20Verifier: IVerifier;

  let deployer: Signer;

  let admin: User;
  let u1: User;
  let u2: User;
  let u3: User;
  const N0 = 3n;

  let reader: User;

  before(async () => {
    client = await viem.getPublicClient();
    let signers = await viem.getWalletClients();
    deployer = signers[signers.length - 1];

    [admin, u1, u2, u3, reader] = await Promise.all(
      signers.map(async (s: Signer, ix: number): Promise<User> => {
        return { s };
      })
    );

    /** deploy test ERC20 */
    testERC20Token = (await viem.deployContract('TestErc20', ['Test', 'TST', parseEther('100'), u1.s.account.address, 18], {
      walletClient: deployer,
    })) as unknown as TestErc20;
    expect(await testERC20Token.read.balanceOf([u1.s.account.address])).to.eq(parseEther('100'));

    /** deploy contracts */
    const master = await deployToken(deployer);
    factory = await deployTokenFactory(master.address, deployer);
    erc20Verifier = await deployVerifier('ERC20BalanceOf', deployer);

    console.log('factory address', factory.address);
    console.log('testERC20Token address', testERC20Token.address);
    console.log('erc20Verifier address', erc20Verifier.address);
  });

  it('was deployed with founders', async () => {
    const conditions: Condition[] = [
      {
        verifier: erc20Verifier.address,
        pars: [pad(testERC20Token.address as HexStr), pad(numberToHex(parseEther('10')))],
      },
    ];

    const { address, factoryEvents, tokenEvents } = await createTokenHelper(factory, admin.s.account.address, 'token 1', conditions);

    keyContractRead = await tokenFrom(address, reader.s);

    expect(factoryEvents).to.exist;
    expect(getAddress(address)).to.be.string;
  });

  it('mints an NFT to a valid account', async () => {
    console.log('u1 address', u1.s.account.address);

    const hash = await keyContractRead.write.mint([u1.s.account.address]);
    const client = await viem.getPublicClient();
    const receipt = await client.waitForTransactionReceipt({ hash });
    const events = await getContractEventsFromReceipt('Token', receipt);

    expect(events).to.have.length;
  });

  // it('wont mint an NFT to a non valid account', async () => {
  //   console.log('u1 address', u1.s.account.address);

  //   await shouldFail
  //   const hash = await keyContractRead.write.mint([u2.s.account.address]);
  //   const client = await viem.getPublicClient();
  //   const receipt = await client.waitForTransactionReceipt({ hash });
  //   const events = await getContractEventsFromReceipt('Token', receipt);

  //   expect(events).to.have.length;
  // });
});
