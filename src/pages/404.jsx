import React, { Component } from "react";
import "./404.scss";

class FourOhFour extends Component {
	render() {
		return (
			<div className = "fourOhFourError">
				<h1 className = "fourOhFourh1" >Looks like you fumbled!</h1>
				{/* <img background: url("https://i.imgur.com/BCNEKvL.gif") className="errorGif" /> */}
			</div>
		);
	}
}

export default FourOhFour;
