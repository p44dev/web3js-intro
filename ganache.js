// Importing Web3
import Web3 from 'web3';

const defGAddress = '0x0AD09D4bEE31402Eeb78D8d090AE760092a802d1';
const gLocalAddress = 'http://127.0.0.1:7545';
const web3Client = new Web3(gLocalAddress);

web3Client.eth.getBalance(defGAddress, (err, wei) => {
    // Getting balance as etherium
    console.log('Balance:', web3Client.utils.fromWei(wei, 'ether'));
})
