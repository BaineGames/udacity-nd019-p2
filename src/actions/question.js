export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQuestions(questionList){
    return {type: GET_QUESTIONS, questionList};
}

export const ADD_QUESTION = "ADD_QUESTION";

export function addQuestion(question){
    return {type: ADD_QUESTION, question};
}

export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function answerQuestion(question){
    return {type: ANSWER_QUESTION, question};
}