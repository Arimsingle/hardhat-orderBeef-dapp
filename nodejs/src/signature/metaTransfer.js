const ethers = require("ethers");
const utils = ethers.utils;

let mnemonic =
    "blur depend exhibit cliff film govern toward type embrace fine latin hotel"; //74 length

let wallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log("Wallet address:", wallet.address);
console.log("Private key:", wallet.privateKey);

let _from = wallet.address;
let _to = "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"; 
let _amount = 100;
let _nonce = 0;

let msgHash = utils.solidityKeccak256(
    ["address", "address", "uint256", "uint256"], //type
    [_from, _to, _amount, _nonce]
);
console.log("Message hash:", msgHash);
let hashToSign = utils.arrayify(msgHash);
let signature = wallet.signMessage(hashToSign);
console.log("Signature", signature);