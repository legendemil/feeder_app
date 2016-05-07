import React from 'react';
import { Link } from 'react-router';

export default class ActionBtn extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<button className="action-btn"><Link to={this.props.linkTo}>{this.props.title}<i className="fa fa-plus" aria-hidden="true"></i></Link></button>
		);
	}
}
