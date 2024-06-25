import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import HomeMain from "./components/main/HomePage.tsx";
import Login from "./components/login/Login.tsx";
import ProjectPage from "./components/main/ProjectPage.tsx";
import ProfilePage from './components/main/ProfilePage.tsx';
import ProjectListPage from './components/main/ProjectListPage.tsx';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomeMain/>}/>
          <Route path="/projects" element={<ProjectListPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/project/:id/" element={<ProjectPage/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
