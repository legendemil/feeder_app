import React from 'react';

export default class TempSite extends React.Component {
	constructor(){
		super();
	}

	render(){
		let styles = {
			'fontSize': '200px',
			margin: 'auto',
			position: 'relative',
			left: '50%',
			transform: 'translate(-50%)'
		}
		return(
			<div className='col-md-12'>
				<h1>{this.props.name} - To jest strona tymczasowa</h1>
				<p>Strona pojawi się wkrótce</p>
				<i className="fa fa-cog" style={styles} aria-hidden="true"></i>
			</div>
		);
	}
}