import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { retrieveTeams } from "actions/teams.js";
import Loader from "components/Loader";
import TeamsResult from "components/teamsResult";
import  nflTeamsList  from "json/dropdown.json";
import "./searchTeams.scss";

class searchTeams extends Component {
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
		const options = nflTeamsList;
		let content;

		if (this.props.isLOADING) {
			content = <Loader/>;
		}
		else {
			content = <teamResult/>;
		}
		return (
			<div className="Search-Teams">
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
							</Grid.Column> */}
							<Grid.Column width={12}> */}
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
			</div> >
		<div className= "Search-Results">
			{ content }
		</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {
		isLOADING: state.teams.isLOADING,
		error: state.teams.error,
	};
}

export default connect (mapStateToProps, { retrieveTeams })(searchTeams);
