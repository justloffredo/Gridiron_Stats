import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { retrieveTeam } from "actions/teams.js";
import  nflTeamsList  from "json/dropdown.json";
import "./Teams.scss";

class Teams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			team1: null,
			// team2: null,
		};
	}

	_handleChange = (ev, data) => {
		console.log(data.value);
		this.setState({ [data.name]: [data.value].toString() });
	}

	_handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(this.state);
		this.props.retrieveTeam(this.state);
	}

	render() {
		const options = nflTeamsList;
		return (
			<Grid>
			<div className= "team-submit-form">
				<Form onSubmit={this._handleSubmit}>
					{/* <Grid.Column width={12}> */}
					<Form.Group>
					<Form.Select
						floating
						width ={6}
						onChange = {this._handleChange}
						placeholder=" Select Your Team"
						name="team1"
						openOnFocus fluid search selection options={ options }/>
					</Form.Group>
				{/* </Grid.Column> */}
				{/* <Grid.Column width={12}> */}
					{/* <Form.Group>
					<Form.Select
						floating
						width ={6}
						onChange = {this._handleChange}
						placeholder=" Select Your Team"
						name="team2"
						openOnFocus fluid search selection options={ options }
					/>
				</Form.Group> */}
			{/* </Grid.Column> */}

					{/* <select onChange={this._handleChange} name="team1"
						{nflTeamsList.map((teams) => {
							return (
								<option  value= { teams.name }>{ teams.name }</option>

							);
						})}
					</select>
				</Form.Dropdown> */}
			{/* </Form.Field>
					<select onChange= {this._handleChange} name ="team2" placeholder=" Select Your Team" >
						{nflTeamsList.map((teams) => {
							return (
								<option value= { teams.name }>{ teams.name }</option>

						);
					})}
				</select>
			</Form.Field> */}

					<div className="submit-button">
						<Button fluid type="submit">Submit</Button>
					</div>
				</Form>
			</div>
		</Grid>
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
