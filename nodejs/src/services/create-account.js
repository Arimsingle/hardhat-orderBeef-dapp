const ethers = require("ethers");
module.exports = createWallet = () => {
    let wallet = ethers.Wallet.createRandom();
    return { wallet: wallet.address };
}
