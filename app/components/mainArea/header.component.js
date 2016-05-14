import React from 'react';

export default class Header extends React.Component {
	constructor(){
		super();
	}
	
	// go to a prevoius page
	goBack(){
		history.go(-1);
	}

	render(){
		let styles = {
			float: 'left',
			color: 'black'
		}

		return (
			<div className='col-md-12' id='header'>
				<button className="action-btn" style={styles} onClick={this.goBack.bind(this)}>
					<i className="fa fa-arrow-left" aria-hidden="true"></i> Wróć
				</button>
				User
			</div>
		);
	}
}
