import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WebsiteNavbar from "../components/WebsiteNavbar";
import WebFooter from "../components/WebFooter";
import AsyncCast from "../components/AsyncCast";
import AsynCrew from "../components/AsyncCrew";
import AsyncWatchProviders from "../components/AsyncWatchProviders";
import AsyncRecommendation from "../components/AsyncRecommendation";

export default function SingleMovie1() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d5d1c00d59add379b91338c04b5755d7&language=en-US
`);
        const data = await response.json();
        console.log(data);
        if (data) {
          const {
            poster_path: image,
            original_title: title,
            overview,
            release_date: date,
            runtime,
            backdrop_path: background_image,
            genres,
          } = data;

          const newMovie = {
            title,
            image,
            overview,
            date,
            runtime,
            background_image,
            genres,
          };
          setMovie(newMovie);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [id]);

  if (!movie) {
    return <h2 className="section-title">No movie to display</h2>;
  } else {
    const {
      title,
      image,
      overview,
      date,
      runtime,
      background_image,
      genres,
    } = movie;
    console.log(genres);
    return (
      <div className="singlemovie-container">
        <WebsiteNavbar></WebsiteNavbar>
        <div className="singlemovie-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="jumbotron singlemovie-content-bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(92.55%, 90.2%, 87.45%, 1),rgba(92.55%, 90.2%, 87.45%, 0.84)), url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${background_image}")`,
                }}
              >
                <div className="container singlemovieimage-box__content">
                  <div className="singlemovie-header">
                    <div className="singlemovie-header-box">
                      <div className="singlemoviebox-content">
                        <div className="singlemoviebox-image">
                          <div className="wrap">
                            <img
                              className="wrap-image"
                              alt={title}
                              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${image}`}
                            />
                          </div>
                        </div>
                        <div className="singlemoviebox-text">
                          <div className="wrap">
                            <h3 className="singlemovie-title">{title}</h3>
                            <div className="singlemovie-subtitle">
                              <span className="">{date}</span>
                              <span className="bullet"></span>
                              <p>
                                {genres.map((item, index) => {
                                  return (
                                    <span className="comma">{item.name}</span>
                                  );
                                })}
                              </p>
                              <span className="bullet"></span>
                              <span>{runtime} min</span>
                            </div>
                            <div className="singlemovieheader-info">
                              <h3>Overview</h3>
                              <div className="overview">
                                <p>{overview}</p>
                              </div>
                              <AsynCrew
                                url={`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d5d1c00d59add379b91338c04b5755d7&language=en-US`}
                              ></AsynCrew>
                              <AsyncWatchProviders
                                id={`${id}`}
                              ></AsyncWatchProviders>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-media">
          <AsyncCast
            url={`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d5d1c00d59add379b91338c04b5755d7&language=en-US`}
          ></AsyncCast>
          <AsyncRecommendation
            id={id}
            movie_collection="You may also like"
          ></AsyncRecommendation>
        </div>
        <WebFooter></WebFooter>
      </div>
    );
  }
}
