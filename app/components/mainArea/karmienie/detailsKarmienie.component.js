import React from 'react';


export default class DetailsKarmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
	
		return (
			<div>
				Animal.id {this.props.params.animalId}
			</div>
		);
	}
}
