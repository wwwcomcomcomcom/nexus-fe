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
import PostsPage from "./page/PostListPage.tsx";

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
            <Route path="/createProject" element={<CreateProjectPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
