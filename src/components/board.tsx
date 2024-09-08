import { useState } from "react";
import Square from "./square";

function Board() {
    const [xTurn, setXTurn] = useState<boolean>(true);
    const [winner, setWinner] = useState<string | null>(null)
    const [squares, setSquares] = useState<string[]>(Array(9).fill('-'));

    const handleClick = (i: number) => {
        if (squares[i] !== '-' || winner) {
            return;
        }
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const nextSquares = squares.slice();
        const checkVal = xTurn ? 'X' : 'O';
        nextSquares[i] = checkVal;
        setSquares(nextSquares);
        if (lines.some(line => line.every(i => nextSquares[i] === checkVal))) {
            setWinner(checkVal);
            console.log(`WINNER: ${checkVal}!`)
            return;
        }
        setXTurn(!xTurn);
    };

    return (
        <>
            <div className='row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className='row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className='row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            <div>{winner !== null ? `WINNER: ${xTurn ? 'X' : 'O'}` : ''}</div>
        </>
    )
}

export default Board;