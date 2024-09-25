import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import HomeMain from "./page/HomePage.tsx";
import Login from "./page/Login.tsx";
import ProjectPage from "./page/ProjectPage.tsx";
import ProfilePage from "./page/ProfilePage.tsx";
import ProjectListPage from "./page/ProjectListPage.tsx";
import Signup from "./page/Signup.tsx";
import CreateProjectPage from "./page/CreateProjectPage.tsx";
import PostListPage from "./page/PostListPage.tsx";
import PostPage from "./page/PostPage.tsx";
import ProjectSubmit from "./page/ProjectApplication.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeMain />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/project/:id/" element={<ProjectPage />} />
            <Route
              path="/projectApplication/:id/"
              element={<ProjectSubmit />}
            />
            <Route path="/post/:id/" element={<PostPage />} />
            <Route path="/createProject" element={<CreateProjectPage />} />
            <Route path="/posts" element={<PostListPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
