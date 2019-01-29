import { loadData } from "../utils/api";
import { getAllUsers } from "./user";
import { getQuestions } from "./question";

export function handleLoadData(){
    return (dispatch) => {
        return loadData()
        .then(({questionList, userList}) => {
            dispatch(getQuestions(questionList));
            dispatch(getAllUsers(userList));
        });
    }
}