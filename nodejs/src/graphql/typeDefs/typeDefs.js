const { gql } = require('apollo-server');

const typeDefs = gql`


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
  type MetaOrder {
    signature: String
    hashMessage: String
    nonce: Int
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
  type RecoverSigner{
    from: String
  }


  
  type Query {
    showOrders(from: String!): [Order]
    showStar(from: String!): Star
    showBalance(from: String!): Balance
    showRecoverSigner(hashMessage: String!, signature: String!): RecoverSigner
  }

  type Mutation {
    createAccount: Account
    createTransfer(from: String!, to:String!, amount:Int!): Transfer
    createOrder(from: String!, menu: String!, level: String!, price: Int!, amount: Int!, moreDetails: String!, time: String!): Order
    createMetaOrder(from: String!, menu: String!, level: String!, price: Int!, amount: Int!, moreDetails: String!, time: String!, nonce: Int!): MetaOrder
  }
`;

module.exports = { typeDefs };