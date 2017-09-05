const INITIAL_STATE = {
	activeteam1: null,
	activeteam2: null,
	activeteam1Name: null,
	activeteam2Name: null,
	activeteam1ImageSource: null,
	activeteam2ImageSource: null,
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
			activeteam1Name: null,
			activeteam2Name: null,
			activeteam1ImageSource: null,
			activeteam2ImageSource: null,
			submitTeamSuccess: false,
			error: null,
		};

	case "TEAMS_LOAD_SUCCESS":
		return {
			...state,
			isLOADING: false,
			activeteam1: action.team1,
			activeteam2: action.team2,
			activeteam1Name: action.team1Name,
			activeteam2Name: action.team2Name,
			activeteam1ImageSource: action.team1Image,
			activeteam2ImageSource: action.team2Image,
			submitTeamSuccess: true,
			error: null,
		};

	case "TEAMS_LOAD_FAILURE":
		return {
			...state,
			isLOADING: false,
			activeteam1: null,
			activeteam2: null,
			activeteam1Name: null,
			activeteam2Name: null,
			activeteam1ImageSource: null,
			activeteam2ImageSource: null,
			submitTeamSuccess: false,
			error: action.error,
		};
	default:
		return state;
	}
}

export default teamsReduced;
