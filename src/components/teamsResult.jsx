import react, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeteam1, activeteam2 } = this.props;
		return (
			<div className="Team-Results">Placeholder</div>

		);
	}
}

function mapStateToProps(state, props) {
	return {
		activeteam1: state.teams.activeteam1,
		activeteam2: state.teams.activeteam2,
	};
}

export default connect(mapStateToProps, (TeamsResult));
