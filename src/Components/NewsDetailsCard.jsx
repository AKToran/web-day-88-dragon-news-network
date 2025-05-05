import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, author, thumbnail_url, details } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString();

  return (
    <div className="card mb-6 p-4">
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-80 object-cover rounded-md"
        />
      </div>
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-primary  cursor-pointer">
          {title}
        </h2>
      </div>
      <div className="flex items-center px-4 gap-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={author?.img} alt={author?.name} />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-sm">{author?.name}</h2>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>
      <div className="p-4 text-accent">{details}</div>

      <Link className="flex items-center gap-1 btn w-fit bg-secondary text-white" to={`/category/${category_id}`}><FaArrowLeftLong/>All news in the category.</Link>
    </div>
  );
};

export default NewsDetailsCard;
