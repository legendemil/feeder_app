import React from 'react';
import { Link } from 'react-router';

export default class AddBtn extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<button className="add-btn"><Link to={'/animal/add'}>{this.props.title}<i className="fa fa-plus" aria-hidden="true"></i></Link></button>
		);
	}
}
