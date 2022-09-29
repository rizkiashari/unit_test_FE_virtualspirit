import { call, put, takeEvery } from "redux-saga/effects";
import { homeActionType } from "../../actionTypes/home.actionType";

function* getPostFetch(action) {
  try {
    const result = yield call(
      async (index) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${index}`).then(
          (res) => res.json()
        ),
      action.index
    );
    yield put({ type: homeActionType.FETCH_SUCCESS, data: result });
  } catch (error) {
    yield put({ type: homeActionType.FETCH_FAILED });
  }
}

function* deletePostFetch(action) {
  try {
    yield call(
      async (id) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "delete",
        }).then((res) => res.json()),
      action.id
    );
    yield put({ type: homeActionType.DELETE_POST_SUCCESS, id: action.id });
  } catch (error) {
    yield put({ type: homeActionType.DELETE_POST_FAILED });
  }
}

function* createPost(action) {
  try {
    yield call(
      async (body) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/`, {
          method: "post",
          body: JSON.stringify(body),
        }).then((res) => res.json()),
      action.body
    );
    yield put({ type: homeActionType.CREATE_POST_SUCCESS, body: action.body });
  } catch (error) {
    yield put({ type: homeActionType.CREATE_POST_FAILED });
  }
}

function* updatePost(action) {
  try {
    yield call(
      async (body) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, {
          method: "PATCH",
          body: JSON.stringify(body),
        }).then((res) => res.json()),
      action.body
    );
    yield put({ type: homeActionType.UPDATE_POST_SUCCESS, body: action.body });
  } catch (error) {
    yield put({ type: homeActionType.UPDATE_POST_FAILED });
  }
}

function* post() {
  yield takeEvery(homeActionType.FETCH_REQUEST, getPostFetch);
  yield takeEvery(homeActionType.DELETE_POST_REQUEST, deletePostFetch);
  yield takeEvery(homeActionType.CREATE_POST_REQUEST, createPost);
  yield takeEvery(homeActionType.UPDATE_POST_REQUEST, updatePost);
}

export default post;
