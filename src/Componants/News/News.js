import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./News.css";

const News = ({ news }) => {
  //   console.log("this is News Data", news);
  const {
    _id,
    title,
    description,
    imageUrl,
    newsCountry,
    newsDate,
    newsAuthor,
    newsRating,
  } = news;

  return (
    <Col>
      <Card className="shadow  mb-3 bg-body rounded bg-light">
        <Card.Img
          className="img-hovering"
          height="300px"
          variant="top"
          src={imageUrl}
        />
        <div className="container">
          <div className="d-sm-flex d-md-flex flex-md-row flex-sm-row text-white pt-2 justify-content-between">
            <p style={{ color: "#003F63", fontSize: "12px" }}>{newsAuthor}</p>
            <p style={{ color: "#003F63", fontSize: "12px" }}>{newsDate}</p>
            <p style={{ color: "#003F63", fontSize: "12px" }}>{newsCountry}</p>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="text-start">{title}</Card.Title>
          <Card.Text className=" text-start card-description">
            {description.slice(0, 100)}
          </Card.Text>
          <div className="btn-service d-flex flex-row justify-content-between">
            <Link to={`/detail_news/${_id}`}>
              <button type="button" className="btn btn-outline-primary">
                Read More{" "}
              </button>
            </Link>
            <Card.Text>
              <Rating
                style={{ color: "#fdcc0d" }}
                initialRating={newsRating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
