# Swisstronik TESNET 2.0

I know you get this error when you first start a project: `Help Please hardhat.config.js * Invalid account: #0 for network: Rinkeby - private key too short, expected 32 bytes`

Don't worry, make sure you are copying your PRIVATE KEY and not your PUBLIC KEY.
If you are using metamask, you can get your PRIVATE KEY from:
- the 3 dots menu beside your public key
- and then account details
- then export private key

Once you have your private key, create an `.env` file. Copy and Paste the code inside `.env.example`, then Change `your_private_key` with your private key.

Then run the following command:

```sh
npm install # Install all project dependencies
npx hardhat compile # Compile smart contract
npx hardhat run scripts/deploy.js --network swisstronik # Deploy the smart contract
```
