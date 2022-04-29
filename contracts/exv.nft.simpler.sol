// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract BattlePassProxy is ERC1967Proxy {
    constructor (address setup, bytes memory initData) ERC1967Proxy(
        setup,
        initData
    ) { }
}
