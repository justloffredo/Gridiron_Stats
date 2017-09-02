const INITIAL_STATE = {
	activeteam1: {},
	activeteam2:{},
	submitTeamSuccess: false,
	submitTeamFailure: false,
	isLOADING: false,
	error: null,
};

function teamsReduced(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "TEAM_LOAD_START":
		return {
			...state,
			isLOADING: true,
			activeteam1: null,
			activeteam2: null,
			submitTeamSuccess: false,
			submitTeamFailure: false,
			error: null,
		};

	case "TEAM_LOAD_SUCCESS":
		return {
			...state,
			isLOADING: false,
			activeteam1: action.team1,
			activeteam2: action.team2,
			submitTeamSuccess: true,
			submitTeamFailure: false,
			error: null,
		};

	case "TEAM_LOAD_FAILURE":
		return {
			...state,
			isLOADING: false,
			activeteam1: null,
			activeteam2: null,
			submitTeamSuccess: false,
			submitTeamFailure: true,
			error: action.error,
		};
	default:
		return state;
	}
}

export default teamsReduced;
