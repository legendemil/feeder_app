import React from 'react';

// import temp site
import TempSite from '../tempSite.component';

export default class Dodatkowe extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-12 main-area-content' id='dodatkowe'>
				<TempSite name={"Dodatkowe"}/>
			</div>
		);
	}
}
