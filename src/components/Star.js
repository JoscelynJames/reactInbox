import React from 'react';

class Star extends React.Component {
	render() {
		return (
			<div className="col-xs-2">
				{this.props.isStarred ? 
					<i className="star fa fa-star"></i> : <i className="star fa fa-star-o"></i>
				}
			</div>
		)
	}
}

export default Star;