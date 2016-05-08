import React from 'react';

// import AnimalActions
import * as AnimalActions from '../../../actions/AnimalActions';

// import AnimalStore
import AnimalStore from '../../../stores/AnimalStore.js';

export default class AddKarmienieForm extends React.Component {
	constructor(){
		super();
	}

	
	render(){
		return (
			<div className='col-md-12 main-area-content add-form-box'>
				<h1>Dodaj nowe karmienie dla Węża</h1>
				<form>
					<div>
						<label htmlFor="date">Data karmienia</label>
						<input type="date" id='date' name='date' required />
					</div>

					<div>
						<label htmlFor="food">Pokarm:</label>
						<input type="text" id='food' name='food'  required/>
					</div>
					
					<div>
						<label htmlFor="id_done">Czy zjadł:</label>
						Tak<input type="radio" id='id_done' name='id_done' value="yes" required/>
						Nie<input type="radio" id='id_done' name='id_done' value="no" required/>
					</div>

					<div>
						<input type="submit" value='Zrobione' />
					</div>
				</form>
			</div>
		);
	}
}
