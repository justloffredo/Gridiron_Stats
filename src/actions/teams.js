import TEAMS from "json/nfl.json";


export function retrieveTeam(teaminfo) {
	return (dispatch) => {
		const teams = TEAMS;
		const team = teams.find((team) => team.name === teaminfo.name);
		dispatch({
			type: "TEAM_LOAD_START",
		});
		console.log("retrieveTeam(teaminfo) action/function", team);
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
