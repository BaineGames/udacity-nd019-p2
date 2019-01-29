import { USER_GET_ALL } from "../actions/user";

export default function users (state = {}, action){
    switch(action.type){
        case USER_GET_ALL : 
            return {
                ...state,
                ...action.users
            }
        default : 
            return state;
    }
}