import Web3 from 'web3';
import ContractABI from '@/contracts/contractABI.json';

// Replace with your contract ABI and address
const contractABI = ContractABI;
let contractAddress = "0x4C1715bB3C0Ad36955EBaDa9A11312A03d1e0A61";

class ChessContract {
    constructor() {
        if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
            this.web3 = new Web3(window.ethereum || window.web3.currentProvider);
        } else {
            console.log('You need an Ethereum wallet like MetaMask to interact with this site.');
        }

        console.log(contractAddress);
        this.contract = new this.web3.eth.Contract(contractABI, contractAddress);
        console.log(this.contract);
        console.log('Contract initialized');
        console.log(this.contract.methods);
    }

    async createWager(amount, player1, player2) {
        return await this.contract.methods.makeBet(amount, player1, player2).call(
            {from: contractAddress}
        ).then(r => console.log("Creating wager:", r));
    }

    async satisfyWager(gameId, winner) {
        return await this.contract.methods.payback(gameId, winner).send(
            {from: contractAddress}
        ).then(r => console.log(r));
    }
}

export default ChessContract;