import React from 'react';

// import sidebar
import Sidebar from '../components/sidebar.component';

// import mainArea
import MainArea from '../components/mainArea.component';


export default class AppContainer extends React.Component {
	constructor(){
		super();
	}

	render(){
		console.log("Przeddd");

		console.log("Po");
		return (
			<div className='container-fluid'>
					<Sidebar />
					<MainArea children={this.props.children}/>
					
			</div>
		);
	}
}
