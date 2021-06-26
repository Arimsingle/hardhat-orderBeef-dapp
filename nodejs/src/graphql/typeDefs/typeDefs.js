const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }


  type Beef {
    menu: String
    level: String
    price : Int
  }

  type Order {
    beef: Beef
    amount: Int
    moreDetail: String
    time: String
  }

  type Transfer {
    from: String
    to: String
    amount: Int
  }
  
  type Query {
    showBooks: [Book]
    showOrders: [Order]
    showStar(from: String): Int
    showBalance(from: String): Int
    hashMessage(from: String, menu: String, level: String, price: Int, amount: Int, moreDetail: String, time: String, nonce: Int): String
  }

  type Mutation {
    createAccount: String
    createTransfer(from: String, to:String, amount:Int): Boolean
    createOrder(from: String, menu: String, level: String, price: Int, amount: Int, moreDetail: String, time: String): Boolean
  }
`;

module.exports = { typeDefs };