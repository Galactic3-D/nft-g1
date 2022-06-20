/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import * as fs from 'fs';

import * as _ from 'lodash';
import {types, task} from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "@tenderly/hardhat-tenderly";
import "hardhat-tracer";
import "hardhat-dependency-compiler";
import "hardhat-deploy";
const { getAccount } = require("./scripts/helpers");


if (process.env.REPORT_GAS) {
    require('hardhat-gas-reporter');
}

if (process.env.REPORT_COVERAGE) {
    require('solidity-coverage');
}

const dotenv = require("dotenv")
dotenv.config()

let {
    ETHERSCAN_TOKEN,
    PRIVATE_KEY,
    ALCHEMY_KEY
} = process.env;



task("accounts", "Prints the list of accounts", async (args, {ethers}) => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});


task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
	const account = getAccount();
	console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
    solidity: {
        version: "0.8.14",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1337
            }
        }
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        ethereum: {
            chainId: 1,
            url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
            accounts: [`0x${PRIVATE_KEY}`]
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_TOKEN
    },
    dependencyCompiler: {},
    namedAccounts: {
        deployer: 0,
        admin1: 1,    // '0x51d9255fBb24238d8E8a841Dcb47ea67c95C98ca',
    },
    abiExporter: {
        path: './artifacts/abi',
        clear: true,
        flat: true,
        only: [':EXVBattlePass'],
        spacing: 2
    },
    gasReporter: {
        currency: 'USD',
        gasPrice: 40,
        coinmarketcap: '46d51164-a690-4982-9c92-996297cc484b',
        showTimeSpent: true,
    },
    plugins: ['solidity-coverage'],
    typechain: {
        outDir: './src/types',
        target: 'ethers-v5',
        alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
        externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    },
};


