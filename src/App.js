/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import './App.css';
import SimpleButton from './components/buttons/SimpleButton';
import StyledButton from './components/buttons/StyledButton';

export default class App extends Component {
	render() {
		//example of a expected function been passed out to button props
		let onclick = () => {
			console.log('teste');
		};

		return (
			<div className="App">
				<h2>Default Button</h2>
				<SimpleButton
					text="Botão Padrão"
					expectedAction={onclick}
				></SimpleButton>

				<br />
				<h2>Styled Buttons</h2>

				<StyledButton
					text="Botão Estilizado Sea"
					expectedAction={onclick}
					style="sea"
				></StyledButton>
				<br />
				<StyledButton
					text="Botão Estilizado Sky"
					expectedAction={onclick}
					style="sky"
				></StyledButton>
				<br />
				<StyledButton
					text="Botão Estilizado Penelope"
					expectedAction={onclick}
					style="penelope"
				></StyledButton>
				<br />
				<StyledButton
					text="Botão Estilizado Amethyst"
					expectedAction={onclick}
					style="amethyst"
				></StyledButton>
			</div>
		);
	}
}
