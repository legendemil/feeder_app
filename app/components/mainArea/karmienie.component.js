import React from 'react';

// import HeaderKarmienie
import HeaderKarmienie from './karmienie/headerKarmienie.component';

// import AnimalList
import AnimalList from './karmienie/animalList.component';

// import AnimalActions
import * as AnimalActions from '../../actions/AnimalActions';

// import AnimalStore
import AnimalStore from '../../stores/AnimalStore.js';

export default class Karmienie extends React.Component {
	constructor(){
		super();
		this.state = {
			animals: this.getAnimals()
		}
	}

	componentWillMount(){
		AnimalStore.on("change", this.getAnimals.bind(this));
	}
	
	// get Animals from AnimalsStore
	getAnimals(){
		let _this = this;

		AnimalStore.getAll().then(function (doc) {
			_this.setState({
				animals: doc.rows
			});
		});
	}

	// create animal
	createAnimal(animal) {
		AnimalActions.createAnimal({name: 'Patyczak', type: 'Imago', user_id: 1});
	}

	render(){
		console.log('data', this.state.animals);
		return (
			<div className='col-md-12 main-area-content' id='karmienie'>
				<HeaderKarmienie createAnimal={this.createAnimal.bind(this)}/>
				<AnimalList animals={this.state.animals || []}/>
			</div>
		);
	}
}
