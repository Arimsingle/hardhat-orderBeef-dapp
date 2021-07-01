const { createWallet } = require("../../services/create-account");
const { createOrder } = require("../../services/create-order");
const { createTransfer } = require("../../services/create-transfer");
const { Balance } = require("../../services/show-balance");
const { Star } = require("../../services/show-star");
const { Orders } = require("../../services/show-orders");
const { createMetaOrder } = require("../../services/create-MetaOrder");
const { RecoverSigner } = require("../../services/show-recoverSigner");

const resolvers = {

    Query: {
        showBalance: async (_, req) => {
            const { balance } = await Balance(req.from);
            return { balance };
        },
        showStar: async (_, req) => {
            const { star } = await Star(req.from);
            return { star };
        },
        showOrders: async (_, req) => {
            const { orders } = await Orders(req.from);
            return orders;
        },
        showRecoverSigner: async (_, req) => {
            const { from } = await RecoverSigner(req.hashMessage, req.signature);
            return { from };
        }


    },
    Mutation: {
        createAccount: async () => {
            try {
                const { publicKey, privateKey } = await createWallet();
                return { publicKey, privateKey }
            } catch (error) {
                console.log(error);
            }
        },
        createTransfer: async (_, req) => {
            try {
                const { from, to, amount } = await createTransfer(req.from, req.to, req.amount);
                console.log(from, to, amount);
                return { from, to, amount };
            } catch (error) {
                console.log(error);
            }
        },
        createOrder: async (_, req) => {
            try {
                const {
                    beef: {
                        menu,
                        level,
                        price
                    },
                    from,
                    amount,
                    moreDetails,
                    time

                } = await createOrder(
                    req.from,
                    req.menu,
                    req.level,
                    req.price,
                    req.amount,
                    req.moreDetails,
                    req.time
                );
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

            } catch (error) {
                console.log(error);

            }
        },
        createMetaOrder: async (_, req) => {
            try {
                const {
                    signature,
                    hashMessage,
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

                } = await createMetaOrder(
                    req.from,
                    req.menu,
                    req.level,
                    req.price,
                    req.amount,
                    req.moreDetails,
                    req.time,
                    req.nonce
                );
                return {
                    signature,
                    hashMessage,
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
    }
};
module.exports = { resolvers };