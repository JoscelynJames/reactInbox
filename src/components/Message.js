import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props)

		this.state = { }
	}
	// uread messge
	render () {
		return (
			this.props.emails.map((email) => {
				return (
				<div className="row message read"  key={email.id}>
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