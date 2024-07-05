import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import VoteContractABI from './VoteContractABI.json';

const contractAddress = '0x8A0F33F92ba8C6fCA1a35dD9a5b0f571920a1ca6';
const contract = new Web3.eth.Contract(VoteContractABI, contractAddress);
