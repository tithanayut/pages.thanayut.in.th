import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Alert from "./components/Alert";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="*" element={<Alert message="Content Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
