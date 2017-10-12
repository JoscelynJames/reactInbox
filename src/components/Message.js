import React from 'react';

class Message extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			  
		}

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
			return 'checked';
		} 
	};

	getSelectStatus(email) {
		console.log('merp')
		if (email.selected === true) {
			return 'selected';
		} else {
			email.selected = false;
			return ''
		}
		this.setState({})
	};

	updateSelect(email) {
		console.log(email.id)
		let id = email.id
		if (email.selected === false) {
			email.selected = true;
			console.log(email)
		} else {
			email.selected = false;
			console.log(email)
		}
		this.setState({ id: email.selected })
	}

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
		// had to use this to update* or fun render() again to update. It just refreshes the state but dosent set it to anything 
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
									<input type="checkbox" checked={this.getCheckStatus(email)} onChange={() => this.updateSelect(email)}/>
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