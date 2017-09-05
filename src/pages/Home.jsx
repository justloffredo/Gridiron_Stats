import React, { Component } from "react";
import "./Home.scss";
import { Parallax } from "react-parallax";

class Home extends Component {
	render() {
		return (

			<div className="App">
				{/* <header> NEED TO CHANGE </header> */}

				<Parallax
					strength={300}
					bgImage="http://i.imgur.com/avGzEKP.jpg"
					bgWidth="100%"
				>
					<h2>Gridiron Stats</h2>

				</Parallax>
				<Parallax
					strength={300}
					bgImage="http://i.imgur.com/wUPkxQI.jpg"
					bgWidth="100%"
				>
					<h2>Compare the Teams</h2>
				</Parallax>
				<Parallax
					strength={300}
					bgImage="http://i.imgur.com/z0ZJhbN.jpg"
					bgWidth="100%"
				>
					<h2>Donate</h2>
				</Parallax>
			</div>


		);
	}
}


export default Home;
