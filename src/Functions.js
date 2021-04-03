export {randomNumber, rgb2hex, randomizeColor};

function randomNumber (min, max) {
	let color = Math.floor (Math.random()*(max - min)) + min;
	return color;
}

function rgb2hex(r,g,b){
	return "#" +
			("0" + parseInt(r,10).toString(16)).slice(-2) +
			("0" + parseInt(g,10).toString(16)).slice(-2) +
			("0" + parseInt(b,10).toString(16)).slice(-2);
}
	
function randomizeColor (baseColor) {
	let rb = baseColor.slice(1, 3);
	let gb = baseColor.slice(3, 5);
	let bb = baseColor.slice(-2);
	let r = Math.floor (Math.random()*256);
	let g = Math.floor (Math.random()*256);
	let b = Math.floor (Math.random()*256);
	while ((r - parseInt(rb, 16)) < 10 && 
			(g - parseInt(gb, 16)) < 10 && (b - parseInt(bb, 16)) < 10) {
		r = Math.floor (Math.random()*256);
		g = Math.floor (Math.random()*256);
		b = Math.floor (Math.random()*256);
	}
	let color = rgb2hex (r, g, b);
	return color;
}
