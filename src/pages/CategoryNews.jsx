import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    if (id == 0) {
      setCategoryNews(data);
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="font-bold">Total {categoryNews.length} news found.</h2>

      <div>
        {
          categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
