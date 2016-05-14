import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

// import animalDB
import AnimalsDB from '../db/animals.db.js';

// import feedingStore
import FeedingStore from './FeedingStore';


class AnimalStore extends EventEmitter {
	constructor(){
		super();
	}

	getAll(){	
		return AnimalsDB.getAnimals();
	}

	// get one animal
	getAnimal(_id) {
		console.log('as',AnimalsDB.getAnimal(_id));
		return AnimalsDB.getAnimal(_id);
	}
	
	// create animal in a db
	createAnimal(data){
		let _this = this;
		AnimalsDB.addAnimal(data.name, data.type, data.user_id);

	}

	// delete aniaml from db
	deleteAnimal(doc){
		let _this = this;
		AnimalsDB.deleteAnimal(doc).then(function (res) {
			_this.emit('change');
		});
	}

	handleActions(action) {
		console.log("Type: ", action.type);
		switch(action.type) {

			case 'CREATE_ANIMAL':
				this.createAnimal(action.data);
				break;

			case 'DELETE_ANIMAL':
				this.deleteAnimal(action.doc);
				break;

			case 'CREATE_FEEDING':
				FeedingStore.createFeeding(action.feeding);
				break;

			case 'DELETE_FEEDING':
				FeedingStore.deleteFeeding(action.feeding);
				break;
		}
	}
}

const animalStore = new AnimalStore;

dispatcher.register(animalStore.handleActions.bind(animalStore));

export default animalStore;