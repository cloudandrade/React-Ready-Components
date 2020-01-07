import React, { Component } from 'react';

// import { Container } from './styles';

export default class SimpleButton extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		//user action implementation passed to button
		this.props.expectedAction();
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.handleSubmit}>
					{this.props.text}
				</button>
			</>
		);
	}
}
