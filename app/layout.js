'use client'
import React from 'react';
import Web3 from 'web3';
//import MetaMaskProvider from 'web3';
import VoteMetaData from '../artifacts/Vote_metadata.json';

const VoteContractABI = VoteMetaData.output.abi;
const web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider('https://rpc.sepolia.org'));

// if (MetaMaskProvider.window.ethereum){
// } else {
//     alert("No ethereum provider.");
//     const web3 = new Web3();
// }
const contractAddress = '0x5Bf9Bdc6D8E70986F166997dBdABC4A04D308d1e';
const contract = new web3.eth.Contract(VoteContractABI, contractAddress);

const candidates = contract.methods.candidates(0).call();

export default function RootLayout() {
    return (
        <html>
        <body>
            <div>
            <h1>Voting</h1>
            <p>abi type: {typeof VoteContractABI}</p>
            <p>metadata type: {typeof VoteMetaData}</p>
            <p>metadata keys: {Object.keys(VoteMetaData)}</p>
            <p>candidates: {candidates}</p>
            </div>
        </body>
        </html>
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