import React, { Component } from 'react';
import './App.css';
/*import facedraw from './facedraw1.png';*/
import {randomNumber, rgb2hex, randomizeColor} from './Functions.js';

export default class App extends Component {
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
			let randCode = randomNumber(65, 91);
			let randLetter = String.fromCharCode (randCode);
			if (randShape === 0) {
				table.push(<Shape
					key={i.toString()}
					id={i.toString()}
					name="square"
					value={randLetter} />);
			} else {
				table.push(<Shape
					key={i.toString()}
					id={i.toString()}
					name="circle"
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
		/*const baseColor = rgb2hex (170, 170, 170);*/
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

class Shape extends Component {
	constructor(props) {
		super(props);
		this.refButton = React.createRef();
		this.handleClick = this.handleClick.bind (this);
		this.state = {
			value: null,
			innerText: null,
		};
	}

	handleClick = (e) => {
		/*console.log (e.target.value, e.target.id);*/
		console.log (this.refButton);
/*		this.refButton.current.innerText = "m";
		let aux = "facedraw1.png";
		let aux = {facedraw}
		console.log(aux);
		let innerHTML = "<img src='./" + aux + "' //>";
		console.log(innerHTML);
		this.refButton.current.innerHTML = innerHTML;
		console.log (this.refButton);*/
		if (this.refButton.current.innerText === "m") {
			this.refButton.current.innerText = this.state.innerText;
		} else {
/*			this.state.innerText = this.refButton.current.innerText;*/
			this.setState ({innerText: this.refButton.current.innerText});
			this.refButton.current.innerText = "m";
		}
	}

	render() {
		const baseColor = rgb2hex (221, 221, 221);
		let backColor = randomizeColor (baseColor);
		let fontColor = randomizeColor (backColor);
		let characterInside = this.props.value;
		let keyValue = this.props.id;
		let className = this.props.name;
		return (
			<button
				key={keyValue}
				ref={this.refButton}
				id={keyValue}
				value={characterInside.toString()}
				className={className}
				style={{backgroundColor: backColor, color: fontColor}}
				onClick={this.handleClick}
			>
				{characterInside}
			</button>
		);
	}
}
