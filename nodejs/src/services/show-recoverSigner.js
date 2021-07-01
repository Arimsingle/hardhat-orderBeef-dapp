const { contract } = require("../shared/contract/contract");
const RecoverSigner = async (hashMessage, signature) => {
    let from = await contract.recoverSigner(hashMessage, signature);
    return { from };
}
module.exports = { RecoverSigner };