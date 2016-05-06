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
		this.getAnimals = this.getAnimals.bind(this);
		this.state = {
			animals: this.getAnimals()
		}
	}

	componentDidMount(){
		AnimalStore.on("change", this.getAnimals);
	}

	componentWillUnmount(){
		AnimalStore.removeListener("change", this.getAnimals);
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

	

	render(){
		console.log('data', this.state.animals);
		return (
			<div className='col-md-12 main-area-content' id='karmienie'>
				<HeaderKarmienie/>
				<AnimalList animals={this.state.animals || []}/>
			</div>
		);
	}
}
