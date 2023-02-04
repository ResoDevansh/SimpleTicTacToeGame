import React, { StrictMode, useState } from "react";

const Square = ({ val, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {val}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextCross, setNextCross] = useState(false);
  const handleClick = (i) => {
    if (squares[i]||calculateWinner(squares)) return;
    const newSquares = squares.slice();
    if (nextCross === false) {
      newSquares[i] = "X";
      setNextCross(true);
    } else {
      newSquares[i] = "O";
      setNextCross(false);
    }
    setSquares(newSquares);
  };
  let status, winner;
  winner = calculateWinner(squares);
  if (winner) {
    status = "Winner is " + winner;
  } else {
    if (nextCross === true) {
      status = "Next turn O";
    } else status = "Next turn X";
  }
  return (
    <StrictMode>
      <div className="board-row">{status}</div>
      <div className="board-row">
        <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </StrictMode>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
};
export default Board;
