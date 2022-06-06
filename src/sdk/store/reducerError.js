const defaultState = {
	errorModal: {
		hidden: true,
		message: ""
	}
};

export const reducerError = (state = defaultState, action) => {
	switch (action.type) {
		case "openError":
			return {...state, errorModal: {
				hidden: false,
				message: action.payload
			}};
		case "closeError":
			return {...state, errorModal: {
				hidden: true,
				message: ""
			}};
		default:
			return state;
	}
};