import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

// import feeding db
import FeedingDB from '../db/feedings.db.js';

class FeedingStore extends EventEmitter {
	constructor(){
		super();
	}


	handleActions(action) {
		switch(action.type) {
			
		}
	}
}


let feedingStore = new FeedingStore;


dispatcher.dispatch(feedingStore.handleActions.bind(this));

export default feedingStore;