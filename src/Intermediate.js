import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import Circle from './Circle';

class Intermediate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}

	randomNumber (min, max) {
		return Math.floor (Math.random()*(max - min)) + min;
	}

	rgb2hex(r,g,b){
		return "#" +
				("0" + parseInt(r,10).toString(16)).slice(-2) +
				("0" + parseInt(g,10).toString(16)).slice(-2) +
				("0" + parseInt(b,10).toString(16)).slice(-2);
	}
	
	createTable () {
		let table = [];

		for (let i = 1; i < 101; i++) {
			let randShape = this.randomNumber(0, 2);
			let randCode = this.randomNumber(65, 90);
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

	render() {
		/*const baseColor = this.rgb2hex (170, 170, 170);*/
		const baseColor = this.rgb2hex (221, 221, 221);
		let table = this.createTable ();
		return (
			<div className="base">
				<div className="header">
					<p>Prueba</p>
				</div>
				<div className="mosaic">
					{table}
					<p style={{color: baseColor, fontSize:2}}>End</p>
				</div>
				<div className="footer">
					<button
						className="randbutton"
						onClick={<Intermediate/>}
					>
						Randomize!
					</button>
				</div>
			</div>
		);
	}
}

export default Intermediate;
