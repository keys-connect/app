import { expect } from 'chai';
import { viem } from 'hardhat';
import { PublicClient, getAddress } from 'viem';

import {
  Condition,
  User,
  addressToBytes32,
  createTokenHelper,
  deployToken,
  deployTokenFactory,
  deployVerifier,
} from './support';
import { IVerifier, Signer, Token, TokenFactory } from './viem.types';

const WRONG_TOKEN_ID = 9999999999n;
const FOUNDERS_VOUCHER = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;

describe('Token', () => {
  let client: PublicClient;
  
  let factory: TokenFactory;

  let erc20Verifier: IVerifier;
  
  let deployer: Signer;

  let admin: User;
  let u1: User;
  let u2: User;
  let u3: User;
  const N0 = 3n;

  before(async () => {
    client = await viem.getPublicClient();
    let signers = await viem.getWalletClients();
    deployer = signers[signers.length - 1];

    [admin, u1, u2, u3] = await Promise.all(
      signers.map(async (s: Signer, ix: number): Promise<User> => {
        return { s };
      })
    );

    /** */
    const master = await deployToken(deployer);
    factory = await deployTokenFactory(master.address, deployer);
    erc20Verifier = await deployVerifier('ERC20BalanceOf', deployer);
  });

  it('was deployed with founders', async () => {
    const conditions: Condition[] = [{
      verifier: erc20Verifier.address,
      pars: [addressToBytes32(u1.s.account.address)]
    }]

    const {address, factoryEvents, tokenEvents} = await createTokenHelper(factory, admin.s.account.address, 'token 1', conditions);
    expect(factoryEvents).to.exist;
    expect(getAddress(address)).to.be.string;
  });

});
