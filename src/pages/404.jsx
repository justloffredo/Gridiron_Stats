import React, { Component } from "react";
import "./404.scss";

class FourOhFour extends Component {
	render() {
		return (
			<div className = "404">
				<h1>Looks like you fumbled!</h1>
				<img src="https://media.giphy.com/media/omCaTzY5JT344/giphy.gif" className="errorGif" />
			</div>
		);
	}
}

export default FourOhFour;
