import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('TokenFactory', (m) => {
  const verifier = m.contract('ERC20BalanceOf', []);
  const master = m.contract('Token', []);
  const factory = m.contract('TokenFactory', [master]);
  return { factory };
});
