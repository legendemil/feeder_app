import React from 'react';

// import temp site
import TempSite from '../tempSite.component';

export default class Linienie extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-12 main-area-content' id='linienie'>
				<TempSite name={"Linienie"}/>
			</div>
		);
	}
}
