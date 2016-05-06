import dispatcher from '../dispatcher';

export function createAnimal(animal) {
	dispatcher.dispatch({ 
		type: "CREATE_ANIMAL", 
		data: animal 
	});
}

export function deleteAnimal(doc) {
	dispatcher.dispatch({ 
		type: "DELETE_ANIMAL", 
		doc: doc
	});
}