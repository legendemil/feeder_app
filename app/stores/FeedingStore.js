import { EventEmitter } from 'events';

// import feeding db
import FeedingDB from '../db/feedings.db.js';

class FeedingStore extends EventEmitter {
	constructor(){
		super();
	}

	// create a new feeding in a db
	createFeeding(feeding) {
		let _this = this;
		FeedingDB.createFeeding(feeding).then(function (res) {
			console.log('succes adding feeding: ', res);
			_this.emit('add_feeding');
		});
	}
}


let feedingStore = new FeedingStore;


export default feedingStore;