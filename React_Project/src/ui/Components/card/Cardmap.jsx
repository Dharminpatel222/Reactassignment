import React from 'react'
import Card from "react-bootstrap/Card";
import './card.css'

export default function Cardmap({data}) {
  return (
    <>
      <div className="heading">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data?.img} />
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>{data?.text}</Card.Text>
            <div className="rate">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="price">
              <span>{data?.price}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
