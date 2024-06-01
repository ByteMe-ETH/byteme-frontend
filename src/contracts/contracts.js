import Web3 from 'web3';
import ContractABI from '@/contracts/contractABI.json';

// Replace with your contract ABI and address
const contractABI = ContractABI;
const contractAddress = '';

class ChessContract {
    constructor() {
        if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
            this.web3 = new Web3(window.ethereum || window.web3.currentProvider);
        } else {
            console.log('You need an Ethereum wallet like MetaMask to interact with this site.');
        }

        this.contract = new this.web3.eth.Contract(contractABI, contractAddress);
        console.log(this.contract);
        console.log('Contract initialized');
        console.log(this.contract.methods);
    }

    async createWager(amount, player1, player2) {
        return await this.contract.methods.createWager(amount, player1, player2)
    }

    async satisfyWager(gameId, winner) {
        return await this.contract.methods.satisfyWager(gameId, winner);
    }
}

export default ChessContract;