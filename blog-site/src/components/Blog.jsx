import React, { useEffect } from "react";
import { useBlog } from "../context/BlogContext";
import { Link, useParams } from "react-router-dom";

export const Blog = () => {
  const { blogs } = useBlog();

  const { id } = useParams();

  console.log("rendering blog");

  const newBlog = blogs.filter((blog) => {
    return blog.id == id;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-amber-100 min-h-screen p-5">
      <Link to="/blogs">
        <h4 className="bg-blue-400 text-white font-bold text-3xl rounded-sm  w-14 text-center px-2 cursor-pointer">
          🔙
        </h4>
      </Link>
      <div className="p-10">
        <h1 className="text-center p-1 text-6xl font-bold">
          {newBlog[0].title}
        </h1>
        <p className="mt-10 font-semibold">{newBlog[0].text}</p>
      </div>
    </div>
  );
};
