import { LOG_USER_IN } from "../actions/authentication";

export default function authentication (state = null, action){
    switch(action.type){
        case LOG_USER_IN : return action.userId;
        default : return state;
    }
}