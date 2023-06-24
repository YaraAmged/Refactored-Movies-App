import { Modal } from "react-bootstrap";

const MovieDialog = ({ movie, handleClose }) => {
  return (
    <Modal show={Boolean(movie)} onHide={handleClose} centered size="lg">
      <div className="modal-content">
        <i
          className="fa-solid fa-xmark close-btn"
          data-dismiss="movie-dialog"
          onClick={handleClose}
        ></i>
        <div className="row g-0">
          <div className="col-5">
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="col-7">
            <div className="p-3">
              <h5>{movie.title}</h5>
              <h6>
                IMDB Rating: {movie.votes_average}/10 ({movie.votesCount}
                votes)
              </h6>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDialog;
