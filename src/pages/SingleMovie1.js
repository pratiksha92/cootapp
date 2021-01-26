import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WebsiteNavbar from "../components/WebsiteNavbar";
import WebFooter from "../components/WebFooter";
import AsyncCast from "../components/AsyncCast";
import AsynCrew from "../components/AsyncCrew";
import AsyncWatchProviders from "../components/AsyncWatchProviders";
import AsyncRecommendation from "../components/AsyncRecommendation";

export default function SingleMovie1() {
  let { id, region } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
        );
        const data = await response.json();
        if (data) {
          const {
            poster_path: image,
            original_title: title,
            overview,
            release_date: date,
            runtime,
            backdrop_path: background_image,
            genres,
            status,
            original_language,
          } = data;

          const newMovie = {
            title,
            image,
            overview,
            date,
            runtime,
            background_image,
            genres,
            status,
            original_language,
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
      status,
      original_language,
    } = movie;

    return (
      <div className="singlemovie-container">
        <WebsiteNavbar></WebsiteNavbar>
        <div className="singlemovie-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="jumbotron singlemovie-content-bg-cover"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(92.55%, 90.2%, 87.45%, 0.8),rgba(92.55%, 90.2%, 87.45%, 0.84)), url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${background_image}")`,
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
                              <div className="bullet"></div>
                              <p>
                                {genres ? (
                                  genres.map((item) => {
                                    return (
                                      <span className="comma" key={item.id}>
                                        {item.name}
                                      </span>
                                    );
                                  })
                                ) : (
                                  <div></div>
                                )}
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
                                url={`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`}
                              ></AsynCrew>
                              <AsyncWatchProviders
                                id={`${id}`}
                                region={`${region}`}
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
          <div className="castbar-container">
            <div className="row">
              <div className="col-lg-9">
                <AsyncCast
                  url={`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`}
                ></AsyncCast>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-2">
                <div className="movie-status">
                  <h5 className="movie-status-heading">Status</h5>
                  <p className="movie-status-subheading">{status}</p>
                  <h5 className="movie-status-heading">Original Language</h5>
                  <p className="movie-status-subheading">{original_language}</p>
                </div>
              </div>
            </div>
          </div>
          <AsyncRecommendation
            id={id}
            name={title}
            movie_collection="You may also like"
            region={region}
          ></AsyncRecommendation>
        </div>
        <WebFooter></WebFooter>
      </div>
    );
  }
}
