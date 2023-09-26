import { useState } from "react";
import Square from "../square/Square";
import "./Grid.css";

function Grid() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    if (squares[index]) return;

    if (calculateWinner()) {
      alert(`The winner is ${calculateWinner()}`);
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    togglePlayer();
  }

  function togglePlayer() {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function calculateWinner() {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <div className="grid">
      {squares.map((square, index) => (
        <Square
          key={index}
          onSquareClick={() => handleClick(index)}
          value={square}
        />
      ))}
    </div>
  );
}

export default Grid;
