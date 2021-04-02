import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Square from './Square';
import {randomNumber, rgb2hex} from './Functions';

class Intermediate extends Component {
	constructor(props) {
		super(props);
		this.forceRandom = this.forceRandom.bind (this);
		this.state = {
			value: null,
			newRendering: false
		};
	}

	createTable () {
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

	forceRandom() {
		const newRendering = this.state.newRendering;
		if (newRendering) {
			this.setState ({newRendering: false});
		} else {
			this.setState ({newRendering: true});
		}
	}
	
	render() {
		/*const baseColor = this.rgb2hex (170, 170, 170);*/
		const baseColor = rgb2hex (221, 221, 221);
		let table = this.createTable ();
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
						onClick={this.forceRandom}
					>
						Randomize!
					</button>
				</div>
			</div>
		);
	}
}

export default Intermediate;
