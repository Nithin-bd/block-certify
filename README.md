# Academic Certificate Generation and Validation using Blockchain

This project attempts to counteract fraudulent certificate generation by providing a standardized and decentralized approach to generate certificates. It is also capable of provding a quick and smooth verification process to any recruiter.

## Backend - Setup
### `Step 1:`
Install [MetaMask](https://metamask.io/), which is a browser extension needed to make transactions.

The 2 simple ways of running test networks on MetaMask:

- `ropstan Test network` built-in

- `Ganache` (local blockchain network, which has to be connected manually to MetaMask. The transactions are not recorded on Etherscan)

While using `ropstan network` you will need to have test ether by requesting it from ropstan testnet faucet.

### `Step 2:`

- Open `Remix IDE` on the browser, create a new contract by copying the `smart-contract.sol` file.
- Compile the file created.
- Deploy & Run the contract by selecting `Injected Provider - MetaMask`

The Deployed contract will look like:

![deployed_contract](https://user-images.githubusercontent.com/83744735/189880880-f4aff841-bb6a-4134-b5fe-afc4bf3201b2.JPG)

### `Step 3:`

The contract owner now whitelists the colleges that wish to partake by filling in the following details:

![whitelist](https://user-images.githubusercontent.com/83744735/189880928-61ed4f2d-387a-4b09-b7cc-33d0a39c4311.JPG)

`coladd` refers to the respective college wallet address.

## Frontend - Setup

Clone the project :

```bash
  git clone https://github.com/Nithin-bd/block-certify
```

Go to the project directory :

```bash
  cd block-certify
```

Install dependencies :

```bash
  npm install
```
Update contract address :

Select `config.js` file and update  `address` with newly deployed contract address from Remix.

Start the server :

```bash
  npm start
```
The frontend application should be running on http://localhost:3000/ 

## Features

- Certificate generation
- Certificate validation
- IPFS storage

## Future work

Additionally the digital certificates can be converted into `NFT`'s (Non Fungable Tokens) and could be delivered to students' wallets to prove digital ownership of certificates.

## Acknowledgements

 - [@nitinkumavat](https://github.com/nitinskumavat) for the frontend skeleton structure of the application.
 
## Authors

- [@Nithin D'sa](https://github.com/Nithin-bd)
- [@Sandesh Shanbhag](https://github.com/sandesh2410)
- Mohammed Arfa
- Nisha
