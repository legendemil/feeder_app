/*
	id
	id_animal
	id_user
	date
	food
	is_done
*/ 


let feedings = new PouchDB('feedings');


let FeedingsDB = {
	db: feedings,
	createFeeding: createFeeding
}

// create a new feeding
function createFeeding(feeding) {
	
	return this.db.put(feeding);
}




export default FeedingsDB;