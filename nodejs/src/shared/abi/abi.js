const beefABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "_menu",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "_order",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }
    ],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }
    ],
    "name": "getOrder",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "menu",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "level",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              }
            ],
            "internalType": "struct OrderBeef.Beef",
            "name": "beef",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amont",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "moreDetails",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "time",
            "type": "string"
          }
        ],
        "internalType": "struct OrderBeef.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }
    ],
    "name": "getStar",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_menu",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_level",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_moreDetails",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_time",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      }
    ],
    "name": "hashMessage",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "_messageHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_signature",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_menu",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_level",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_moreDetails",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_time",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      }
    ],
    "name": "metaOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_hash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "_signature",
        "type": "bytes"
      }
    ],
    "name": "recoverSigner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_menu",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_level",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_moreDetails",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_time",
        "type": "string"
      }
    ],
    "name": "setOrder",
    "outputs": [
      {
        "internalType": "bool",
        "name": "_sucess",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "_sucess",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

module.exports = { beefABI };