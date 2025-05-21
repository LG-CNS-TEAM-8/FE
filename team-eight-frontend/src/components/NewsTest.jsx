import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsTest = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/news")
      .then((response) => {
        setNewsList(response.data);  // response.data는 List<NewsResponse>임
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (newsList.length === 0) return <p>No news available</p>;

  return (
    <ul>
      {newsList.map((news, index) => (
        <li key={index}>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <a href={news.link} target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      ))}
    </ul>
  );
};

export default NewsTest;
