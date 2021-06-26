const { contract } = require("../shared/contract/contract");
module.exports = Balance = async (from) => {
    let balance = await contract.getBalance(from);
    return { balance: +balance }
}