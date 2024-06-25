import {Outlet} from "react-router-dom";
import Header from "./headBar/Header.tsx";
import Footer from "./footer/footer.tsx";

export default function Layout() {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>;
}