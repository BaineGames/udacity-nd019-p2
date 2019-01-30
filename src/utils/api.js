import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA.js";

export function loadData(){
    return Promise.all([_getQuestions(),_getUsers()])
    .then(([questionList, userList]) => ({
        questionList, userList
    }));
}
//exposing these functions from the data.js file is necessary to prevent app from talking to file directly
export function saveQuestion( question ) { 
    return _saveQuestion( question );
}

export function saveQuestionAnswer( answer ){
    return _saveQuestionAnswer( answer );
}