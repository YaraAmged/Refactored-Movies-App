import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import Stats from "./components/Stats/Stats";
import {
  fetchMovies,
  fetchNextPage,
  fetchPreviousPage,
} from "./store/movies/movies.actions";
function App() {
  const dispatch = useDispatch();
  const { isFetching, errorMessage, page } = useSelector(({ movies }) => ({
    isFetching: movies.isFetching,
    errorMessage: movies.errorMessage,
    page: movies.page,
  }));
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (errorMessage) return <p>{errorMessage}</p>;

  if (isFetching) {
    return (
      <div className="d-flex justify-content-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Stats />
      <MoviesContainer />
      <div className="d-flex justify-content-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => dispatch(fetchPreviousPage())}
        >
          Previous
        </button>
        <button onClick={() => dispatch(fetchNextPage())}>Next</button>
      </div>
    </>
  );
}

export default App;
