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
		let color;
		switch (this.props.style) {
			case 'sea' || 'Sea' || 'SEA':
				this.color = 'sea';
				break;
			case 'sky' || 'Sky' || 'SKY':
				color = 'sky';
				break;
			case 'space' || 'Space' || 'SPACE':
				color = 'space';
				break;
			case 'penelope' || 'Penelope' || 'PENELOPE':
				color = 'penelope';
				break;
			case 'amethyst' || 'ametista' || 'Amethyst' || 'AMETHYST':
				color = 'amethyst';
				break;
			case 'golden' || 'Golden' || 'GOLDEN':
				color = 'golden';
				break;
			case 'light' || 'Light' || 'LIGHT':
				color = 'light';
				break;
			default:
				break;
		}

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
