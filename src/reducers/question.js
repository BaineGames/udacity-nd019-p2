import { GET_QUESTIONS } from "../actions/question";

export default function questions (state = {}, action){
    switch(action.type){
        case GET_QUESTIONS : 
            return {
                ...state,
                ...action.questionList
            }
        default : 
            return state;
    }
}