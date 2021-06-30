const { contract } = require("../shared/contract/contract");
const Star = async (from) => {
    let star = await contract.getStar(from);
    return { star: +star };
}
module.exports = { Star };