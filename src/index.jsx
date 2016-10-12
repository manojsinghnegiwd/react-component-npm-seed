import React from 'react';
import ReactDOM from 'react-dom';

class YourComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		}
	}
	render() {
		return(
			<p>
				{this.state.value}
			</p>
		);
	}
}

export default YourComponent;