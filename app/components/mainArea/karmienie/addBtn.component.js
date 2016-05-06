import React from 'react';


export default class AddBtn extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<button className="add-btn" onClick={this.props.createAnimal}>{this.props.title}<i className="fa fa-plus" aria-hidden="true"></i></button>
		);
	}
}
