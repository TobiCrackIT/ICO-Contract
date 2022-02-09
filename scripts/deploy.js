const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { BOLD_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {

    const boldNFTContract = BOLD_NFT_CONTRACT_ADDRESS;

    const boldTokenContract = await ethers.getContractFactory(
        "BoldToken"
    );

    const deployedBoldTokenContract = await boldTokenContract.deploy(boldNFTContract);

    console.log("BoldToken Contract Address:", deployedBoldTokenContract.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });