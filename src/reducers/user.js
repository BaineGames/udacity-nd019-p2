import { USER_GET_ALL } from "../actions/user";
import { FORMAT_QUESTION, ANSWER_UPDATE } from "../actions/question";

export default function users (state = {}, action){
    switch(action.type){
        case USER_GET_ALL : 
            return { ...state, ...action.userList }

        case FORMAT_QUESTION :
            return {
                ...state, [ action.formattedQuestion.author ] : {
                    ...state[ action.formattedQuestion.author ],
                    questions: [ ...state[action.formattedQuestion.author].questions.concat([action.formattedQuestion.id]) ]
                }
            }

        case ANSWER_UPDATE :
            console.log("USERS", action);
            const { authedUser, qid, answer } = action.answer;
            return { ...state, [ authedUser ] : {
                        ...state[ authedUser ],
                        answers : { ...state[authedUser].answers, [qid] : answer }
                    }
            }
        default : return state;
    }
}