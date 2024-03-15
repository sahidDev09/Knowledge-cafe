/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = ({ handleBookAdd, handleRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <SingleBlog
          key={blog.id}
          blog={blog}
          handleBookAdd={handleBookAdd}
          handleRead={handleRead}></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
