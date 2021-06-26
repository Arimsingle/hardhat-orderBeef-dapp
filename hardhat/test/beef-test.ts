import { ethers } from "hardhat";
import { Contract } from "ethers";
import { expect } from "chai";
import { deploySmartContract } from "./services/deploy";
import { getBalance } from "./services/getBalance";
import { getStar } from "./services/getStar";


const initialBalance = 10000000;
const initialStar = 0;

describe("Deployment", () => {

  it("Owner balance should be same with initialBalance", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();

    const [owner] = await ethers.getSigners();
    let ownerBalance: number = await getBalance(owner.address, orderBeef);
    expect(ownerBalance).to.equal(initialBalance);
  });

  it("Owner star should be same with initialStar", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();

    const [owner] = await ethers.getSigners();
    let ownerStar: number = await getStar(owner.address, orderBeef);
    expect(ownerStar).to.equal(initialStar);
  });

})

describe("Transaction", () => {

  it("Should transfer balance between accounts", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();

    const [owner, addr1] = await ethers.getSigners();
    let transferTx: Contract = await orderBeef.transfer(owner.address, addr1.address, 500);
    await transferTx.wait();

    let ownerBalance: number = await getBalance(owner.address, orderBeef);
    let addr1Balance: number = await getBalance(addr1.address, orderBeef);
    expect(ownerBalance).to.equal(initialBalance - 500);
    expect(addr1Balance).to.equal(0 + 500);

    let transferTx2: Contract = await orderBeef.connect(addr1).transfer(addr1.address, owner.address, 250);
    await transferTx2.wait();

    let ownerBalance2: number = await getBalance(owner.address, orderBeef);
    let addr1Balance2: number = await getBalance(addr1.address, orderBeef);
    expect(ownerBalance2).to.equal(initialBalance - 500 + 250);
    expect(addr1Balance2).to.equal(0 + 500 - 250);

  });

  it("Should deduct balance and get menu when order menu successful", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();
    const [owner] = await ethers.getSigners();
    const inputOrder: (string | number)[] = ['A5', 'Rare', 8000, 1, 'more cheese', '20:29 AM']
    const setOrderTx: Contract = await orderBeef.setOrder(
      owner.address,
      ...inputOrder
    );
    await setOrderTx.wait();

    let response: any = await orderBeef.getOrders(owner.address).then((result: any) => result);
    response = [...response[0].beef, response[0].amont, response[0].moreDetails, response[0].time];
    let ownerOrder: (string | number)[][] = response.map((data: (string | number)[], index: number) => {
      if (index === 2 || index === 3) {
        return +data;
      }
      return data;
    })

    ownerOrder.forEach((data: (string | number)[], index: number) => {
      expect(data).to.equal(inputOrder[index]);
    })

    let ownerBalance: number = await getBalance(owner.address, orderBeef);
    expect(ownerBalance).to.equal(initialBalance - +inputOrder[2]);


    let ownerStar: number = await getStar(owner.address, orderBeef);
    expect(ownerStar).to.equal(1);

  });

  it("Should transfer faild cuz balance not enough", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();
    const [owner, addr1] = await ethers.getSigners();
    await expect(orderBeef.connect(addr1).transfer(addr1.address, owner.address, 1)).to.be.revertedWith('your balance less than amount !');
  });

  it("Should orders faild cuz balance not enough", async () => {
    const { orderBeef } = await deploySmartContract();
    await orderBeef.deployed();
    const [_, addr1] = await ethers.getSigners();
    const inputOrder: (string | number)[] = ['A5', 'Rare', 8000, 1, 'more cheese', '20:29 AM']
    await expect(orderBeef.connect(addr1).setOrder(addr1.address, ...inputOrder)).to.be.revertedWith('your balance not enough !');
  });


})