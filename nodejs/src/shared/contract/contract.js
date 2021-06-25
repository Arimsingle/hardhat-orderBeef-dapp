const ethers = require('ethers');
const { beefABI } = require("../abi/abi");
const provider = new ethers.providers.JsonRpcProvider(`http://${RPC_HOST}:${RPC_PORT}/`);
const contract = new ethers.Contract(process.env.CONTRACT_ADDR, beefABI, provider);
module.exports = { contract }