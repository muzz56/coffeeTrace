const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

const rinkeby = {
  mnemonic: process.env.MNEMONIC,
  provider: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(rinkeby.mnemonic, rinkeby.provider)
      },
      network_id: 4
    }
  }
};