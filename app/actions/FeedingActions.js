import dispatcher from '../dispatcher';

export function createFeeding(feeding) {
	dispatcher.dispatch({
		type: 'CREATE_FEEDING',
		feeding: feeding
	});
}

export function deleteFeeding(feeding) {
	dispatcher.dispatch({
		type: 'DELETE_FEEDING',
		feeding: feeding
	});
}

