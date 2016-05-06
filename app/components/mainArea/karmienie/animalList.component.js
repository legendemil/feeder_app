import React from 'react';

// import AnimalListItem 
import AnimalListItem from './animalList/animalListItem.component';

export default class AnimalList extends React.Component {
	constructor(){
		super();
	}

	render(){
		const animals = this.props.animals.map((animal, i) => <AnimalListItem key={i} id={animal.doc._id} name={animal.doc.name} type={animal.doc.type} id_user={animal.doc.id_user}/>);

		return (
			<ol className='col-md-12' id='animal-list'>
				{animals}
			</ol>
		);
	}
}
