import React from 'react';

// import temp site
import TempSite from '../tempSite.component';

export default class Inkubacja extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-12 main-area-content' id='inkubacja'>
				<TempSite name={"Inkubacja"}/>
			</div>
		);
	}
}
