require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purchase install clog orange side'; 
let testAccounts = [
"0xb0233dfb4561adadc850aab719361b3baa89cf10f2f8fef467761ee4251a618c",
"0x812a67864cffa4856b9d56fdca67bdf645b777d4faf09f6b14f1301fce5ff1d3",
"0x5f889161abef2e3254431e1db9d6397da9d886008f204e0d872c9e3f3605bd0f",
"0x7faf9454fa8eb4366ebd08098d8864b595657d92f799a38746d75da5e5fee521",
"0x3ec40eef70ab02dd3e557164589fc4d1c381b48f75461b0b30c1209da181b90e",
"0xa2ba4c61b3a7211c3048e3ced865d6e362e36e9611d5e3d877480e0c791fbd68",
"0xf7278405d1d9488b3b7107c2d678a4606f3a07d566e0b47da7939e3fbafadc71",
"0x7ed02bec4cab49ed3dad0f9376b9e8df9022fec10f9198325ce33053b3f3ff4f",
"0xfb83d627fb840ca8414c31ce189a3082321a4b35af0d65b435268da6d5bc699a",
"0x06f64acaacecc4fe1158bb5199e2a7161cac09b11191dbd8d4e5451a4a61fe05"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


