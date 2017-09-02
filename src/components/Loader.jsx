import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./Loader.scss";



class Loader extends Component {
	render() {
		return(
			<div className="container">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>

		);
	}
}



export default Loader;
