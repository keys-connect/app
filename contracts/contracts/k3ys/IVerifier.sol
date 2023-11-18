// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface IVerifier {
  
  error WrongNumberOfParameters();
  event Verified(address indexed adr);

  function verify(address adr, bytes32[] memory pars) external returns (bool);
}