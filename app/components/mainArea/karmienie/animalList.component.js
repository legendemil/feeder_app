import React from 'react';

// import AnimalListItem 
import AnimalListItem from './animalList/animalListItem.component';

export default class AnimalList extends React.Component {
	constructor(){
		super();
	}

	render(){
		const animals = this.props.animals.map((animal, i) => <AnimalListItem key={i} animal={animal.doc} />);

		return (
			<ol className='col-md-12' id='animal-list'>
				{animals}
			</ol>
		);
	}
}
