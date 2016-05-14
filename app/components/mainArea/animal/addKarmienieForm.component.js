import React from 'react';
import ReactDOM from 'react-dom';

// import FeedingActions
import * as FeedingActions from '../../../actions/FeedingActions';

// import FeedingStore
import FeedingStore from '../../../stores/FeedingStore.js';

// import action btn
import DeleteBtn from '../karmienie/animalList/deleteBtn.component';

export default class AddKarmienieForm extends React.Component {
	constructor(){
		super();
		this.state = {
			headerForm: 'Dodaj nowe karmienie',
		}
		this.feeding = {};
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
				_this.feeding = res.docs[0];
				_this.updateInputs(_this.feeding);
				console.log(_this.feeding);
			});

			this.setState({
				headerForm: `Edytuj karmienie`
			});
		}
		
		// listening for succesful adding feeding
		FeedingStore.on('change_feeding', this.succesFeeding);
		console.log('rev feeding', this.props.params.feedingRev);
	}


	componentWillUnmount(){
		FeedingStore.removeListener('change_feeding', this.succesFeeding);
	}

	
	succesFeeding(){
		// go to animal feeding page
		history.go(-1);
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

		let feeding = {
			date: form.date.value,
			id_user: sessionStorage.getItem('user_id') || 1,
			food: form.food.value,
			is_done: form.is_done.value > 0 ? true : false
		}

		// if type is edit then edit, ele create a new feeding
		if(this.props.location.query.type === 'edit') {
			feeding._id = _this.feeding._id;
			feeding._rev = _this.feeding._rev;
			feeding.id_animal = _this.feeding.id_animal;
			console.log('updateing wfeeding', feeding);
		} else {
			feeding._id = new Date().toISOString();
			feeding.id_animal = _this.props.params.animalId;
		}
		FeedingActions.createFeeding(feeding);
	}

	updateInputs(feeding){
		let _this = this;
		let form = ReactDOM.findDOMNode(_this.refs['feeding-form']);
		
		form.date.value = _this.formatDate(feeding.date);
		form.food.value =  feeding.food;
		
		if(feeding.is_done)
			form.is_done[0].checked = true;
		else
			form.is_done[1].checked = true;
	}	
	
	// delete feeding
	deleteFeeding(){
		let is_delete = confirm('Czy na pewno chcesz usunąć?');
		if(is_delete)
			FeedingActions.deleteFeeding(this.feeding);
	}
	
	render(){
		console.log(this.props.location.query.type );
		const deleteBtn = this.props.location.query.type === 'edit' 
						? <DeleteBtn onClick={this.deleteFeeding.bind(this)}/>  : '';
		return (
			<div className='col-md-12 main-area-content add-form-box'>
				<h1>	
					{ this.state.headerForm }
					 { deleteBtn }
				</h1>
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
