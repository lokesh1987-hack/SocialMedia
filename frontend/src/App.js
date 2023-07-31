import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgetPage from "./Pages/ForgetPage";
import HomePage from "./Pages/HomePage";
import GalleryPage from "./Pages/GalleryPage";
import ReelsPage from "./Pages/Reels";
import ProfilePage from "./Pages/ProfilePage";
import PostPage from "./Pages/PostsPage";
import CreatePostPage from "./Pages/CreatePostPage";
import CreateStoryPage from "./Pages/CreateStoryPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("username") !== undefined
    ) {
      setIsAuth(true);
    } else {
      navigate("/login");
    }
  }, []);

  const loginCheck = (data) => {
    setIsAuth(data);
  };

  return (
    <div className="App">
      <HomePage>
        <Routes>
          {isAuth && (
            <>
              <Route exact path="/" element={<GalleryPage />} />
              <Route exact path="/reels" element={<ReelsPage />} />
              <Route exact path="/gallery" element={<GalleryPage />} />
              <Route exact path="/posts" element={<PostPage />} />
              <Route exact path="/profile" element={<ProfilePage />} />
              <Route exact path="/createpost" element={<CreatePostPage />} />
              <Route exact path="/createstory" element={<CreateStoryPage />} />
            </>
          )}

          <Route
            exact
            path="/login"
            element={<LoginPage loginCheck={loginCheck} />}
          />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/forgetpassword" element={<ForgetPage />} />
          <Route exact path={"*"} element={<h1>Page Not Found</h1>} />
        </Routes>
      </HomePage>
    </div>
  );
}

export default App;
