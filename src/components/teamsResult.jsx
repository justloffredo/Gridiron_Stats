import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Doughnut } from "react-chartjs-2";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeTeam1, activeTeam2 } = this.props;

		const teamData1String = activeTeam1.map((team) => {
			return (team.arrest_count);
		});

		const teamData1 = teamData1String.map(Number);

		const teamLabel1 = activeTeam1.map((team) => {
			return team.Category.toString();
		});

		const data = {
			labels: [ teamLabel1 ],
    datasets: [{
        data: teamData1
    }],
		};
		console.log(teamData1);
		return (
			<div className="Search-Results">
				<Grid columns = {2} padded>
					<Grid.Column>
						<Doughnut
							data = { data }
							width={200}
							height={100}
							options={{
		 					maintainAspectRatio: false
						}}
 						/>
					</Grid.Column>
					<Grid.Column>
						<p>Hello</p>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		activeTeam1: state.teams.activeteam1,
		activeTeam2: state.teams.activeteam2,
};
}

export default connect(mapStateToProps) (TeamsResult);
