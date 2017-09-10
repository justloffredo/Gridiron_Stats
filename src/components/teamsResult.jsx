import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Divider } from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeTeam1, activeTeam2, activeTeam1Name, activeTeam2Name, activeTeam1Image, activeTeam2Image, activeTeam1Timeline, activeTeam2Timeline } = this.props;

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
		console.log(insertCatTeam1);
		console.log(insertCatTeam2);

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

		// const teamLabel2 = activeTeam2.map((team) => {
		// 	return team.Category.toString();
		// });

		const data1 = {
			labels: graphLabels,
			datasets: [
				{
					label: activeTeam1Name,
					data: teamData1,
					backgroundColor: "#f19670",

				},
				{
					label: activeTeam2Name,
					data: teamData2,
					backgroundColor: "#51574a"

				}

]};


		// const data2 = {
		// 	datasets: [{
		// 		data: teamData2,
		// 		backgroundColor: ["#51574a", "#f19670","#a34974","#7c9fb0","#afc849","#c94a53","#f4ccdc","#297373","#e40066","#fe9000","#3960e0","#eac435","#e32f3b","#9163b6","#f4b243","#74c493", "#d6cbf4", "#4a5611"],
		// 	}],
		// 	labels: teamLabel2,
		// };
		// console.log(activeTeam1Timeline);
		// console.log(activeTeam2Timeline);
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
					<Grid.Row >
						<Grid.Column className="team1Column">
							<Bar
								data = { data1 }
								width={1000}
								height={500}
								options={{
									legend: {
										position: 'top',
									},
									responsive: true,
		        		maintainAspectRatio: false,
								}}
							/>
						</Grid.Column>
						{/* <Divider vertical>Or</Divider>
						<Grid.Column>
							<Radar
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
						</Grid.Column> */}
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
		activeTeam1TimeLine: state.teams.activeteam1TimeLine,
		activeTeam2TimeLine: state.teams.activeteam2TimeLine,
	};
}

export default connect(mapStateToProps) (TeamsResult);
