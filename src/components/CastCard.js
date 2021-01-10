import React from "react";
//import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function CastCard({ image, name, id, department }) {
  return (
    <Card
      hoverable
      style={{ width: `200` }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} description={department} />
    </Card>
  );
}
