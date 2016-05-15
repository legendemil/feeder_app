import React from 'react';

// import actionBtn
import ActionBtn from '../actionBtn.component';

export default class FeedingListItem extends React.Component {
	constructor(){
		super();
	}

	render(){
		console.log('feeding rev', this.props.feedingRev);
		
		return(
			<li className={"animate-show " + this.props.unfeededClass}>{this.props.date + ' - ' + this.props.food + ' - ' + this.props.is_done}
				<ActionBtn linkTo={`/Karmienie/${this.props.feedingRev}/do?type=edit`} title='Edytuj' fontType="fa-pencil"/>
			</li>
		);
	}
}