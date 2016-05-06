import React from 'react';


export default class DeleteBtn extends React.Component {
	constructor(){
		super();
	}

	

	render(){
		return (
			<button className='action-btn' onClick={this.props.deleteAnimal}>
				Usuń <i className="fa fa-trash" aria-hidden="true"></i>
			</button>
		);
	}
}
