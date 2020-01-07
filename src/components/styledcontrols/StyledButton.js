import React, { Component } from 'react';
import './style-btn.css';

export default class StyledButton extends Component {
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
				<button
					type="button"
					className={this.props.style}
					onClick={this.handleSubmit}
				>
					{this.props.text}
				</button>
			</>
		);
	}
}
