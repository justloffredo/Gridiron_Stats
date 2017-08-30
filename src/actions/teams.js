import TEAMS from "json/nfl.json";


export function retrieveTeam(name) {
	return (dispatch) => {
		const teams   = TEAMS;
		const team = teams.find((team) => team.name === name);
		console.log(teams);
		console.log("retrieveTeam(name) action/function", team);
		dispatch({
			type: "TEAM_LOAD_START",
		});
		if (team) {
			return dispatch({
				type: "TEAM_LOAD_SUCCESS",
				team,
			});
		}
		else {
			dispatch({
				type: "TEAM_LOAD_FAILURE",
				error: "Unable to get your team",
			});
		}
	};
}
