export {randomNumber, rgb2hex, randomizeColor};

function randomNumber (min, max) {
	let a = Math.floor (Math.random()*(max - min)) + min;
	/*alert (a)*/;
	return a;
}

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
