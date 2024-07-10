import Web3 from 'web3';
import VoteContractABI from './VoteContractABI.json';

const contractAddress = '0x5Bf9Bdc6D8E70986F166997dBdABC4A04D308d1e';
// Address with original deployment (no getters): 0x8A0F33F92ba8C6fCA1a35dD9a5b0f571920a1ca6
const contract = new Web3.eth.Contract(VoteContractABI, contractAddress);

const candidates = contract.methods.getCandidates().call();