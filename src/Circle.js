import React from 'react';
import './App.css';

function rgb2hex(r,g,b){
	return "#" +
			("0" + parseInt(r,10).toString(16)).slice(-2) +
			("0" + parseInt(g,10).toString(16)).slice(-2) +
			("0" + parseInt(b,10).toString(16)).slice(-2);
}
	
function randomizeColor () {
	let  r = Math.floor (Math.random()*255);
	let  g = Math.floor (Math.random()*255);
	let  b = Math.floor (Math.random()*255);
	let color = rgb2hex (r, g, b);
	return color;
}

function Circle (text) {
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
	return (
		<button
			className="circle"
			style={{backgroundColor: backColor, color: fontColor}}
		>
		{text.toString()}
		</button>
	);
}

export default Circle;
