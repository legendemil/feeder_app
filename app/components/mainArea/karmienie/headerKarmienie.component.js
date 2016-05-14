import React from 'react';
import ActionBtn from './actionBtn.component';

export default class HeaderKarmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<h1 id='karmienie-header'>
			Twoje Zwierzęta <ActionBtn title={"Dodaj nowe zwierzę"} linkTo={'/animal/add'} fontType="fa-plus"/>
			</h1>
		);
	}
}
