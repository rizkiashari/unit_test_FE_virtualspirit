import { combineReducers } from "redux";
import post from "./post.reducer";

const index = combineReducers({
  post,
});

export default index;
