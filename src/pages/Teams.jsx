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

	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.value].toString(),
		});
		console.log(this.state);
	}

	_handleSubmit = (event) => {
		event.preventDefault();
		this.props.retrieveTeam(this.state);
	}

	render() {
		const { name } = this.state;
		return (
			<div className= "team-one-submit">
				<form>
				<label name="team1"> Team 1 </label>
				<select name = "name" placeholder=" Select Your Team" >
					{nflTeamsList.map((teams) => {
						return (
							<option onChange= {this._handleChange} value= { teams.name }>{ teams.name }</option>

						);
					})}
				</select>
				<div className="button-field">
					<button type="submit" onSubmit={this._handleSubmit}>Submit</button>
				</div>
			</form>
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		activeTeam: state.teams.activeTeam,
		isLOADING: state.teams.isLOADING,
		submitTeamSuccess: state.teams.submitTeamSuccess,
		submitTeamFailure: state.teams.submitTeamFailure,
		error: state.teams.error,
	};
}

export default connect (mapStateToProps, { retrieveTeam })(Teams);
