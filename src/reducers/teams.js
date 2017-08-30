const INITIAL_STATE = {
	team1: null,
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
			team1: null,
			submitTeamSuccess: false,
			submitTeamFailure: false,
			error: null,
		};

	case "TEAM_LOAD_SUCCESS":
		return {
			...state,
			isLOADING: false,
			team1: action.team,
			submitTeamSuccess: true,
			submitTeamFailure: false,
			error: null,
		};

	case "TEAM_LOAD_FAILURE":
		return {
			...state,
			isLOADING: false,
			activeTeam: null,
			submitTeamSuccess: false,
			submitTeamFailure: true,
			error: action.error,
		};
	default:
		return state;
	}
}

export default teamsReduced;
