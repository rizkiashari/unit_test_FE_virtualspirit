import { homeActionType as actionTypes } from "../actionTypes/home.actionType";

const initialState = {
  loading: false,
  data: [],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.data],
        loading: false,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_POST_SUCCESS:
      const remove = (data, id) => {
        let result = [];
        for (let index = 0; index < data.length; index++) {
          if (data[index].id !== id) {
            result.push(data[index]);
          }
        }
        return result;
      };
      return {
        ...state,
        data: remove(state.data, action.id),
        loading: false,
      };
    case actionTypes.DELETE_POST_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        data: [action.body].concat(state.data),
        loading: false,
      };
    case actionTypes.CREATE_POST_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_POST_SUCCESS:
      const update = (data, body) => {
        let result = [];
        for (let index = 0; index < data.length; index++) {
          if (data[index].id === body.id) {
            result.push(body);
          } else {
            result.push(data[index]);
          }
        }
        return result;
      };
      return {
        ...state,
        data: update(state.data, action.body),
        loading: false,
      };
    case actionTypes.UPDATE_POST_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default post;
