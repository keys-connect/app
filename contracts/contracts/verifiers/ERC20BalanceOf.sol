// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IVerifier} from '../IVerifier.sol';
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20BalanceOf is IVerifier {

  error BalanceNotEnough(address who);

  constructor() {}

  function verify(address who, bytes32[] memory pars) external returns (bool) {
    if (pars.length != 2) revert WrongNumberOfParameters();
    address token = address(uint160(uint256(pars[0])));
    uint256 expectedBalance = uint256(pars[1]);

    uint256 balance = IERC20(token).balanceOf(who);
    if (balance < expectedBalance) revert BalanceNotEnough(who);

    emit Verified(who);
    return true;
  }
}