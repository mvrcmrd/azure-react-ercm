import React from 'react';
import './App.css';
import Square from './Square';
import Circle from './Circle';

function randomNumber (min, max) {
	return Math.floor (Math.random()*(max - min)) + min;
}

function rgb2hex(r,g,b){
	return "#" +
			("0" + parseInt(r,10).toString(16)).slice(-2) +
			("0" + parseInt(g,10).toString(16)).slice(-2) +
			("0" + parseInt(b,10).toString(16)).slice(-2);
}
	
function handleClick() {
	Intermediate ();
}
	
function createTable () {
	let table = [];

	for (let i = 1; i < 145; i++) {
		let randShape = randomNumber(0, 2);
		let randCode = randomNumber(65, 90);
		let randLetter = String.fromCharCode (randCode);
		if (randShape === 0) {
			table.push(<Square
				key={i.toString()}
				value={randLetter} />);
		} else {
			table.push(<Circle
				key={i.toString()}
				value={randLetter} />);
		}
	}
	return table;
}

function Intermediate () {
	/*const baseColor = this.rgb2hex (170, 170, 170);*/
	const baseColor = rgb2hex (221, 221, 221);
	let table = createTable ();
	return (
		<div className="base">
			<div className="header">
				<button
					className="circle1"
					style={{backgroundColor: 'red', color: 'red'}}
				>R</button>
				<button
					className="circle1"
					style={{backgroundColor: 'green', color: 'green'}}
				>G</button>
				<button
					className="circle1"
					style={{backgroundColor: 'yellow', color: 'yellow'}}
				>Y</button>
			</div>
			<div className="mosaic">
				{table}
				<p style={{color: baseColor, fontSize:2}}>End</p>
			</div>
			<div className="footer">
				<button
					className="randbutton"
					onClick={handleClick()}
				>
					Randomize!
				</button>
			</div>
		</div>
	);
}

export default Intermediate;
