import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('TokenFactory', (m) => {
  const master = m.contract('Token', []);
  const factory = m.contract('TokenFactory', [master]);
  return { factory };
});
