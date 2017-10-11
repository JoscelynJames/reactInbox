import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			read: '',

		}
	}

	getReadStatus (email) {
			if (email.read === true) {
				console.log(true)
				return 'row message read';
			} else {
				console.log(false)
				return 'row message unread';
			}
	};

	// uread messge
	render () {
		return (
			this.props.emails.map((email) => {
				return (
					<div className={this.getReadStatus(email)} key={email.id}>
						<div className="col-xs-1">
							<div className="row">
								<div className="col-xs-2">
									<input type="checkbox" />
								</div>
								<div className="col-xs-2">
									<i className="star fa fa-star"></i>
								</div>
							</div>
						</div>
						<div className="col-xs-11" >
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