const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCampaign = require('./build/Campaign.json');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider('boy achieve weird coconut blood daring gloom regret pride smooth ketchup piece',
    'https://rinkeby.infura.io/yuRUeGqsA9MERaK7xsfw'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    console.log(compiledCampaign.interface);
    console.log('Contract deployed to ',  result.options.address);
};
deploy();