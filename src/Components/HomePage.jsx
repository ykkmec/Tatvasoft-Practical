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
      .then((res) => {
        setNewsData(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  const showDetailedNews = (news) => {
    console.log(news);
  };

  const displayArticles = () => {
    return newsData.map((news, newsIdx) => {
      return (
        <div key={newsIdx} className="col-lg-4 col-md-6 col-sm-12 mb-2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={news.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <button
                onClick={() => showDetailedNews(news)}
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Read More...
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        {news.title}
                      </h5>
                      <img src={news.urlToImage} style={{ width: "10rem" }} />
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">{news.content}</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <div className="container">
      <div className="row">{displayArticles()}</div>
    </div>
  );
}
