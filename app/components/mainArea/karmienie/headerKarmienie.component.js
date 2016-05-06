import React from 'react';
import AddBtn from './addBtn.component';

export default class HeaderKarmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<h1 id='karmienie-header'>
			Twoje Zwierzęta <AddBtn title={"Dodaj nowe zwierzę"} createAnimal={this.props.createAnimal}/>
			</h1>
		);
	}
}
