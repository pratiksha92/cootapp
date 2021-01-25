import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ image, name, id, region }) {
  return (
    <article className="moviecard">
      <div className="image-conatiner img-hover img-shadow">
        <Link to={`/movie/${id}/${region}`} className="moviecard-image">
          <img src={image} alt={name}></img>
        </Link>
      </div>
    </article>
  );
}
