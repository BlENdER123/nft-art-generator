const defaultState = {
	projectState: [
        {
            name: "background", 
            active: true, 
            imgs: [],
            src: [],
            url: [],
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            z_index: 0,
            names: [],
            rarity: [],
            sizes: {
                width: [],
                height: [],
            },
            rarityLayer: "4"
        }
    ]
};

export const reducerEditor = (state = defaultState, action) => {
	switch (action.type) {

        case "updateAllData":
            return {...state, projectState: action.payload};
        case "updateOneLayer":
            return {...state, projectState: 
            [
                ...state.projectState.slice(0, action.payload.index),
                action.payload.updatedLayer,
                ...state.projectState.slice(action.payload.index + 1)
            ]
            };
		case "newLayer":
			return {...state, projectState: 
            [
				...state.projectState,
                action.payload,
                // ...state.projectState.slice(action.payload.index + 1)
			]
            };
		
		default:
			return state;
	}
};