import React from 'react';

// import sidebar
import Sidebar from '../components/sidebar.component';

// import mainArea
import MainArea from '../components/mainArea.component';


// import AnimalsDB
import AnimalsDB from '../db/animals.db.js';

export default class AppContainer extends React.Component {
	constructor(){
		super();
	}

	render(){
		console.log("Przeddd");
		// AnimalsDB.addAnimal("Zbożówka", "Wąż", 1);
		AnimalsDB.getAnimals();
		console.log("Po");
		return (
			<div className='container-fluid'>
					<Sidebar />
					<MainArea children={this.props.children}/>
					
			</div>
		);
	}
}
