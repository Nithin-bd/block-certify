import Web3 from "web3";

//var Web3 = require('web3');
//var web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const web3 = new Web3(window.web3.currentProvider || "http://localhost:8545");

export default web3;
