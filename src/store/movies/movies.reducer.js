import moviesActionTypes from "./movies.types";

const initialState = {
  isFetching: true,
  movies: [],
  errorMessage: null,
  topRated: undefined,
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case moviesActionTypes.FETCH_MOVIES_SUCCESS:
      const movies = action.payload.results;
      let topRated = movies[0];
      for (let movie of movies) {
        if (topRated.vote_average < movie.vote_average) {
          topRated = movie;
        }
      }

      return {
        ...state,
        isFetching: false,
        movies,
        topRated,
        page: action.payload.page,
      };
    case moviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "server error",
      };
    default:
      return state;
  }
};

export default moviesReducer;
