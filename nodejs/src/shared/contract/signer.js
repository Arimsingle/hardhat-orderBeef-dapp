const ethers = require('ethers');
const { contract } = require("./contract");
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BITKUB_TEST);

// const provider = new ethers.providers.JsonRpcProvider(`http://${process.env.RPC_HOST}:${process.env.RPC_PORT}/`);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const signer = contract.connect(wallet);
module.exports = Signer = async (privateKey) => {
    const wallet = new ethers.Wallet(privateKey, provider);
    const signer = contract.connect(wallet);
    return { signer }
}