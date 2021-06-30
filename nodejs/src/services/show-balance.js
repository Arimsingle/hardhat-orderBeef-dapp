const { contract } = require("../shared/contract/contract");
const Balance = async (from) => {
    let balance = await contract.getBalance(from);
    return { balance: +balance };
}
module.exports = { Balance };