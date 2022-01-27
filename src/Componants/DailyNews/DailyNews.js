// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
// import useDataHooks from '../../DataHoocks/DataHooks';
import News from "../News/News";

const DailyNews = () => {
  const [dailyNews, setDailyNews] = useState([]);

  useEffect(() => {
    fetch("https://vast-waters-96917.herokuapp.com/dailyNews")
      .then((res) => res.json())
      .then((data) => setDailyNews(data));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="my-3">Our Daily News</h2>
      <Row xs={1} md={3} className="g-4">
        {dailyNews.map((news) => (
          <News key={news._id} news={news}></News>
        ))}
      </Row>
    </div>
  );
};

export default DailyNews;
