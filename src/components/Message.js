import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props)

		this.state = { }

		this.handleClick = this.handleClick.bind(this);
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
			return true;
		} else {
			return false;
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
	};

	getStarStatus(email) {
		if (email.starred === true) {
			return 'star fa fa-star';
		} else {
			return 'star fa fa-star-o';
		}
	};

	handleClick(e , email) {
		e.preventDefault();

		if (email.starred === true) {
			email.starred = false;
	 	} else {
			email.starred = true;
		}

		this.setState({});
	};

	render () {
		return (
			this.props.emails.map((email) => {
				return (
					<div className={"row message " + this.getReadStatus(email) + " " + this.getSelectStatus(email)} key={email.id}>
						<div className="col-xs-1">
							<div className="row">
								<div className="col-xs-2">
									<input type="checkbox" onChange={() => this.getCheckStatus(email)}/>
								</div>
								<div onClick={(e) => this.handleClick(e, email)} className="col-xs-2">
									<i className={this.getStarStatus(email)}></i>
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