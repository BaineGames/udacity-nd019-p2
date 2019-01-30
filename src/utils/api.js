import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA.js";

export function loadData(){
    return Promise.all([_getQuestions(),_getUsers()])
    .then(([questionList, userList]) => ({
        questionList, userList
    }));
}

export function saveQuestion( question ) { 
    return _saveQuestion( question );
}

export function saveQuestionAnswer( answer ){
    return _saveQuestionAnswer( answer );
}