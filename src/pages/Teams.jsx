import React, { Component } from "react";
import { connect } from "react-redux";
import nflTeamsList from "json/dropdown.json";
import "./Teams.scss";

class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			team1: "",
			team2: "",
		};
	}

	_handleChange = (event) => {
		this.setState({
			[event.target.name]: [event.target.value],
		});
	}

	_handleSubmit = (event) => {
		event.preventDefault();
		this.props.submit(this.state);
	}

	render() {
		return (


			<div className= "team-one-submit">
				<label name="team1"> Team 1 </label>
				<select onChange= {this.handleChange} name = "team1" >
					{nflTeamsList.map((teams) => {
						return (
							<option value= { teams.abr }>{ teams.name }</option>
						);
					})}
				</select>
				<div className="button-field-submit hidden">
					<button type="submit" onSubmit={this._handleSubmit}>Submit</button>
				</div>
			</div>
		);
	}
}


export default Teams;
