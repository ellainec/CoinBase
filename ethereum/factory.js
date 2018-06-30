import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD44233be31e9B5774a9e4ef2fd8e17576e42543A'
    );

export default instance;