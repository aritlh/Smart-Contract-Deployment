# Swisstronik TESNET 2.0

I know you get this error when you first start a project: `Help Please hardhat.config.js * Invalid account: #0 for network: Rinkeby - private key too short, expected 32 bytes`

Don't worry, make sure you are copying your PRIVATE KEY and not your PUBLIC KEY.
If you are using metamask, you can get your PRIVATE KEY from:
- the 3 dots menu beside your public key
- and then account details
- then export private key

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
