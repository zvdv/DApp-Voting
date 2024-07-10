'use client'
import React from 'react';
import Web3 from 'web3';
//import MetaMaskProvider from 'web3';
import VoteMetaData from '../artifacts/Vote_metadata.json';

const VoteContractABI = VoteMetaData.abi;
const web3 = new Web3('https://rpc.sepolia.org');

// if (MetaMaskProvider.window.ethereum){
// } else {
//     alert("No ethereum provider.");
//     const web3 = new Web3();
// }
const contractAddress = '0x8A0F33F92ba8C6fCA1a35dD9a5b0f571920a1ca6';
const contract = new web3.eth.Contract(VoteContractABI, contractAddress);

const candidates = contract.methods.getCandidates().call();

export default function RootLayout() {
    return (
        <div>
        <h1>Voting</h1>
        <p>{candidates}</p>
        </div>
    )
  }

// function vote(candidate){
//     // Call contract vote funtion with specified candidate
// }
  
// function VoteButton() {
//     return (
//         <button onClick={vote(candidate)}>
//         Vote for {candidate}
//         </button>
//     );
// }