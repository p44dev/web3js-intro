// Importing Web3
import Web3 from 'web3';

// Custom Etherium Network Address
const address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8';
// Infura project URL
const url = "https://mainnet.infura.io/v3/857a57fc313d4717a4bfb3737f9b3a73";
// Web3 
const web3 = new Web3(url);

// Getting balance as Etherium
web3.eth.getBalance(address, (err, bal) => {
    console.log(web3.utils.fromWei(bal,'ether'));
});

// web3.eth.accounts.create(); //Creating brand new account 
