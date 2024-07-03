import {Outlet} from "react-router-dom";
import Header from "../component/headBar/Header.tsx";
import Footer from "../component/footer/footer.tsx";

export default function Layout() {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>;
}