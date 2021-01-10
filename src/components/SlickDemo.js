import React, { Component } from "react";
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
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
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
        color: "black",
        fontSize: "15px",
        lineHeight: "0",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
}

export class SlickDemo extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2>SlickDemo</h2>
        <Slider {...settings}>
          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>

          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>

          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>

          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>

          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>

          <Card
            className="wdt"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                className="img"
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </Slider>
      </div>
    );
  }
}

export default SlickDemo;
