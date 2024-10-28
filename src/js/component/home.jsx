import React from "react";
import TicTacToe from "./tictactoe";
import App from "./app";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<TicTacToe/>
		</div>
	);
};
export default Home;