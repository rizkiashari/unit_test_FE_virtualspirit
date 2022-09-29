import { fork, all } from "redux-saga/effects";
import post from "./post/watcher";

export default function* rootSaga() {
  yield all([fork(post)]);
}
