const Signer = require("../shared/contract/signer");
const { accountController } = require("../shared/accounts");

module.exports = createTransfer = async (from, to, amount) => {
    console.log(from, to, amount);
    const { accounts } = await accountController();
    console.log(accounts);
    if (accounts) {
        let account = accounts.find((account) => account.publicKey === from);
        if (account) {
            console.log(account.publicKey);
            let { signer } = await Signer(account.privateKey);
            let transferTx = await signer.transfer(from, to, amount);
            await transferTx.wait();
            return true;
        }
        else {
            console.log("have no account");
        }
    }
    return false;
}