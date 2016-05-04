import React from 'react';

// import Logo Component
import Logo from './sidebar/logo.component';

// import MenuSidebar Component
import MenuSidebar from './sidebar/menuSidebar.component';

export default class Sidebar extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className='col-md-2' id='sidebar'>
					<Logo />
					<MenuSidebar />
			</div>
		);
	}
}
