const MovieCard = ({ movie, setOpenMovie }) => {
  return (
    <div className="col-12 col-sm-3">
      <div className="card text-center" id={movie.index}>
        <img
          onClick={() => setOpenMovie(movie)}
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`}
          className="card-img-top"
          alt=""
        />
        <p>{movie.title}</p>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
