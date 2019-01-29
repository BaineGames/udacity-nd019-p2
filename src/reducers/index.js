import { combineReducers } from "redux";
import authentication from "./authentication";
import questions from "./question";
import users from "./user";

export default combineReducers({authentication,questions,users});