import dispatcher from '../dispatcher';

export function createAnimal(animal) {
	dispatcher.dispatch({ 
		type: "CREATE_ANIMAL", 
		data: animal 
	});
}