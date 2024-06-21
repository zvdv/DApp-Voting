// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.25;

contract Vote {
    string[] public candidates;
    address[] public voters;
    mapping(string=>uint) public votes;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
    }

    function vote (string memory _candidate) validCandidate(_candidate) public {
        votes[_candidate]++;
    }

    modifier validCandidate(string memory _candidate) {
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidate))) {
                _;
            }
        }
        revert("Invalid candidate.");
    }
}