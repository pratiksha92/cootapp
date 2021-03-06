import React, { useState, useEffect } from "react";
import MovieBar from "../components/MovieBar";

export default function AsyncMovies({
  genres,
  movie_collection,
  watch_providers,
  keywords,
  region,
  media_type,
}) {
  const [movies, setMovies] = useState([]);
  const [category, setcategory] = useState("");

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/${media_type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}&with_watch_providers=${watch_providers}&watch_region=US&with_keywords=${keywords}`
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
                region: region,
                media_type: media_type,
              };
            });
          setMovies(newMovies);
          setcategory(movie_collection);
        } else {
          setMovies([]);
          setcategory("");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [genres, movie_collection, watch_providers, keywords, region, media_type]);

  const isgetMovies = movies.length > 0;
  return (
    <div>
      {isgetMovies ? (
        <div className="moviebar-container">
          <MovieBar movies={movies} category={category}></MovieBar>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
