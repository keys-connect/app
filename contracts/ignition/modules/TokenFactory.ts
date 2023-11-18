import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { stringToHex, pad } from 'viem';

export default buildModule('TokenFactory', (m) => {
  const consumer = m.contract('FunctionsConsumer', ['0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C', pad(stringToHex('fun-polygon-mumbai-1'))]);
  const verifier = m.contract('ERC20BalanceOf', []);
  const master = m.contract('Token', []);
  const factory = m.contract('TokenFactory', [master]);
  return { factory };
});
