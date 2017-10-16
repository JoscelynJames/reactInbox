import React from 'react';

class Star extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isStarred: this.props.isStarred
		}
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ isStarred: !this.state.isStarred })
	}
	render() {
		return (
			<div onClick={(e) => this.handleChange(e)} className="col-xs-2">
				{this.state.isStarred ? 
					<i className="star fa fa-star"></i> : <i className="star fa fa-star-o"></i>
				}
			</div>
		)
	}
}

export default Star;