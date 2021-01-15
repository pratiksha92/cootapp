import React, { useState, useEffect } from "react";
import MovieBar from "../components/MovieBar";

export default function AsyncRecommendation({ id }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();
        const { results } = data;

        if (results) {
          const newMovies = results
            .filter((item) => {
              if (item.poster_path != null) {
                return true;
              }
              return false;
            })
            .map((item) => {
              const { id, title, poster_path } = item;

              return {
                id: id,
                name: title,
                image: `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
              };
            });
          setMovies(newMovies);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [id]);

  const isMovies = movies.length > 0;
  return (
    <div>
      {isMovies ? (
        <div className="moviebar-container">
          <MovieBar movies={movies} category="You may also like"></MovieBar>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
