import { Contract } from "ethers";
interface Star {
    _hex: number;
}
export const getStar = async (account: string, contract: Contract) => {
    return await contract.getStar(account).then((result: Star) => +result._hex);
}