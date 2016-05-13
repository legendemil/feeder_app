/*
	id
	id_animal
	id_user
	date
	food
	is_done
*/ 


let feedings = new PouchDB('feedingsDB');


let FeedingsDB = {
	db: feedings,
	getFeedings: getFeedings,
	createFeeding: createFeeding
}

// create a new feeding
function createFeeding(feeding) {
	
	return this.db.put(feeding);
}

// get feedings
function getFeedings(animal_id) {
	let _this = this;
	return _this.db.createIndex({
		index: { fields: ['id_animal'] }
	}).then(function() {
		return _this.db.find({
			selector: { id_animal: { $eq: animal_id} }
		})
	});
}


export default FeedingsDB;