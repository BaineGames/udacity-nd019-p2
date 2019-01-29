import logger from "./logger";
import thunk from "redux-thunk";
import { applyMiddleWare } from "redux";

export default applyMiddleWare(thunk,logger);