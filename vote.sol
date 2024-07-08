// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.25;

//import "hardhat/console.sol";

contract Vote {
    string[] public candidates;
    address[] public voters;
    struct Candidate {
        bool exists;
        uint votes;
    }
    mapping(string=>Candidate) public votes;

    constructor(string[] memory _candidates) {
        candidates = _candidates;
        for (uint i = 0; i < candidates.length; i++){
            votes[candidates[i]].exists = true;
        }
    }

    function getCandidate(uint idx) public view returns(string memory){
        require(idx < candidates.length, "Invalid candidate index.");
        return candidates[idx];
    }

    function getVoters(uint idx) public view returns(address){
        require(idx < voters.length, "Invalid voter index.");
        return voters[idx];
    }

    function getVotes(string memory candidate) public view returns(uint){
        require(votes[candidate].exists == true, "Candidate does not exist.");
        return votes[candidate].votes;
    }

    function vote(string memory _candidate) validCandidate(_candidate) public {
        votes[_candidate].votes++;
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