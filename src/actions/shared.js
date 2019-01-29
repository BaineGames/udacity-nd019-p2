import { loadData } from "../utils/api";
import { getAllUsers } from "./user";
import { getQuestions } from "./question";
import { loginUser } from "./authentication";

const init_login = "sarahedo";

export function handleLoadData(){
    return (dispatch) => {
        return loadData()
        .then(({questionList, userList}) => {
            dispatch(getQuestions(questionList));
            dispatch(getAllUsers(userList));
            dispatch(loginUser(init_login));
        });
    }
}