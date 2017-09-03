const INITIAL_STATE = {
	activeteam1: null,
	activeteam2: null,
	submitTeamSuccess: false,
	submitTeamFailure: false,
	isLOADING: false,
	error: null,
};

function teamsReduced(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "TEAMS_LOAD_START":
		return {
			...state,
			isLOADING: true,
			activeteam1: null,
			activeteam2: null,
			submitTeamSuccess: false,
			error: null,
		};

	case "TEAMS_LOAD_SUCCESS":
		return {
			...state,
			isLOADING: false,
			activeteam1: action.team1,
			activeteam2: action.team2,
			submitTeamSuccess: true,
			error: null,
		};

	case "TEAMS_LOAD_FAILURE":
		return {
			...state,
			isLOADING: false,
			activeteam1: null,
			activeteam2: null,
			submitTeamSuccess: false,
			error: action.error,
		};
	default:
		return state;
	}
}

export default teamsReduced;
