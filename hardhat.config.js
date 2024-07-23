require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.19",
	networks: {
		swisstronik: {
			url: process.env.API_URL, //URL of the RPC node for Swisstronik.
			accounts: [process.env.PRIVATE_KEY], //Your private key starting with "0x" 
			//Make sure you have enough funds in this wallet to deploy the smart contract
		},
	},
};