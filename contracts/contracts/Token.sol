// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

import {ERC721Custom} from '../contracts-oz/ERC721Custom.sol';
import {ERC721URIStorageCustom} from '../contracts-oz/ERC721URIStorageCustom.sol';
// import "hardhat/console.sol";

/**
 * @title Token
 */

contract Token is ERC721URIStorageCustom, Initializable {
    // for the master
    constructor(string memory name_, string memory symbol_) ERC721Custom(name_, symbol_) {
    }

    /** actual init for factory creation */
    function init (string memory __name, string memory __symbol) external initializer {
        _name = __name;
        _symbol = __symbol;
    }
}
