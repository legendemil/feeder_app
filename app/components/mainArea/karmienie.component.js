import React from 'react';

// import HeaderKarmienie
import HeaderKarmienie from './karmienie/header.component';

// import AnimalList
import AnimalList from './karmienie/animalList.component';

export default class Karmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
		
		return (
			<div className='col-md-12 main-area-content' id='karmienie'>
				<HeaderKarmienie />
				<AnimalList />
			</div>
		);
	}
}
