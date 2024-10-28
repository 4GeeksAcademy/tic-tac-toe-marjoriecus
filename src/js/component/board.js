import React from 'react';
import Tile from './tile';

const Board = ({ tiles, onClick }) => {
  const renderTile = (i) => (
    <Tile value={tiles[i]} onClick={() => onClick(i)} />
  );

  return (
    <div className="justify-content">
      <div className="board-row" >
        {renderTile(0)}
        {renderTile(1)}
        {renderTile(2)}
      </div>
      <div className="board-row">
        {renderTile(3)}
        {renderTile(4)}
        {renderTile(5)}
      </div>
      <div className="board-row">
        {renderTile(6)}
        {renderTile(7)}
        {renderTile(8)}
      </div>
    </div>
  );
};

export default Board;