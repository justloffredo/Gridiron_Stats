import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Divider } from "semantic-ui-react";
import { Bar, Radar, Pie, Polar, Line, Chart } from "react-chartjs-2";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeTeam1, activeTeam2, activeTeam1Name, activeTeam2Name, activeTeam1Image, activeTeam2Image, activeTeam1TimeLine, activeTeam2TimeLine } = this.props;

		const graphLabels = ["DUI", "Assault","Disorderly conduct, sex", "Domestic violence", "Drugs", "Disorderly conduct", "Child abuse", "DUI, drugs", "Gun", "Obstruction", "Trespassing", "Other"];

		const insertCatTeam1 = graphLabels.map((label) => {
			console.log(graphLabels);
			let foundCategory = activeTeam1.find(item => item.Category === label);
			if (!foundCategory) {
				return {
					Category: label,
					arrest_count: "0",
				};
			}
			else {
				return foundCategory;
			}
		});

		const insertCatTeam2 = graphLabels.map((label) => {
			let foundCategory = activeTeam2.find(item => item.Category === label);
			if (!foundCategory) {
				return {
					Category: label,
					arrest_count: "0",
				};
			}
			else {
				return foundCategory;
			}
		});

		console.log(activeTeam1TimeLine);

		// Map over data to return an array of numbers as strings
		const teamData1String = insertCatTeam1.map((team) => {
			return (team.arrest_count);
		});

		const teamData2String = insertCatTeam2.map((team) => {
			return (team.arrest_count);
		});

		// Map over previous array created and return a new array as numbers
		const teamData1 = teamData1String.map(Number);
		const teamData2 = teamData2String.map(Number);

		const dataBothTeams = {
			labels: graphLabels,
			datasets: [
				{
					label: activeTeam1Name,
					data: teamData1,
					backgroundColor: "#001b59",
					borderWidth: 5
				},
				{
					label: activeTeam2Name,
					data: teamData2,
					backgroundColor: "#fcfdff",
					borderWidth: 5
				}
] };



		return (
			<Grid stackable divided= 'vertically'>
				<Grid.Row columns = {2} padded>
					<Grid.Column>
						<img className="ActiveTeam1Image"src={activeTeam1Image}/>
						<h1 className="ActiveTeam1Header">{activeTeam1Name}</h1>
					</Grid.Column>
					<Grid.Column>
						<img className="ActiveTeam2Image"src={activeTeam2Image}/>
						<h1 className="ActiveTeam2Header">{activeTeam2Name}</h1>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row >
					<Grid.Column className="team1Column">
						<Bar
							data = { dataBothTeams }
							width={700}
							height={450}
							options={{
								legend: {
									position: 'top',
									labels: {
										fontSize: 20,
									}
								},
								scales: {
											 yAxes: [{
													 ticks: {
															 fontSize: 20,
															 min: 0,
                                    beginAtZero: true,
                                    stepSize: 1
													 }
											 }]
									 },
									 responsive: true,
		        			maintainAspectRatio: true,
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);
	}
}

function mapStateToProps(state, props) {
	return {
		activeTeam1: state.teams.activeteam1,
		activeTeam2: state.teams.activeteam2,
		activeTeam1Name: state.teams.activeteam1Name,
		activeTeam2Name: state.teams.activeteam2Name,
		activeTeam1Image: state.teams.activeteam1ImageSource,
		activeTeam2Image: state.teams.activeteam2ImageSource,
		activeTeam1TimeLine: state.teams.activeteam1Timeline,
		activeTeam2TimeLine: state.teams.activeteam2Timeline,
	};
}

export default connect(mapStateToProps) (TeamsResult);
