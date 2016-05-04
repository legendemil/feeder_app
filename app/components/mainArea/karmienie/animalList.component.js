import React from 'react';

// import AnimalListItem 
import AnimalListItem from './animalList/animalListItem.component';

export default class AnimalList extends React.Component {
	constructor(){
		super();
	}

	render(){
		const fakeAnimalData = [{
			id: 12,
			name: "Zbożówka",
			type: "Wąż",
			id_user: 1
		}, {
			id: 34,
			name: "Imago",
			type: "Patyczak",
			id_user: 1
		},{
			id: 35,
			name: "Wisciullius",
			type: "Liściec",
			id_user: 1
		},{
			id: 36,
			name: "Czarna Wdowa",
			type: "Pająk",
			id_user: 1
		}].map((animal, i) => <AnimalListItem key={i} id={animal.id} name={animal.name} type={animal.type} id_user={animal.id_user}/>);

		return (
			<ol className='col-md-12' id='animal-list'>
				{fakeAnimalData}
			</ol>
		);
	}
}
