import React from 'react';


export default class DetailsKarmienie extends React.Component {
	constructor(){
		super();
	}

	render(){
	
		return (
			<div>
				Work {this.props.params.animalId}
			</div>
		);
	}
}
