import axios from "axios";

export const getMovies = async (page) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: { api_key: "baa5ad8737855832863aad27513d65b6", page },
    }
  );
  return response.data;
};
