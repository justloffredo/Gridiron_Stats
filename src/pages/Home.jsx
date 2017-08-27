import React, { Component } from "react";
import { connect } from "redux-thunk";
import "./Home.scss";

class Home extends Component {
	render() {
		return (
			<div className = "home">
				<h1>This is the Home page</h1>
			</div>
		);
	}
}

export default Home;
