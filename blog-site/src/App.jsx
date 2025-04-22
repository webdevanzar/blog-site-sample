import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Blog } from "./components/Blog";
import Blogs from "./components/Blogs";
import { CreateBlog } from "./components/CreateBlog";
import Sanmple from "./components/Sanmple";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>

      {/* <Sanmple /> */}
    </>
  );
}

export default App;
