import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ddd665792adf475aa5d5977961160eb0";

  const [newsData, setNewsData] = useState([]);

  const getNewsData = () => {
    axios
      .get(url)
      .then((res) => setNewsData(res.data.articles))
      .catch((err) => console.log(err));
  };

  const displayArticles = () => {
    return newsData.map((news, newsIdx) => {
          return <div key={newsIdx}>{news.title}</div>;
    });
  };

  useEffect(() => {
    getNewsData();
  }, []);
  return <div className="container">
  <div className="row">
    <div className="col-md-8">{displayArticles()}
     </div>
  </div>
</div>;;
}
