import React from 'react';

// import AnimalActions
import * as AnimalActions from '../../../actions/AnimalActions';

// import AnimalStore
import AnimalStore from '../../../stores/AnimalStore.js';

export default class AddKarmienieForm extends React.Component {
	constructor(){
		super();
	}

	
	render(){
		return (
			<div className='col-md-12'>
				Karmeinie form
			</div>
		);
	}
}
