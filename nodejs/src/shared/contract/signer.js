const ethers = require('ethers');
const { contract } = require("./contract");
const provider = new ethers.providers.JsonRpcProvider(`http://${RPC_HOST}:${RPC_PORT}/`);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signer = contract.connect(wallet);
module.exports = { signer };