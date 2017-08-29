import TEAMS from "json/nfl.json";


export function retrieveTeam(name) {
	return (dispatch) => {
		const team = TEAMS.find((team) => team.name === name);
		dispatch({ type: "TEAM_LOAD_START" });
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
