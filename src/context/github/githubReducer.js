import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS,
    SET_ALERT,
} from "../types";

export default (state,action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
            break;
    
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
            break;
    
        default: return state;
            break;
    }
}