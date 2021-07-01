const ethers = require("ethers");
const utils = ethers.utils;
const { accountController } = require("../shared/accounts");
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BITKUB_TEST);
// const provider = new ethers.providers.JsonRpcProvider(`http://${process.env.RPC_HOST}:${process.env.RPC_PORT}/`);
const metaOrderSignature = async (from, menu, level, price, amount, moreDetails, time, nonce) => {
    const { accounts } = await accountController();
    if (accounts) {
        let account = accounts.find((account) => account.publicKey === from);
        if (account) {
            const wallet = new ethers.Wallet(account.privateKey, provider);

            let _from = from;
            let _menu = menu;
            let _level = level;
            let _price = price;
            let _amount = amount;
            let _moreDetails = moreDetails;
            let _time = time;
            let _nonce = nonce;

            let msgHash = await utils.solidityKeccak256(
                ["address", "string", "string", "uint256", "uint256", "string", "string", "uint256"],
                [_from, _menu, _level, _price, _amount, _moreDetails, _time, _nonce]
            );
            let hashToSign = await utils.arrayify(msgHash);
            let signature = await wallet.signMessage(hashToSign);
            return { signature, msgHash }
        }
        else {
            console.log("have no account");
        }
    }
    else {
        console.log("have no accounts");
    }
}
module.exports = { metaOrderSignature };