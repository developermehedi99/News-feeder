import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/v2/top-headlines?category=general")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return news;
};

export default useNewsQuery;
