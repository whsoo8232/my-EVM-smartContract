require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

//  provider = hre.ethers.getDefaultProvider();
  provider = hre.ethers.provider;

  let balance;
  let nonce;
  for (const account of accounts) {
    balance = hre.ethers.utils.formatEther(await provider.getBalance(account.address));
    nonce   = await provider.getTransactionCount(account.address);
    console.log("account=[%s], balance=[%d], nonce=[%d]", account.address, balance, nonce);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'baseSepolia',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.CONTRACT_OWNER_ADDR],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.CONTRACT_OWNER_ADDR],
    },
    amoy: {
      url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.CONTRACT_OWNER_ADDR],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.CONTRACT_OWNER_ADDR],
    },
    baseSepolia: {
      url: `https://misty-necessary-dust.base-sepolia.quiknode.pro/${process.env.QUICKNODE_BASE_SEPOLIA_ENDPOINT_KEY}`,
      accounts: [process.env.CONTRACT_OWNER_ADDR],
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
  solidity: "0.8.18",
};
