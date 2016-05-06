import React from 'react';
import { Link } from 'react-router';

// import AnimalActions
import * as AnimalActions from '../../../../actions/AnimalActions.js';

// import AnimalActions
import AnimalStore from '../../../../stores/AnimalStore.js';

// import DeleteBtn
import DeleteBtn from './deleteBtn.component';

export default class AnimalListItem extends React.Component {
	constructor(){
		super();
	}

	deleteAnimal(){
		let isDelete = confirm('Czy na pewno chcecz usunąc. ');
		
		if(isDelete)
			AnimalActions.deleteAnimal(this.props.animal);

		console.log(this.props.animal);
	}

	render(){
		return (
			<li className='animal-list-item'>
				<Link to={`/Karmienie/${this.props.animal._id}`}>{this.props.animal.type} - {this.props.animal.name}</Link>
				<DeleteBtn deleteAnimal={this.deleteAnimal.bind(this)}/>
			</li>
		);
	}
}
