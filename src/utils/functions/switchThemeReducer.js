const switchThemeReducer = (state,action) => {
    switch (action.type) {
        case "SWITCH_THEME": {
            return {
                ...state,
                theme: action.payload,
            };
        }
        default:{
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export default switchThemeReducer;