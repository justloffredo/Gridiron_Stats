import React, { Component } from "react";
import { connect } from "redux-thunk";
import "./Home.scss";
import { Parallax } from "react-parallax";

class Home extends Component {
	render() {
		return (

			<div className="App">


				<Parallax
					strength={300}
					bgImage="src/assets/images/background1.jpeg"
					bgWidth="100%"
				>
					<h2>Gridiron Stats</h2>

				</Parallax>
				<Parallax
					strength={300}
					bgImage="src/assets/images/background2.jpg"
					bgWidth="100%"
				>
					<h2>Compare the Teams</h2>
				</Parallax>
				<Parallax
					strength={300}
					bgImage="src/assets/images/background3.jpg"
					bgWidth="100%"
				>
					<h2>Donate</h2>
				</Parallax>
			</div>


		);
	}
}


export default Home;
