// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import {ERC721Custom} from '../oz/ERC721Custom.sol';
import {ERC721URIStorageCustom} from '../oz/ERC721URIStorageCustom.sol';

import {IVerifier} from './IVerifier.sol';
import "hardhat/console.sol";

/**
 * @title Token
 */

contract Token is ERC721URIStorageCustom, Initializable, Ownable {
    uint256 nextTokenId;

    struct Condition {
        address verifier;
        bytes32[] pars; 
    }

    Condition[] conditions;

    address oracle;

    error ConditionNotMet(address to, address verfier, bytes32[] pars);
    error OnlyOracle();

    modifier onlyOracle() {
        if (_msgSender() != oracle) revert OnlyOracle();
        _;
    }

    // constructor is dummy for proxy master
    constructor(address _oracle) Ownable(msg.sender) ERC721Custom("", "") {
        oracle = _oracle;
        nextTokenId = 0;
    }

    /** actual initialization when creating proxy */
    function init (string memory __name, string memory __symbol, address owner, address[] memory _verifiers, bytes32[][] memory _parsArray) external initializer {
        _name = __name;
        _symbol = __symbol;

        _transferOwnership(owner);

        for(uint8 ix=0; ix < _verifiers.length; ix++) {
            Condition memory condition;

            condition.verifier = _verifiers[ix];
            condition.pars = _parsArray[ix];
            conditions.push(condition);
        }
    }

    function mintConditions(address to) public {
        for(uint8 ix=0; ix < conditions.length; ix++) {
            Condition memory condition = conditions[ix];
            bool res = IVerifier(condition.verifier).verify(to, condition.pars);
            
            if (!res) revert ConditionNotMet(to,condition.verifier, condition.pars);
        }
        _safeMint(to, nextTokenId++);
    }

    function mintOracle(address to) public onlyOracle {
        _safeMint(to, nextTokenId++);
    }
}
