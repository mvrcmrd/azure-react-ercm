import React, { Component } from 'react';
/*import React from 'react';*/

class Functions extends Component {
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
}

export default Functions;
