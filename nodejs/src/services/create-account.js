const ethers = require("ethers");
let { accountController } = require("../shared/accounts");
const createWallet = async () => {
    let wallet = ethers.Wallet.createRandom();
    await accountController(wallet.address, wallet.privateKey);
    return { publicKey: wallet.address, privateKey: wallet.privateKey };
}
module.exports = { createWallet };
