import React from 'react';

import Label from './Label';
import Star from './Star';
import Checkbox from './Checkbox';

class Message extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			email: this.props.email,
			allChecked: this.props.allChecked,
			isChecked: this.props.email.selected,
		};
		
		this.handleChange = this.handleChange.bind(this)
	};

	getReadStatus() {
		if (this.state.email.read) {
			return 'read';
		} else {
			return 'unread';
		}
	};

	getSelectStatus() {
		// console.log(this.state.email.selected)
		if (this.state.isChecked) {
			return 'selected'
		}
	};

	handleChange() {
		console.log('handleChange')
		this.setState({ isChecked: !this.state.isChecked })
	};

	render() {

		return (
			<div className={`row message ${this.getReadStatus()} ${this.getSelectStatus()}`}>
				<div className="col-xs-1" >
					<div className="row" >
						<div onClick={this.handleChange}>
							<Checkbox isChecked={this.state.isChecked}/>
						</div>
						<Star isStarred={this.state.email.starred}/>
					</div>
				</div>
				<Label labels={this.state.email.labels} subject={this.state.email.subject}/>
		</div>
		)
	};
};

export default Message;


