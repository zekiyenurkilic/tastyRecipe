import {
  SET_FAVORITE,
  SET_PRODUCT_DETAIL,
  SET_PRODUCT_DETAIL_FAV,
} from './types';

export const setFavorite = (data) => (dispatch) => {
  let newData = data;
  newData.isFav = !data.isFav;
  dispatch({
    type: SET_FAVORITE,
    payload: newData,
  });
};
export const setProductDetail = (data) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_DETAIL,
    payload: data,
  });
};
export const setFavoriteDetail = (data) => (dispatch) => {
  let newData = data;
  newData.isFav = !data.isFav;
  dispatch({
    type: SET_PRODUCT_DETAIL_FAV,
    payload: newData,
  });
};
