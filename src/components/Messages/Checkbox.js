import React from 'react';


class Checkbox extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				isChecked: this.props.isChecked,
				checkAll: this.props.checkStatus
			};
		};
		
		handleChange() {
			this.setState({ isChecked: !this.state.isChecked});
		};

		selectCheckedEmails() {
			if (this.state.checkAll) {
				return this.setState({ isChecked: true })
			} else if (this.state.isChecked) {
				return 'selected'
			};
		};

	render() {
		return (
			<div className="col-xs-2">
				<input type="checkbox" checked={this.state.isChecked} onChange={(e) => this.handleChange()} />
			</div>			
		);
	};

};

export default Checkbox;