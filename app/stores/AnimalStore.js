import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

// import animalDB
import AnimalsDB from '../db/animals.db.js';




class AnimalStore extends EventEmitter {
	constructor(){
		super();
	}

	getAll(){	
		return AnimalsDB.getAnimals();
	}
	
	// create animal in a db
	createAnimal(data){
		let _this = this;
		AnimalsDB.addAnimal(data.name, data.type, data.user_id);

	}

	handleActions(action) {
		console.log("Type: ", action.type);
		switch(action.type) {
			case 'CREATE_ANIMAL':
				this.createAnimal(action.data);
				break;
		}
	}
}

const animalStore = new AnimalStore;

dispatcher.register(animalStore.handleActions.bind(animalStore));

export default animalStore;