export const USER_GET_ALL = "USER_GET_ALL";

export function getAllUsers(userList){
    return {type: USER_GET_ALL, userList};
}

export const ANSWERED_QUESTION = "ANSWER_QUESTION";

export function userAnsweredQuestion(authentication, questionId, answer){
    return {type: ANSWERED_QUESTION, authentication, questionId, answer};
}

export const USER_ADD_QUESTION = "USER_ADD_QUESTION";

export function userAddedQuestion(question){
    return {type: USER_ADD_QUESTION, question};
}