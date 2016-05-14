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
	getFeedingByRev: getFeedingByRev,
	createFeeding: createFeeding,
	deleteFeeding: deleteFeeding
}

// create or updating a new feeding
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

// get feeding by rev
function getFeedingByRev(rev) {
	let _this = this;
	return this.db.createIndex({
		index: { fields: ['_rev'] } 
	}).then(function () {
		return _this.db.find({
			selector: { _rev: {$eq: rev}}
		});
	});
}

// delete feeding
function deleteFeeding(feeding) {
	return this.db.remove(feeding);
}


export default FeedingsDB;