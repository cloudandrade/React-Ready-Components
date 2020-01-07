/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import './App.css';
//importing buttons
import SimpleButton from './components/buttons/SimpleButton';
import StyledButton from './components/buttons/StyledButton';
//importing input fields
import DefaultTextField from './components/inputs/DefaultTextField';
import DefaultNumberField from './components/inputs/DefaultNumberField';
import DefaultEmailField from './components/inputs/DefaultEmailField';
import DefaultPassField from './components/inputs/DefaultPassField';

import DefaultCheck from './components/inputs/DefaultCheck';
import DefaultRadio from './components/inputs/DefaultRadio';

import DefaultTextArea from './components/inputs/DefaultTextArea';

import DefaultSelected from './components/inputs/DefaultSelected';

export default class App extends Component {
	render() {
		//example of a expected function been passed out to button props
		let onclick = () => {
			console.log('teste');
		};

		return (
			<div className="App">
				<h1>Buttons</h1>
				<h4>Default Button</h4>
				<SimpleButton
					text="Botão Padrão"
					expectedAction={onclick}
				></SimpleButton>
				<br />
				<h4>Styled Buttons</h4>
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
				<h1>Inputs</h1>
				<h4>Default inputs</h4>
				Radio: <DefaultRadio></DefaultRadio>
				<br /> Number:
				<DefaultNumberField></DefaultNumberField>
				<br /> Email:<DefaultEmailField></DefaultEmailField>
				<br />
				textfield: <DefaultTextField></DefaultTextField>
				<br />
				Textarea: <br />
				<DefaultTextArea></DefaultTextArea>
				<br /> Checkbox: <DefaultCheck></DefaultCheck>
				<br /> Select: <DefaultSelected></DefaultSelected>
				<br /> Password: <DefaultPassField></DefaultPassField>
				<h4>Styled inputs</h4>
			</div>
		);
	}
}
