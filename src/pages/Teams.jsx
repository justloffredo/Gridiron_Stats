import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveTeam } from "actions/teams.js";
import nflTeamsList from "json/dropdown.json";
import "./Teams.scss";

class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};
	}

	_handleChange = (ev) => {
		console.log(ev.target.value);
		this.setState({ name: ev.target.value });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(this.state);
		this.props.retrieveTeam(this.state.name);
	}

	render() {
		const { team1 } = this.state;
		return (
			<div className= "team-one-submit">
				<form onSubmit={this._handleSubmit}>
					<label name="team1"> Team 1 </label>
					<select onChange={this._handleChange} name="name" placeholder=" Select Your Team" >
						{nflTeamsList.map((teams) => {
							return (
								<option  value= { teams.name }>{ teams.name }</option>

							);
						})}
					</select>
					{/* <select name = "team2" placeholder=" Select Your Team" >
						{nflTeamsList.map((teams) => {
							return (
								<option onChange= {this._handleChange} value= { teams.name }>{ teams.name }</option>

						);
					})}
				</select> */}
					<div className="submit-button">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		currentTeam: state.teams.team,
		isLOADING: state.teams.isLOADING,
		submitTeamSuccess: state.teams.submitTeamSuccess,
		submitTeamFailure: state.teams.submitTeamFailure,
		error: state.teams.error,
	};
}

export default connect (mapStateToProps, { retrieveTeam })(Teams);
