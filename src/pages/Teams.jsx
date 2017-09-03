import React, { Component } from "react";
import "./Teams.scss";
import { connect } from "react-redux";
import { Form, Dropdown, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { retrieveTeams } from "actions/teams.js";
import Loader from "components/Loader";
import TeamsResult from "components/teamsResult";
import  nflTeamsList  from "json/dropdown.json";


class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			team1: null,
			team2: null,
			team1Title: null,
			team2Title: null,
		};
	}

	_handleChange = (ev, data) => {
		console.log(data.value);
		this.setState({ [data.name]: [data.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(this.state);
		this.props.retrieveTeams(this.state);
	}

	render() {
		const { activeTeam1, activeTeam2, isLOADING, error } = this.props;
		const options = nflTeamsList;

		let content;

		if (isLOADING) {
			console.log("loader");
			content = <Loader/>;
		}
		else {
			console.log(activeTeam2);
			content = <div className="Search-Results"><p> {activeTeam2[0].Category} </p></div>;
		}
		return (
			<div className="Teams-Search">
				<Grid>
					<div className= "team-submit-form">
						<Form onSubmit={this._handleSubmit}>
							<Grid.Column width={12}>
								<Form.Group>
									<Form.Select
										floating
										width ={6}
										onChange = {this._handleChange}
										placeholder=" Select Your Team"
										name="team1"
										openOnFocus fluid search selection options={ options }/>
								</Form.Group>
							</Grid.Column>
							<Grid.Column width={12}>
								<Form.Group>
									<Form.Select
										floating
										width ={6}
										onChange = {this._handleChange}
										placeholder=" Select Your Team"
										name="team2"
										openOnFocus fluid search selection options={ options }
										/>
								</Form.Group>
							</Grid.Column>
							<div className="submit-button">
								<Button fluid type="submit">Submit</Button>
							</div>
						</Form>
					</div>
				</Grid>
			<div className= "Search-Results">
			  {content}
			</div>
		</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		isLOADING: state.teams.isLOADING,
		activeTeam1: state.teams.activeteam1,
		activeTeam2: state.teams.activeteam2,
		error: state.teams.error,
	};
}

export default connect (mapStateToProps, { retrieveTeams }) (Teams);
