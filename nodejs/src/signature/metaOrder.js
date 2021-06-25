const ethers = require("ethers");
const utils = ethers.utils;

let mnemonic =
    "blur depend exhibit cliff film govern toward type embrace fine latin hotel"; //74 length

let wallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log("Wallet address:", wallet.address);
console.log("Private key:", wallet.privateKey);

let _from = wallet.address;
let _menu = "A5";
let _level = "Rare";
let _price = 8000;
let _amount = 1;
let _moreDetails = "more cheese";
let _time = "10:00 AM";
let _nonce = 0;

let msgHash = utils.solidityKeccak256(
    ["address", "string", "string", "uint256", "uint256", "string", "string", "uint256"],
    [_from, _menu, _level, _price, _amount, _moreDetails, _time, _nonce]
);
console.log("Message hash:", msgHash);
let hashToSign = utils.arrayify(msgHash);
let signature = wallet.signMessage(hashToSign);
console.log("Signature", signature);