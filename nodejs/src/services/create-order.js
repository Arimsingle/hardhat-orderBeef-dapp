const Signer = require("../shared/contract/signer");
const { accountController } = require("../shared/accounts");

const createOrder = async (
    from,
    menu,
    level,
    price,
    amount,
    moreDetails,
    time) => {
    const { accounts } = await accountController();
    console.log(accounts);
    if (accounts) {
        let account = accounts.find((account) => account.publicKey === from);
        if (account) {
            console.log(account.publicKey);
            let { signer } = await Signer(account.privateKey);
            let orderTx = await signer.setOrder(
                from,
                menu,
                level,
                price,
                amount,
                moreDetails,
                time
            );
            await orderTx.wait();
            console.log({
                beef: {
                    menu,
                    level,
                    price
                },
                from,
                amount,
                moreDetails,
                time
            });
            return {
                beef: {
                    menu,
                    level,
                    price
                },
                from,
                amount,
                moreDetails,
                time
            };
        }
        else {
            console.log("have no account");
        }
    }
    return false;
}
module.exports = { createOrder };