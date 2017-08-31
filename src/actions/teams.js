import TEAMS from "json/nfl.json";


export function retrieveTeam(name) {
	return (dispatch) => {
		const teams = TEAMS;
		const submittedteam1 = teams.find((team) => team.abr === name.team1);
		const submittedteam2 = teams.find((team) => team.abr === name.team2);
		console.log(teams);
		console.log("retrieveTeam(name) action/function", submittedteam1);
		console.log("retrieveTeam(name) action/function", submittedteam2);
		dispatch({
			type: "TEAM_LOAD_START",
		});
		if (submittedteam1 && submittedteam2) {
			return dispatch({
				type: "TEAM_LOAD_SUCCESS",
				submittedteam1,
				submittedteam2,
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
