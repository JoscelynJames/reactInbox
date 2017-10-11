import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			read: '',

		}
	}

	getReadStatus(email) {
		if (email.read === true) { 
			return 'read';
		} else { 
			return 'unread';
		}
	};

	getCheckStatus(email) {
		if (email.selected === true) {
			return 'checked';
		} 
	};

	getSelectStatus(email) {
		if (email.selected === true) {
			return 'selected'
		}
	};

	getLabels(labels) {
		return (
			<span>
				<span className="label label-warning">{labels[0]}</span>
		  	<span className="label label-warning">{labels[1]}</span>
			</span>
		)	
	}

	render () {
		return (
			this.props.emails.map((email) => {
				return (
					<div className={"row message " + this.getReadStatus(email) + " " + this.getSelectStatus(email)} key={email.id}>
						<div className="col-xs-1">
							<div className="row">
								<div className="col-xs-2">
									<input type="checkbox" checked={this.getCheckStatus(email)}/>
								</div>
								<div className="col-xs-2">
									<i className="star fa fa-star"></i>
								</div>
							</div>
						</div>
						<div className="col-xs-11" >
							{this.getLabels(email.labels)}
							<a href="#">
								{email.subject}
							</a>
						</div>
				</div>
			)
		})
	)}
};


export default Message;