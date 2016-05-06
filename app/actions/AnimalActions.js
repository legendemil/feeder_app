import dispatcher from '../dispatcher';

export function createAnimal(animal) {
	dispatcher.dispatch({ 
		type: "CREATE_ANIMAL", 
		data: animal 
	});
}

export function deleteAnimal(_id) {
	dispatcher.dispatch({ 
		type: "CREATE_ANIMAL", 
		_id: _id 
	});
}