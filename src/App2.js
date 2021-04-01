import React, { Component } from 'react';
import './App.css';

/*
class Tierbox extends React.Component {
	render() {
		return (
			<View style={styles.rectangle}></View>
		);
	}
}

const styles = {
	rectangle: {
		width: '50px',
		height: '50px',
		backgroundColor: 'red',
	}
}
*/
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}
	render() {
		return (
			<button
				className="square"
			>
				{this.props.value}
			</button>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newTask: "",
		}
	}

	handleTaskChange = (event) => {
		this.setState({
			newTask: event.target.value,
		})
	}

	render() {
		return (
			<div className="container">
			<h1 className="title">Hello world <span aria-label="emoji" role="img">🔥</span></h1>
			<input onChange={this.handleTaskChange} type="text" className="new-task"/>
			<h2 className="test-label">{this.state.newTask}</h2>
			</div>
		);
	}
}

export default App;
