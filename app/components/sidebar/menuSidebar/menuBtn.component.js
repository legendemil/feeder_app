import React from 'react';
import { Link } from 'react-router';

export default class MenuBtn extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<li><Link to={"test"}>{this.props.name}</Link></li>
		);
	}
}
