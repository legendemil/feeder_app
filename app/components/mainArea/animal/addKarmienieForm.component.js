import React from 'react';
import ReactDOM from 'react-dom';

// import FeedingActions
import * as FeedingActions from '../../../actions/FeedingActions';

// import FeedingStore
import FeedingStore from '../../../stores/FeedingStore.js';

export default class AddKarmienieForm extends React.Component {
	constructor(){
		super();
		this.state = {
			headerForm: 'Dodaj nowe karmienie',
		}
		this.succesFeeding = this.succesFeeding.bind(this);	
		this.formatDate = this.formatDate.bind(this);	
		this.updateInputs = this.updateInputs.bind(this);	
	}

	componentDidMount(){

		// if the type is edit thne fetch date about currnet feeding to edit
		if(this.props.location.query.type === 'edit') {
			let _this = this;
			
			// fetch current feeding and update input fields
			FeedingStore.getFeedingByRev(this.props.params.feedingRev).then(function(res) {
				let feeding = res.docs[0];
				_this.updateInputs(feeding);
			});

			this.setState({
				headerForm: `Edytuj karmienie`
			});
		}
		
		// listening for succesful adding feeding
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

	// format date
	formatDate(sec){
		let date = new Date(sec);
		let year = date.getFullYear(),
			month = date.getMonth() + 1,
			dayOfMonth = date.getDate();
		
		if(month < 10) 
			month = '0' + month;
		if(dayOfMonth < 10)
			dayOfMonth = '0' + dayOfMonth;

		return year + '-' + month + '-' + dayOfMonth;
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

	updateInputs(feeding){
		let _this = this;
		let form = ReactDOM.findDOMNode(_this.refs['feeding-form']);
		
		form.date.value = _this.formatDate(feeding.date);
		form.food.value =  feeding.food;
	}

	
	render(){
		console.log(this.props.location.query.type);
		return (
			<div className='col-md-12 main-area-content add-form-box'>
				<h1>{ this.state.headerForm }</h1>
				<form onSubmit={this.handleSubmit.bind(this)} ref='feeding-form'>
					<div>
						<label htmlFor="date">Data karmienia</label>
						<input type="date" id='date' name='date' required/>
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
