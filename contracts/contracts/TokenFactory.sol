//// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";

import "./Token.sol";
    
contract TokenFactory {
    Token private master;
    
    event TokenCreated(address creator, address token);

    constructor(address payable _master) {
        master = Token(_master);
    }

    function contractAddress(bytes32 salt) public view returns (address) {
        return Clones.predictDeterministicAddress(address(master), salt);
    }

    function create(
        string memory __name, 
        string memory __symbol, 
        address owner, 
        address[] memory _verifiers, 
        bytes32[][] memory _parsArray,
        bytes32 salt
    ) external returns (address payable proxy) {
        proxy = payable(Clones.cloneDeterministic(address(master), salt));
        
        Token(proxy).init(__name, __symbol, owner, _verifiers, _parsArray);
        emit TokenCreated(msg.sender, proxy);

        return proxy;
    }
}
