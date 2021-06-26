const createRandom = require("../../services/create-account");
const createTransfer = require("../../services/create-transfer");
const Balance = require("../../services/show-balance");
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        showBooks: () => {
            return books
        },
        showBalance: async (_, { from }) => {
            console.log(from);
            const { balance } = await Balance(from);
            console.log(balance);
            return balance
        }


    },
    Mutation: {
        createAccount: async () => {
            try {
                const { wallet } = createRandom();
                console.log(wallet);
                return wallet
            } catch (error) {
                console.log(error);
            }
        },
        createTransfer: async (_, { from, to, amount }) => {
            try {
                const res = await createTransfer(from, to, amount);
                console.log(res);
                return res;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
module.exports = { resolvers };