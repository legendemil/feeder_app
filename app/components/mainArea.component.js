import React from 'react';


// import Header component
import Header from './mainArea/header.component';

export default class MainArea extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-10' id='main-area'>
				<div className="row">
					<Header />
					Main Area
				</div>
			</div>
		);
	}
}
