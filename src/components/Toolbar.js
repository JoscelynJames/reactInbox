import React from 'react';

class Toolbar extends React.Component {
	constructor(props) {
		super(props)

		this.state = { 
			checkboxStatus: '',
		}
	}

	componentDidMount() {
		let count = this.getCountOfCheckedBoxes();
		
	};

	componentWillUpdate() {
		this.checkAllBoxes()
	};

	render() {
		return (
			<div className="row toolbar">
			<div className="col-md-12">
				<p className="pull-right">
					<span className="badge badge">2</span>
					unread messages
				</p>
		
				<a className="btn btn-danger">
					<i className="fa fa-plus"></i>
				</a>
		
				<button onClick={(e) => this.handleClick(e)} className="btn btn-default">
					<i className={"fa " + this.state.checkboxStatus }></i>
				</button>
		
				<button className="btn btn-default">Mark As Read</button>
		
				<button className="btn btn-default">Mark As Unread</button>
		
				<select className="form-control label-select">
					<option>Apply label</option>
					<option value="dev">dev</option>
					<option value="personal">personal</option>
					<option value="gschool">gschool</option>
				</select>
		
				<select className="form-control label-select">
					<option>Remove label</option>
					<option value="dev">dev</option>
					<option value="personal">personal</option>
					<option value="gschool">gschool</option>
				</select>
		
				<button className="btn btn-default">
					<i className="fa fa-trash-o"></i>
				</button>
			</div>
		</div>

		)
	};

	handleClick(e) {
		e.preventDefault();

		if (this.state.checkboxStatus === 'fa fa-square-o' ) {
			this.setState({ checkboxStatus: 'fa fa-check-square-o' })
			this.checkAllBoxes();
		} else {
			this.setState({ checkboxStatus: 'fa fa-square-o' })
		}
	};

	checkAllBoxes() {
		console.log('merp')
	}
	
	getCountOfCheckedBoxes() {	
		let count = 0;
		this.props.emails.filter((email) => {
			if (email.selected === true) {
				count++
			} 
		});
		return count;
	};

}

export default Toolbar