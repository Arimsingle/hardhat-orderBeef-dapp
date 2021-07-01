import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import "@nomiclabs/hardhat-waffle";
dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (_, hre: any) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

export default {
  solidity: {
    version: "0.7.3",
  },
  networks: {
    localhost: {
      url: `http://${process.env.RPC_HOST}:${process.env.RPC_PORT}`
    },
    hardhat: {
    },
    bitkub: {
      url: "https://rpc-testnet.bitkubchain.io",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};