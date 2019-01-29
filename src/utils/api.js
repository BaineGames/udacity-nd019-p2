import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA.js";

export function loadData(){
    return Promise.all([_getQuestions(),_getUsers()])
    .then(([questionList, userList]) => ({
        questionList, userList
    }));
}