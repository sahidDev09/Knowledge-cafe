/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { FaRegBookmark } from "react-icons/fa6";

const SingleBlog = ({ blog, handleBookAdd, handleRead }) => {
  //distructuring

  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="p-3">
      <img
        className=" w-full rounded-md border-2 border-sky-200"
        src={cover}
        alt={`cover picture of ${title}`}
      />
      <div className=" flex justify-between items-center">
        <div className=" flex gap-2 items-center my-4">
          <img className=" w-12 rounded-full" src={author_img} alt="" />
          <div>
            <h1 className=" font-bold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookAdd(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h2 className=" text-2xl font-semibold"> {title} </h2>
      {hashtags.map((hash, index) => (
        <span key={index} className=" text-gray-500 mt-2">
          <a href="">#{hash} </a>
        </span>
      ))}
      <br />
      <button
        onClick={() => handleRead(reading_time,id)}
        className=" text-blue-500 my-2 underline">
        Mark as read
      </button>
      <hr className=" my-2" />
    </div>
  );
};

export default SingleBlog;
