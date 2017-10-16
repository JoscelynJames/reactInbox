import React from 'react';
import Message from './Message'

class Messages extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			allChecked: this.props.allChecked,
		};
	};

	handleChange(e) {
		e.preventDefault();
		this.updateSelect(e.target)
	}

render () {
		return (
			this.props.emails.map((email) => {
				return 	<Message email={email} allChecked={this.state.allChecked} key={email.id}/>;
			})
		); 
	}; // end of render()

}; // end of component


export default Messages;