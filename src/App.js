/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import './App.css';
//importing buttons
import SimpleButton from './components/defaultcontrols/SimpleButton';
import StyledButton from './components/styledcontrols/StyledButton';
//importing input fields
import DefaultTextField from './components/defaultcontrols/DefaultTextField';
import DefaultNumberField from './components/defaultcontrols/DefaultNumberField';
import DefaultEmailField from './components/defaultcontrols/DefaultEmailField';
import DefaultPassField from './components/defaultcontrols/DefaultPassField';
import DefaultCheck from './components/defaultcontrols/DefaultCheck';
import DefaultRadio from './components/defaultcontrols/DefaultRadio';
import DefaultTextArea from './components/defaultcontrols/DefaultTextArea';
import DefaultSelected from './components/defaultcontrols/DefaultSelected';

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
