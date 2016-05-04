import React from 'react';

// import Header component
import Header from './mainArea/header.component';

// import Home component
import Home from './mainArea/home.component';



export default class MainArea extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-10 col-sm-9' id='main-area'>
				<div className="row">
					<Header />
					{this.props.children}
				</div>
			</div>
		);
	}
}

