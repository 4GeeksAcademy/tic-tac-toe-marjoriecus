import React from "react";
import TicTacToe from "./tictactoe";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<h1>Tic Tac Toe with React!</h1>
		
		
		<TicTacToe/>
		</div>
	);
};
export default Home;