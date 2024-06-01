import Web3 from 'web3';

// Replace with your contract ABI and address
const contractABI = "";
const contractAddress = '';

class ChessContract {
    constructor() {
        if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
            this.web3 = new Web3(window.ethereum || window.web3.currentProvider);
        } else {
            console.log('You need an Ethereum wallet like MetaMask to interact with this site.');
        }

        this.contract = new this.web3.eth.Contract(contractABI, contractAddress);
    }

    async getGameAccounts() {
        return await this.web3.eth.getAccounts() || [];
    }

    async sendTransaction(method, ...args) {
        const accounts = await this.getGameAccounts();
        return await method(...args).send({ from: accounts[0] });
    }

    async createGame(player1, player2) {
        return await this.sendTransaction(this.contract.methods.createGame, player1, player2);
    }

    async endGame(gameId, winner) {
        await this.sendTransaction(this.contract.methods.endGame, gameId, winner);
    }

    async getOpenGames() {
        return await this.contract.methods.getOpenGames().call();
    }

    async verifyMove(gameState, move) {
        return await this.contract.methods.verifyMove(gameState, move).call();
    }

    // Helper function to create a wager
    async createWager(gameId, amount) {
        const tx = await this.sendTransaction(this.contract.methods.createWager, gameId, { value: amount });
        return tx.events.WagerCreated.returnValues.wagerId;
    }

    // Helper function to accept a wager
    async acceptWager(wagerId) {
        await this.sendTransaction(this.contract.methods.acceptWager, wagerId);
    }
}

export default ChessContract;