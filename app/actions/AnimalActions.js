import dispatcher from '../dispatcher';


// createa a new animal
export function createAnimal(animal) {
	dispatcher.dispatch({ 
		type: "CREATE_ANIMAL", 
		data: animal 
	});
}


// delete animal
export function deleteAnimal(doc) {
	dispatcher.dispatch({ 
		type: "DELETE_ANIMAL", 
		doc: doc
	});
}