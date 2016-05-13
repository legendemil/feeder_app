import React from 'react';

export default class FeedingListItem extends React.Component {
	constructor(){
		super();
	}

	render(){
		return(
			<li className={this.props.unfeededClass}>{this.props.date + ' - ' + this.props.food + ' - ' + this.props.is_done}
				<button className={"action-btn"}>Edytuj<i className="fa fa-pencil" aria-hidden="true"></i></button>
			</li>
		);
	}
}