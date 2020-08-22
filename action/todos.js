import {
  GET_ALL_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS,
  FILTER_TODOS,
} from './types';

export const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_TODOS,
  });
};

export const addTodos = (data) => async (dispatch) => {
  dispatch({
    type: ADD_TODOS,
    payload: data,
  });
};

export const deleteTodos = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODOS,
    payload: id,
  });
};
export const updateTodos = (data) => async (dispatch) => {
  dispatch({
    type: UPDATE_TODOS,
    payload: data,
  });
};

export const filterTodos = (searchText) => async (dispatch) => {
  dispatch({
    type: FILTER_TODOS,
    payload: searchText,
  });
};
