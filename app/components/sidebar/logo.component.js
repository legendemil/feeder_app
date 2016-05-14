import React from 'react';
import { Link } from 'react-router';


export default class Logo extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-12' id='logo'>
					<h2>
						<Link to={'/'}>Feeder App</Link>
					</h2>
			</div>
		);
	}
}
