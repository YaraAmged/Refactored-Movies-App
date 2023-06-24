import moviesActionTypes from "./movies.types.js";
import { getMovies } from "../../api/movies.js";

export const fetchMoviesStart = () => ({
  type: moviesActionTypes.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: moviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (errorMessage) => ({
  type: moviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: errorMessage,
});

export const fetchMovies =
  (page = 1) =>
  async (dispatch) => {
    dispatch(fetchMoviesStart());

    try {
      const data = await getMovies(page);
      dispatch(fetchMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
      console.log(error);
    }
  };
export const fetchNextPage = () => async (dispatch, getState) => {
  dispatch(fetchMovies(getState().movies.page + 1));
};
export const fetchPreviousPage = () => async (dispatch, getState) => {
  dispatch(fetchMovies(getState().movies.page - 1));
};
