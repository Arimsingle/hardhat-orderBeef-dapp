import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const OrderBeef = await ethers.getContractFactory("OrderBeef");
  const orderBeef = await OrderBeef.deploy();

  await orderBeef.deployed();

  console.log("OrderBeef deployed to => ", orderBeef.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });