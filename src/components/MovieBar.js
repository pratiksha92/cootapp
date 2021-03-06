import React from "react";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import LazyLoad from "react-lazyload";
import { Skeleton } from "antd";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
}

export default function MovieBar({ movies, category }) {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <LazyLoad once={true} placeholder={<Skeleton active></Skeleton>}>
      <section className="section">
        <h2 className="section-title"> {category}</h2>
        <div className="movies-center">
          <Slider {...settings}>
            {movies.map((item) => {
              return <MovieCard key={item.id} {...item}></MovieCard>;
            })}
          </Slider>
        </div>
      </section>
    </LazyLoad>
  );
}
