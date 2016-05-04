import React from 'react';


export default class HeaderKarmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<h1  id='karmienie-header'>
				Twoje Zwierzęta
				<button>Dodaj zwierzę<i class="fa fa-plus" aria-hidden="true"></i></button>
			</h1>
		);
	}
}
