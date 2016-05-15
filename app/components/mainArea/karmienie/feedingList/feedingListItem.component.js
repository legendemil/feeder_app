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
			<tr className={"animate-show " + this.props.unfeededClass}>
				<td>{this.props.lp}</td>
				<td>{this.props.date}</td>
				<td>{this.props.food}</td>
				<td>{this.props.is_done}</td>
				<td>
					<ActionBtn linkTo={`/Karmienie/${this.props.feedingRev}/do?type=edit`} title='Edytuj' fontType="fa-pencil"/>
				</td>		
			</tr>
		);
	}
}
