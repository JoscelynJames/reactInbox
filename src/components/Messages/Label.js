import React from 'react';

class Label extends React.Component {

	attachAllLabels = () => {
		return this.props.labels.map((label, i) => {
			return <span className="label label-warning" key={i}>{label}</span>;
		});
	};

	render() {
		return (
			<div className="col-xs-11" >
				{this.attachAllLabels()}
				<a>
					{this.props.subject}
				</a>
			</div>
		); // end of return 
	}; // End of render

}; // End of Label Component

export default Label;