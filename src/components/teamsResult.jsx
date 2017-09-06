import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Doughnut } from "react-chartjs-2";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeTeam1, activeTeam2, activeTeam1Name, activeTeam2Name, activeTeam1Image, activeTeam2Image } = this.props;

		// Map over data to return an array of numbers as strings
		const teamData1String = activeTeam1.map((team) => {
			return (team.arrest_count);
		});

		// Map over previous array created and return a new array as numbers
		const teamData1 = teamData1String.map(Number);

		const teamLabel1 = activeTeam1.map((team) => {
			return team.Category;
		});

		const teamData2String = activeTeam2.map((team) => {
			return (team.arrest_count);
		});

		const teamData2 = teamData2String.map(Number);

		const teamLabel2 = activeTeam2.map((team) => {
			return team.Category.toString();
		});

		const data1 = {
			datasets: [{
				data: teamData1,
				backgroundColor: ["#51574a", "#f19670","#a34974","#7c9fb0","#afc849","#c94a53","#f4ccdc","#297373","#e40066","#fe9000","#3960e0","#eac435","#e32f3b","#9163b6","#f4b243","#74c493", "#d6cbf4", "#4a5611"],
			}],
			labels: teamLabel1,

		};

		const data2 = {
			datasets: [{
				data: teamData2,
				backgroundColor: ["#51574a", "#f19670","#a34974","#7c9fb0","#afc849","#c94a53","#f4ccdc","#297373","#e40066","#fe9000","#3960e0","#eac435","#e32f3b","#9163b6","#f4b243","#74c493", "#d6cbf4", "#4a5611"],
			}],
			labels: teamLabel2,
		};
		console.log(teamLabel1);
		return (
			<div className="Search-Results">
				<Grid divided= 'vertically'>
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
					<Grid.Row columns = {2} padded>
						<Grid.Column className="team1Column">
							<Doughnut
								data = { data1 }
								width={700}
								height={350}
								options={{
									legend: {
										position: 'left',
									},
									responsive: true,
		        		maintainAspectRatio: false,
								}}
							/>
						</Grid.Column>
						<Grid.Column>
							<Doughnut
								data = { data2 }
								width={700}
								height={350}
								options={{
									legend: {
										position: 'left',
									},
									responsive: true,
				        	maintainAspectRatio: false,
								}}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
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
	};
}

export default connect(mapStateToProps) (TeamsResult);
