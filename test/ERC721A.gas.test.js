const { deployContract } = require("./helpers.js");
const { expect } = require("chai");
const { constants } = require("@openzeppelin/test-helpers");
const { ZERO_ADDRESS } = constants;
const { parseEther, formatEther } = ethers.utils;

const RECEIVER_MAGIC_VALUE = "0x150b7a02";
const GAS_MAGIC_VALUE = 20000;


let getCurrentTimestamp = async () => {
    // getting timestamp
    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    return blockBefore.timestamp;
}

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i)
}

const createTestSuite = ({ contract, constructorArgs }) =>
    function () {
        context(`${contract}`, function () {
            beforeEach(async function () {
                this.erc721a = await deployContract(contract, constructorArgs);
                this.receiver = await deployContract("ERC721ReceiverMock", [RECEIVER_MAGIC_VALUE]);
                this.startTokenId = this.erc721a.startTokenId ? (await this.erc721a.startTokenId()).toNumber() : 0;
                const [owner, addr1, addr2] = await ethers.getSigners();
                this.owner = owner;
                this.addr1 = addr1;
                this.addr2 = addr2;
            });

            context("reserve", async function () {
                it("in valid range and batch size", async function () {
                    expect(await this.erc721a.balanceOf(this.owner.address)).to.equal("0");
                    expect(await this.erc721a.totalMinted()).to.equal("0");
                    for(var i in range(1,20)) {
                        await this.erc721a.reserve(100);
                    }
                    expect(await this.erc721a.balanceOf(this.owner.address)).to.equal("2000");
                    await expect(this.erc721a.reserve(1)).to.be.revertedWith("too many already minted before dev mint");
                });
            });

        });
    };

describe("ERC721A", createTestSuite({ contract: "NFTG0RARE", constructorArgs: ["NAME", "SYMBOL", 5, 2000, 2000] }));

