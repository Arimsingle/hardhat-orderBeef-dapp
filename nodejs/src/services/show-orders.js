const { contract } = require("../shared/contract/contract");
const Orders = async (from) => {
    let ordersResponse = await contract.getOrders(from);
    let orders = ordersResponse.map((orders) => {
        let beef = { menu: orders[0].menu, level: orders[0].level, price: +orders[0].price._hex }
        let order = {
            beef,
            amount: +orders[1]._hex,
            moreDetails: orders[2],
            time: orders[3],
        }
        return order;
    })
    return { orders }
}
module.exports = { Orders };
