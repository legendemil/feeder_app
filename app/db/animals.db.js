// crete a animals db
/*
	{
		id: number,
		name: string,
		type: string,
		id_user: number(reference to a user_id)
	}
*/
let animals = new PouchDB('animals');


// object contains db and methods to manipulate data in db
let AnimalsDB = {
	db: animals,
	addAnimal: addAnimal,
	getAnimals: getAnimals,
	editAnimal: editAnimal,
	deleteAnimal: deleteAnimal
}

// add a animal to a db
function addAnimal(name, type, id_user) {
	let animal = {
		_id: new Date().toISOString(),
		name: name,
		type: type,
		id_user: 1
	};

	this.db.put(animal, function callback(err, result) {
		if(!err)
			console.log("Succesfully add a animal");
	});
}

// get animals
function getAnimals(){
	this.db.allDocs({
		include_docs: true,
		descending: true
	}, function (err, doc) {
		if(!err)
			console.log(doc.rows);
	});
}

// delete an animal
function deleteAnimal(todo){
	this.db.remove(todo);
}


// edit animal
function editAnimal(todo) {
	// body...
}


// update data automaticaly
AnimalsDB.db.changes({
	since: 'now',
	live: true
}).on('change', AnimalsDB.getAnimals);


export default AnimalsDB;