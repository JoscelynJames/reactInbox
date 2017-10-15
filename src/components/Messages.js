import React from 'react';

import Label from './Label';
import Star from './Star'

class Messages extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			allChecked: '',
		}

		// this.handleClick = this.handleClick.bind(this);
	}

	componentWillUpdate() {
		this.getSelectStatus
	};

	getReadStatus(email) {
		if (email.read) { 
			return 'read';
		} else { 
			return 'unread';
		}
	};

	getCheckStatus(email) {
		if (email.selected) {
			return 'checked';
		} 
	};

	getSelectStatus(email) {
		if (email.selected) {
			return 'selected';
		} else {
			email.selected = false;
			return ''
		}
	};

	updateSelect(email) {
		if (email.selected) {
			return email.selected = true;
		} else {
			return email.selected = false;
		};
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
								<Star isStarred={email.starred}/>
							</div>
						</div>
						<Label labels={email.labels} subject={email.subject} />
					</div>
			)
		})
	) 
	}; // end of render()

}; // end of component


export default Messages;