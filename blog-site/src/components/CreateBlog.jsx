import React from "react";
import { useBlog } from "../context/BlogContext";

export const CreateBlog = () => {
  const { handleChange, currentBlog, handleSubmit } = useBlog();


  return (
    <form
      action=""
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col items-center"
    >
      <input
        type="text"
        name="title"
        value={currentBlog.title}
        id=""
        placeholder="Title"
        onChange={handleChange}
        className="border-b-4 pt-5 pl-2 text-2xl font-bold outline-none w-[33%]"
      />
      <textarea
        name="text"
        cols="100"
        rows="25"
        value={currentBlog.text}
        onChange={handleChange}
        className="mt-5 border-2 p-2 outline-none"
      ></textarea>
      <button className="p-3 w-[33%] mt-3 bg-blue-900 text-white rounded-sm">
        Submit
      </button>
    </form>
  );
};
