import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import LazyLoad from "react-lazyload";

export default function MovieCard({ image, name, id, region }) {
  return (
    <article className="moviecard">
      <div className="image-conatiner img-hover img-shadow">
        <Link to={`/movie/${id}/${region}`} className="moviecard-image">
          <LazyLoad
            height={260}
            once={true}
            placeholder={<Skeleton active></Skeleton>}
          >
            <img src={image} alt={name}></img>
          </LazyLoad>
        </Link>
      </div>
    </article>
  );
}
