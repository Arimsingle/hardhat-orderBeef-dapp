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
    moreDetails: String
    time: String
  }

  type Account {
    publicKey: String
    privateKey: String
  }

  type Transfer {
    from: String
    to: String
    amount: Int
  }

  type Balance {
    balance: Int
  }
  type Star {
    star: Int
  }


  
  type Query {
    showBooks: [Book]
    showOrders(from: String): [Order]
    showStar(from: String): Star
    showBalance(from: String): Balance
    hashMessage(from: String, menu: String, level: String, price: Int, amount: Int, moreDetail: String, time: String, nonce: Int): String
  }

  type Mutation {
    createAccount: Account
    createTransfer(from: String, to:String, amount:Int): Transfer
    createOrder(from: String, menu: String, level: String, price: Int, amount: Int, moreDetails: String, time: String): Order
  }
`;

module.exports = { typeDefs };