// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.25;

//import "hardhat/console.sol";

contract Vote {
    string[] public candidates;
    address[] public voters;
    mapping(string=>uint) public votes;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    function getCandidate(uint idx) public view returns (string memory){
        return candidates[idx];
    }

    function vote (string memory _candidate) validCandidate(_candidate) public {
        votes[_candidate]++;
    }

    modifier validCandidate(string memory _candidate) {
        bool foundMatch = false;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidate))) {
                foundMatch = true;
                _;
            }
        }
        if (foundMatch == false){
            revert("Invalid candidate.");
        }
    }
}