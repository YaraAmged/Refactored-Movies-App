import React from "react";
import { useSelector } from "react-redux";

const Stats = () => {
  const { topRated, page } = useSelector(({ movies }) => ({
    topRated: movies.topRated,
    page: movies.page,
  }));

  return (
    <div>
      <h1>Movies</h1>
      <div className="border border-dark p-3 mt-5 mb-5">
        <h2>Stats</h2>
        <p>Current page: {page}</p>
        <p>Number of Movies: 20</p>
        <p>Top rated movie: {topRated.title}</p>
        <p>Rating: {topRated.vote_average}</p>
      </div>
    </div>
  );
};

export default Stats;
