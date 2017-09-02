// import TEAMS from "json/nfl.json";
import NFLArrestAPI from "util/api";


export function retrieveTeams(name, error) {
	return (dispatch) => {
		dispatch({ type: "TEAMS_LOAD_START" });
		console.log(name.team1Title);
		const reqTeam1 = NFLArrestAPI.get("/team/topCrimes/" + name.team1).then((res) => {
			if (res) {
				return res;
			}
			else {
				throw error;
			}
		});
		const reqTeam2 = NFLArrestAPI.get("/team/topCrimes/" + name.team2).then((res) => {
			if (res) {
				return res;
			}
			else {
				throw error;
			}
		});
		Promise.all([reqTeam1, reqTeam2]).then((res => {
			if (res) {
				const [team1Res, team2Res] = res;
				dispatch({
					type: "TEAMS_LOAD_SUCCESS",
					team1: team1Res,
					team2: team2Res,
				});
			}
			else {
				dispatch({
					type: "TEAMS_LOAD_FAILURE",
					error: "We can not load those teams",
				});
			}
		})
			.catch((err) => {
				dispatch({
					type:"TEAM_LOAD_FAILURE",
					error:"Please Refresh. Something has gone terribly wrong",
				});
			})
		);
	};
}
