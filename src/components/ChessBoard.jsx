import React, {useState} from 'react';
import {Chess} from 'chess.js';
import {Chessboard} from 'react-chessboard';
import {Button} from "@/components/ui/button";

const ChessBoard = () => {
        const chess = new Chess()
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
                    onPieceDrop={function noRefCheck() {
                    }}
                    onPromotionCheck={function noRefCheck() {
                    }}
                    onPromotionPieceSelect={function noRefCheck() {
                    }}
                    onSquareClick={function noRefCheck() {
                    }}
                    onSquareRightClick={function noRefCheck() {
                    }}
                    position={chess.fen()}
                    customBoardStyle={{
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                />
                <Button
                    onClick={() => {
                        chess.reset();
                    }}>reset
                </Button>
                <Button
                    onClick={() => {
                        chess.undo();
                    }}>undo
                </Button>
            </div>
        );
    }
;

export default ChessBoard;