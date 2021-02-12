import './App.css';

import React, { Component } from 'react';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
		this.reset = this.reset.bind(this);
	}

	increase() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	decrease() {
		this.setState({
			count: this.state.count - 1,
		});
	}

	reset() {
		this.setState({
			count: 0,
		});
	}

	render() {
		return (
			<div
				className="App"
				style={{
					backgroundColor: 'lightcoral',
					height: 10000,
					fontFamily: 'cursive',
					fontWeight: 'bolder',
					fontSize: 50,
				}}
			>
				<h1 style={{ fontSize: 100, paddingTop: 60 }}>MY COUNTER</h1>
				<h1 style={{ fontSize: 100 }}>{this.state.count}</h1>
				<button
					onClick={this.increase}
					style={{
						border: 'solid 1px',
						borderRadius: '10%',
						margin: 10,
						backgroundColor: 'coral',
					}}
				>
					Increase
				</button>
				<button
					onClick={this.decrease}
					style={{
						border: 'solid 1px',
						borderRadius: '10%',
						margin: 10,
						backgroundColor: 'coral',
					}}
				>
					Decrease
				</button>
				<button
					onClick={this.reset}
					style={{
						border: 'solid 1px',
						borderRadius: '10%',
						margin: 10,
						backgroundColor: 'coral',
					}}
				>
					Reset
				</button>
			</div>
		);
	}
}

export default App;
