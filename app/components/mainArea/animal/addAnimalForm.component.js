import React from 'react';

// import AnimalActions
import * as AnimalActions from '../../../actions/AnimalActions';

// import AnimalStore
import AnimalStore from '../../../stores/AnimalStore.js';

export default class AddAnimalForm extends React.Component {
	constructor(){
		super();
	}

	// create animal
	createAnimal(ev) {
		ev.preventDefault();
		let form = ev.target;

		let animal = {
			name: form.name.value,
			type: form.type.value,
			user_id: sessionStorage.getItem('user_id')
		};
		
		// add animal to db
		AnimalActions.createAnimal(animal);
		
		// go to Karmienie Component
		location.hash = '#/Karmienie';

	}

	render(){
		return (
			<div id='add-animal-box' className='col-md-12'>
				<h1>Dodaj nowego zwierzaka</h1>
				<form onSubmit={this.createAnimal.bind(this)}>
					
					<div>
						<label htmlFor="name">Nazwa</label>
						<input type="text" id="name" name="name" required/>
					</div>
					
					<div>
						<label htmlFor="type">Typ</label>
						<input type="text" id="type" name="type" required/>
					</div>
					
					<div>
						<input type="submit" value="Dodaj" name="submit"  />
					</div>
				</form>
			</div>
		);
	}
}
