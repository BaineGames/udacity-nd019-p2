import { saveQuestion } from "../utils/api";
import { saveQuestionAnswer } from "../utils/api";

export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQuestions(questionList){
    return {type: GET_QUESTIONS, questionList};
}

export const ADD_QUESTION = "ADD_QUESTION";

export function addQuestion(question){
    return (dispatch) => {
        return saveQuestion(question)
      .then((question) =>{
        dispatch(formatQuestion(question))
      })
    }
}

export const FORMAT_QUESTION = "FORMAT_QUESTION";

export function formatQuestion(formattedQuestion){
    return {
      type: FORMAT_QUESTION,
      formattedQuestion
    }
}

export const ANSWER_UPDATE = "ANSWER_UPDATE";

export function answerUpdate(answer){
    return {
        type: ANSWER_UPDATE,
        answer
    }
}

export function questionAnswered(answer) {
    return (dispatch) => {
        return saveQuestionAnswer(answer)
        .then(() => {
            dispatch(answerUpdate(answer))
        })
    }
}