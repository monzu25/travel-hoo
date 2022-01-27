import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import News from "../News/News";

const DetailsView = () => {
  const { newsId } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    fetch(`https://vast-waters-96917.herokuapp.com/dailyNews/${newsId}`)
      .then((res) => res.json())

      .then((data) => setNews(data));
  }, [newsId]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7">
          <div className="d-sm-flex d-md-flex flex-md-row flex-sm-row text-white pt-2 justify-content-between">
            <p style={{ color: "#003F63", fontSize: "12px" }}>
              {news?.newsAuthor}
            </p>
            <p style={{ color: "#003F63", fontSize: "12px" }}>
              {news?.newsDate}
            </p>
            <p style={{ color: "#003F63", fontSize: "12px" }}>
              {news?.newsCountry}
            </p>
          </div>
          <h1 className="text-start">{news?.title}</h1>
          <img className="rounded" width="100%" src={news?.imageUrl} alt="" />
          <p className=" text-start">{news?.description}</p>

          <div
            className="container"
            style={{
              backgroundColor: "#00294D",
              width: "100%",
              borderRadius: "5px",
            }}
          ></div>
        </div>

        <div className="col-md-5">{/* <News></News> */}</div>
      </div>
    </div>
  );
};

export default DetailsView;
