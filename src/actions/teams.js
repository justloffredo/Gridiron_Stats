// import TEAMS from "json/nfl.json";
import NFLArrestAPI from "util/api";


export function retrieveTeam(name) {
		return (dispatch) => {
		dispatch({ type: "TEAM_LOAD_START" });

		NFLArrestAPI.get("/team/topCrimes/",{
			args: {
				name: name.team1,
			},
		}).then((res) => {
			console.log("retrieveTeam(name) action/function res: ", res);
			if (res) {
				return dispatch({
					type: "TEAM_LOAD_SUCCESS",
					team1: res,
				});
			}
			else {
				dispatch({
					type: "TEAM_LOAD_FAILURE",
					error: "Unable to get your team",
				});
			}
		});
	};
}
