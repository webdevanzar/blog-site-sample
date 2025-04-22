import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);

  const [currentBlog, setCurrentBlog] = useState({
    id: "",
    title: "",
    text: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentBlog.text.trim() || !currentBlog.title.trim()) {
      alert("Empty input");
      return;
    } else {
      setBlogs((prev) => [
        ...prev,
        {
          ...currentBlog,
          id: Date.now(),
        },
      ]);

      setCurrentBlog({
        id: "",
        title: "",
        text: "",
      });

      navigate("/blogs");
    }
  };


  return (
    <BlogContext.Provider
      value={{ handleChange, currentBlog, handleSubmit, blogs }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
