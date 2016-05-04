import React from 'react';
import { Link } from 'react-router';

export default class AnimalListItem extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<li className='animal-list-item'>
				<Link to={`/Karmienie/${this.props.id}`}>{this.props.type} - {this.props.name}</Link>
			</li>
		);
	}
}
