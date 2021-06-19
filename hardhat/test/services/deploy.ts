import { ContractFactory, Contract } from "ethers";
import { ethers } from "hardhat";
export const deploySmartContract = async () => {
    const OrderBeef: ContractFactory = await ethers.getContractFactory("OrderBeef");
    const orderBeef: Contract = await OrderBeef.deploy();
    return { orderBeef };
}