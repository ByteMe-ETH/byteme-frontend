'use client'
import React, {useEffect, useState} from 'react';
import {Chess} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import ChessContract from '../contracts/contracts';

const ChessBoard = () => {
        const [game, setGame] = useState(new Chess());
        const [chessContract, setChessContract] = useState(null);
        const [gameId, setGameId] = useState(null);

        const player1 = '0x1234567890123456789012345678901234567890';
        const player2 = '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd';

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

            initChessContract().then(r => console.log('Chess contract initialized'));
        }, []);

        return (
            //Set the width and height of the board to 400px and center it on the page and middle of the page
            <div style={{width: "500px", height: "500px", margin: "auto", marginTop: "250px"}}>
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
        );
    }
;

export default ChessBoard;