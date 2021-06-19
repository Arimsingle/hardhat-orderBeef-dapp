import { Contract } from "ethers";
interface Balance {
    _hex: number
}
export const getBalance = async (account: string, contract: Contract) => {
    return await contract.getBalance(account).then((result: Balance) => +result._hex);
}