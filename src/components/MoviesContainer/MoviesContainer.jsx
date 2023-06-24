import { useState } from "react";
import { useSelector } from "react-redux";
import MovieDialog from "../MovieDialog/MovieDialog";
import MovieCard from "./MovieCard/MovieCard";

const MoviesContainer = () => {
  const movies = useSelector(({ movies }) => movies.movies);
  const [openMovie, setOpenMovie] = useState();

  return (
    <div className="row g-5">
      {openMovie && (
        <MovieDialog
          movie={openMovie}
          handleClose={() => setOpenMovie(undefined)}
        />
      )}

      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} setOpenMovie={setOpenMovie} />
      ))}
    </div>
  );
};

export default MoviesContainer;
