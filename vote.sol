// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.25;

contract Vote {
    string[] public candidates;
    address[] public voters;
    mapping(string=>uint) public votes;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }
}