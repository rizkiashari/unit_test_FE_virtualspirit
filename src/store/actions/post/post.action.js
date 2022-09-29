import { homeActionType } from "../../actionTypes/home.actionType";

export const getPost = (index) => ({
  type: homeActionType.FETCH_REQUEST,
  index,
});

export const deletePost = (id) => ({
  type: homeActionType.DELETE_POST_REQUEST,
  id,
});

export const createPost = (body) => ({
  type: homeActionType.CREATE_POST_REQUEST,
  body,
});

export const updatePost = (body) => ({
  type: homeActionType.UPDATE_POST_REQUEST,
  body,
});
