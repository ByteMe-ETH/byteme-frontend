'use client'
import React, {useEffect, useState} from 'react';
import {Chess} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import ChessContract from '../contracts/contracts';

const ChessBoard = () => {
        const [game, setGame] = useState(new Chess());
        const [chessContract, setChessContract] = useState(null);
        const [gameId, setGameId] = useState(null);

        const player1 = '0xE6354C4F480924bC0f99459B5e927E5418f3BeC7';
        const player2 = '0xec3560c202Bd0eD41CCE2065221f250717B384f2';
        const bet = 0.0056;

        function checkEndGame() {
            if (game.isGameOver()) {
                chessContract.satisfyWager(gameId, game.turn() === 'w' ? player1 : player2).then(r =>
                    alert('Game over! ' + (game.turn() === 'w' ? 'Black' : 'White') + ' wins!')
                );
            }
        }

        useEffect(() => {
            const initChessContract = async () => {
                const contract = new ChessContract();
                setChessContract(contract);

                const createdGameId = await contract.createWager(1, player1, player2);
                setGameId(createdGameId);
            };

            initChessContract();
        }, []);
        
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;

        const boardStyle = {
            width: windowWidth >= 1024 ? '500px' : '375px',
            height: windowWidth >= 1024 ? '500px' : '375px',
            margin: 'auto'
        };

        return (
            <div className="container">
                <h1 className="text-2xl font-bold mb-4">Wager: {bet} ETH</h1>
                <div style={boardStyle}>
                    <Chessboard
                        id="Configurable Board"
                        onArrowsChange={function noRefCheck() {
                        }}
                        onDragOverSquare={function noRefCheck() {
                        }}
                        onMouseOutSquare={function noRefCheck() {
                        }}
                        onMouseOverSquare={function noRefCheck() {
                        }}
                        onPieceClick={function noRefCheck() {
                        }}
                        onPieceDragBegin={function noRefCheck() {
                        }}
                        onPieceDragEnd={function noRefCheck() {
                        }}
                        onPieceDrop={checkEndGame()
                        }
                        onPromotionCheck={function noRefCheck() {
                        }}
                        onPromotionPieceSelect={function noRefCheck() {
                        }}
                        onSquareClick={function noRefCheck() {
                        }}
                        onSquareRightClick={function noRefCheck() {
                        }}
                        position={game.fen()}
                        customBoardStyle={{
                            borderRadius: "4px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                        }}
                    />
                </div>
            </div>
        );
    }
;

export default ChessBoard;