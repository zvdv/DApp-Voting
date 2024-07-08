import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import VoteContractABI from './VoteContractABI.json';

const contractAddress = '0x8A0F33F92ba8C6fCA1a35dD9a5b0f571920a1ca6';
const contract = new Web3.eth.Contract(VoteContractABI, contractAddress);

let candidate;
// useState ?

export default function MyApp() {
  return (
    <div>
      <h1>Voting</h1>
      <div>
      {candidate = "Banana"}
      <p>{candidate}</p>
      <VoteButton />
      </div>
      <div>
      {candidate = "Strawberry"}
      <p>{candidate}</p>
      <VoteButton />
      </div>
    </div>
  );
}

function vote(candidate){
  // Call contract vote funtion with specified candidate
}

function VoteButton() {
  return (
    <button onClick={vote(candidate)}>
      Vote for {candidate}
    </button>
  );
}