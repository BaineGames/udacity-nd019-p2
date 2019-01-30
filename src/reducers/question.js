import { GET_QUESTIONS, ADD_QUESTION, FORMAT_QUESTION, ANSWER_UPDATE } from "../actions/question";

export default function questions (state = {}, action){
    switch(action.type){
        case GET_QUESTIONS : 
            return {
                ...state,
                ...action.questionList
            }
        case ADD_QUESTION :
        return {
            ...state,
            [action.question.id] : action.question
        }
        case FORMAT_QUESTION :
        return {
            ...state,
            [action.formattedQuestion.id]: action.formattedQuestion
        }
        case ANSWER_UPDATE :
        const { authedUser, qid, answer } = action.answer;
        console.log(answer);
        return {
            ...state,
            [qid]: {
              ...state[qid],
              [answer]: {
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authedUser])
              }
            }
        }
        default : 
            return state;
    }
}