import { EventEmitter } from 'events';

// import feeding db
import FeedingDB from '../db/feedings.db.js';

class FeedingStore extends EventEmitter {
	constructor(){
		super();
		this.feedings = [];
	}

	// create a new feeding in a db
	createFeeding(feeding) {
		let _this = this;

		let date = new Date(feeding.date);
		feeding.date = date.getTime();

		FeedingDB.createFeeding(feeding).then(function (res) {
			console.log('succes adding feeding: ', res);
			_this.emit('change_feeding');
		});
	}

	// delete feeding
	deleteFeeding(feeding){
		let _this = this;
		FeedingDB.deleteFeeding(feeding).then(function () {
			_this.emit('change_feeding');
		});
	}

	// get animal's feedings
	getFeedings(animal_id){
		let _this = this;
		FeedingDB.getFeedings(animal_id).then(function (res) {
			 _this.feedings = res.docs;
			 _this.emit('fetch_feedings');
		}).catch(function (err) {
			console.log('Error fetching feedings: ', err);
		});
	}

	// get feeding b y rev
	getFeedingByRev(rev){
		let _this = this;
		return FeedingDB.getFeedingByRev(rev);
	}
}


let feedingStore = new FeedingStore;


export default feedingStore;