import React, { Component } from "react";
// import { connect } from "redux-thunk";
import "./Home.scss";

class Home extends Component {
	render() {
		return (

			<div className="container">
				<section className="background">
					<div className="content-wrapper">
						<p className="content-title">gridiron stats</p>
						<p className="content-subtitle">See where your team ranks!</p>
					</div>
				</section>
				<section className="background">
					<div className="content-wrapper">
						<p className="content-title">do a comparison</p>
						<p className="content-subtitle">Check where your team ranks against the competition</p>
					</div>
				</section>
				<section className="background">
					<div className="content-wrapper">
						<p className="content-title">donate</p>
						<p className="content-subtitle">support charities affected by injustice worldwide</p>
					</div>
				</section>
			</div>


		);
	}
}


export default Home;
