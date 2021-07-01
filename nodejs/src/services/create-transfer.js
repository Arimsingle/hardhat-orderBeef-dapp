const Signer = require("../shared/contract/signer");
const { accountController } = require("../shared/accounts");

const createTransfer = async (from, to, amount) => {
    console.log(from, to, amount);
    const { accounts } = await accountController();
    if (accounts) {
        let account = accounts.find((account) => account.publicKey === from);
        if (account) {
            let { signer } = await Signer(account.privateKey);
            let transferTx = await signer.transfer(from, to, amount);
            await transferTx.wait();
            return { from, to, amount };
        }
    }
    else {
        console.log("have no account");
    }
    return { from, to, amount };
}
module.exports = { createTransfer };