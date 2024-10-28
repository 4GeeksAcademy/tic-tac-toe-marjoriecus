import React, { useState } from "react";
import Board from "./board";
import CheckWinnerCombinations from "./winnercombinations";


const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [weaponX, setWeaponX] = useState(true);
  const winner = CheckWinnerCombinations(tiles);

  const handleClick = (i) => {
    if (tiles[i] || winner) return;
    const newTiles = tiles.slice();
    newTiles[i] = xIsNext ? (weaponX ? "X" : "O") : weaponX ? "O" : "X";
    setTiles(newTiles);
    setXIsNext(!xIsNext);
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner === "X" ? player1 : player2}`;
    } else {
      return `Next player: ${xIsNext ? player1 : player2}`;
    }
  };

  const selectWeapon = (isX) => {
    setWeaponX(isX);
    setGameStarted(true);
  };

  return (
    <div className="game">
      {!gameStarted ? (
        <form className="mb-4 bg-black flex" >
          <input
            type="text"
            placeholder="Player 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
            className="border p-2 mr-2 bg-white"
          />
          <input
            type="text"
            placeholder="Player 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
            className="border p-2 mr-2 bg-white"
          />
          <div className="mb-2">
            <button
              type="button"
              onClick={() => selectWeapon(true)}
              className={`p-2 ${
                weaponX ? "bg-blue-500 text-warning" : "bg-gray-200 "
              }`}
            >
              X
            </button>
            <button
              type="button"
              onClick={() => selectWeapon(false)}
              className={`p-2 ${!weaponX ? "bg-blue-500" : "bg-gray-200"}`}
            >
              O
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="game-status">{renderStatus()}</div>
          <Board tiles={tiles} onClick={handleClick} />
        </>
      )}
    </div>
  );
};


export default TicTacToe;

