import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import VoteContractABI from './VoteContractABI.json';

const contractAddress = '0xContractAddress'; // Fake address for now
const contract = new Web3.eth.Contract(VoteContractABI, contractAddress);
