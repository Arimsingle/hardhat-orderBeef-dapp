const ethers = require('ethers');
// const Signer = require("../shared/contract/signer");
let accounts = [
    { publicKey: "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73", privateKey: "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63" }
];
// let accounts = [
//     { publicKey: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" },
//     { publicKey: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8", privateKey: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" },
//     { publicKey: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc", privateKey: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" }
// ];
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BITKUB_TEST);
console.log(process.env.RPC_BITKUB_TEST);
// const provider = new ethers.providers.JsonRpcProvider(`http://${process.env.RPC_HOST}:${process.env.RPC_PORT}/`);
const accountController = async (publicKey, privateKey) => {
    if (publicKey && privateKey) {
        const walletProvider = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        let tx = {
            from: process.env.ACCOUNT,
            to: publicKey,
            value: ethers.utils.parseEther("1.0")
        }
        await walletProvider.signTransaction(tx)
        const signer = walletProvider.connect(provider);
        await signer.sendTransaction(tx)
        accounts = [...accounts, { publicKey, privateKey }]
    }
    return { accounts };
}


module.exports = { accountController };