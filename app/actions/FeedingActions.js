import dispatcher from '../dispatcher';

export function createFeeding(feeding) {
	dispatcher.dispatch({
		type: 'CREATE_FEEDING',
		feeding: feeding
	});
}