import React from "react";
import { useBlog } from "../context/BlogContext";
import { Link } from "react-router-dom";

const Blogs = () => {
  console.log("rendering blogs");

  const { blogs } = useBlog();
  return (
    <div className="bg-amber-200 min-h-screen p-5">
      <Link to="/">
        <h4 className="bg-blue-400 font-bold text-2xl rounded-sm  w-25 text-center px-2 cursor-pointer">
          Create
        </h4>
      </Link>
      <h1 className="text-center p-1 text-6xl font-bold">Blogs</h1>
      <div className="flex justify-around p-4 flex-wrap space-y-7">
        {blogs
          .map((blog) => {
            return (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <div
                  className="w-[400px] h-[400px] rounded-sm shadow-2xl border-2 overflow-auto bg-amber-100"
                  key={blog.id}
                >
                  <h1 className="p-2 text-2xl font-bold border-b-2 w-[50%]">
                    {blog.title}
                  </h1>
                  <p className="text-[15px] leading-tight p-2">{blog.text}</p>
                </div>
              </Link>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Blogs;
