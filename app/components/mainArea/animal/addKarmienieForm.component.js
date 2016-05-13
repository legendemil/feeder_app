import React from 'react';

// import FeedingActions
import * as FeedingActions from '../../../actions/FeedingActions';

// import FeedingStore
import FeedingStore from '../../../stores/FeedingStore.js';

export default class AddKarmienieForm extends React.Component {
	constructor(){
		super();
		this.succesFeeding = this.succesFeeding.bind(this);	
	}

	componentWillMount(){
		FeedingStore.on('add_feeding', this.succesFeeding);
		console.log('rev feeding', this.props.params.feedingRev);
	}

	componentWillUnmount(){
		FeedingStore.removeListener('add_feeding', this.succesFeeding);
	}

	
	succesFeeding(){
		// go to animal feeding page
		location.hash = `#/Karmienie/${this.props.params.animalId}`;
	}

	// add new feeding to db
	handleSubmit(ev){
		ev.preventDefault();
		let _this = this;
		let form = ev.target;


		// feeding obj to pass to createFeeding
		let feeding = {
			_id: new Date().toISOString(),
			id_animal: _this.props.params.animalId,
			date: form.date.value,
			id_user: sessionStorage.getItem('user_id') || 1,
			food: form.food.value,
			is_done: form.is_done.value > 0 ? true : false
		}

		FeedingActions.createFeeding(feeding);
	}

	
	render(){
		console.log(this.props.location.query.type);
		return (
			<div className='col-md-12 main-area-content add-form-box'>
				<h1>Dodaj nowe karmienie dla Węża</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label htmlFor="date">Data karmienia</label>
						<input type="date" id='date' name='date' required />
					</div>

					<div>
						<label htmlFor="food">Pokarm:</label>
						<input type="text" id='food' name='food' required/>
					</div>
					
					<div>
						<label htmlFor="id_done">Czy zjadł:</label>
						Tak<input type="radio" name='is_done' value="1" required/>
						Nie<input type="radio"  name='is_done' value="0" required/>
					</div>

					<div>
						<input type="submit" value='Zrobione' />
					</div>
				</form>
			</div>
		);
	}
}
