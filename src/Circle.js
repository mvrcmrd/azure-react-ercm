/* import React, { Component } from 'react'; */
import React from 'react';
import './App.css';
import {rgb2hex, randomizeColor} from './Functions';

class Circle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}

	render() {
		/*const baseColor = this.rgb2hex (170, 170, 170);*/
		const baseColor = rgb2hex (221, 221, 221);
		let backColor = randomizeColor ();
		if (backColor === baseColor) {
			backColor = randomizeColor ();
		}
		let fontColor = randomizeColor ();
		if (backColor === fontColor) {
			fontColor = randomizeColor ();
		}
		let number = this.props.value;
		return (
			<button
				key={number.toString()}
				className="circle"
				style={{backgroundColor: backColor, color: fontColor}}
			>
				{this.props.value}
			</button>
		);
	}
}

export default Circle;
