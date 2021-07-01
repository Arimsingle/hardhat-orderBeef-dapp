const { metaOrderSignature } = require("../signature/metaOrder");

const createMetaOrder = async (from, menu, level, price, amount, moreDetails, time, nonce) => {
    let { signature, msgHash } = await metaOrderSignature(from, menu, level, price, amount, moreDetails, time, nonce);
    let { signer } = await Signer(process.env.PRIVATE_KEY);


    try {
        let metaOrderTx = await signer.metaOrder(
            signature,
            from,
            menu,
            level,
            price,
            amount,
            moreDetails,
            time,
            nonce
        );
        await metaOrderTx.wait();


        return {
            signature,
            hashMessage: msgHash,
            nonce,
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




    } catch (error) {
        console.log(error);
    }




}
module.exports = { createMetaOrder };
