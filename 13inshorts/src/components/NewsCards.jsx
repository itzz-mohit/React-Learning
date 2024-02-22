import React from "react";
import { Link } from "react-router-dom";

const NewsCards = ({ newsData }) => {
  const { title, content, image_url, source_name, source_url, author_name } =
    newsData;

  return (
    <div className=" flex w-1/2 mx-auto shadow-lg my-5">
      <div className="w-1/2 p-5">
        <img className="h-80 w-full rounded-lg object-cover" src={image_url} />
      </div>
      <div className="w-1/2 p-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <h4 className="text-sm font-semibold">
          <span className="font-bold">Shorts by</span>{" "}
          <span className="text-gray-500">{author_name}</span>
        </h4>
        <p className="text-gray-700 text-base">{content}</p>
        <p className="text-sm">
          <span className="font-semibold"> Read more at </span>
          <Link
            to={source_url}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {source_name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsCards;
