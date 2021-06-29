const ethers = require('ethers');
// const Signer = require("../shared/contract/signer");
let accounts = [
    { publicKey: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" },
    { publicKey: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8", privateKey: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d" },
    { publicKey: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc", privateKey: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a" }
];
const provider = new ethers.providers.JsonRpcProvider(`http://${process.env.RPC_HOST}:${process.env.RPC_PORT}/`);
const accountController = async (publicKey, privateKey) => {
    if (publicKey && privateKey) {
        const walletProvider = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        tx = {
            from: process.env.ACCOUNT,
            to: publicKey,
            value: ethers.utils.parseEther("1.0")
        }
        await walletProvider.signTransaction(tx)
        const signer = walletProvider.connect(provider);
        await signer.sendTransaction(tx).then(res => console.log(res))
        accounts = [...accounts, { publicKey, privateKey }]
    }
    return { accounts };
}


module.exports = { accountController };