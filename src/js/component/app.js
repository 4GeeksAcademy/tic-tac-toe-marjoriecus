const App = () => {
    const [tileValue, setTileValue] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currentPlayer, setCurrentPlayer] = useState("X");
  
    const currentMove = (index) => {
      if (tileValue[index] === "") {
        let newValues = [...tileValue];
        newValues[index] = currentPlayer;
        setTileValue(newValues);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    };
  
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <div className="board">
          {tileValue.map((value, index) => (
            <button key={index} onClick={() => currentMove(index)}>
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default App;