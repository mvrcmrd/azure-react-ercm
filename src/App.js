import React, { Component } from 'react';
import './App.css';
/*import Functions from './Functions';*/

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}

	rgb2hex(r,g,b){
		return "#" +
				("0" + parseInt(r,10).toString(16)).slice(-2) +
				("0" + parseInt(g,10).toString(16)).slice(-2) +
				("0" + parseInt(b,10).toString(16)).slice(-2);
	}
	
	randomizeColor () {
		let  r = Math.floor (Math.random()*255);
		let  g = Math.floor (Math.random()*255);
		let  b = Math.floor (Math.random()*255);
		let color = this.rgb2hex (r, g, b);
		return color;
	}

	handleTaskChange = (event) => {
		this.setState({
			newTask: event.target.value,
		})
	}

	render() {
		const baseColor = this.rgb2hex (170, 170, 170);
		/*const baseColor = this.rgb2hex (221, 221, 221);*/
		let backColor = this.randomizeColor ();
		if (backColor === baseColor) {
			backColor = this.randomizeColor ();
		}
		let fontColor = this.randomizeColor ();
		if (backColor === fontColor) {
			fontColor = this.randomizeColor ();
		}
		let number = this.props.value;
		return (
			<button
				key={number.toString()}
				className="trapeze"
				style={{borderBottom: backColor, color: fontColor}}
			>
				{number}
			</button>
		);
	}
}

export default App;
