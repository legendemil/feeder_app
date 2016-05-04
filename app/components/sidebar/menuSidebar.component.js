import React from 'react';

// import MenuBtn 
import MenuBtn from './menuSidebar/menuBtn.component';

export default class MenuSidebar extends React.Component {
	constructor(){
		super();
	}

	render(){
		
		const list = [ "Karmienie", "Inkubacja jaj", "Linienie", "Dodatkowe"].map((name, i) => <MenuBtn key={i} name={name} /> );

		return (
			<div className='col-md-12' id='menu-sidebar'>
					<ul>
						{list}
					</ul>
			</div>
		);
	}
}
