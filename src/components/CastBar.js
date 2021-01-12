import React from "react";
import CastCard from "./CastCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

export default function CastBar({ cast, crew }) {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true,
    speed: 200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="section">
      <h2 className="section-title">Casts</h2>
      <div className="movies-center">
        <Slider {...settings}>
          {cast.map((item) => {
            return <CastCard key={item.id} {...item}></CastCard>;
          })}
        </Slider>
      </div>
    </section>
  );
}
