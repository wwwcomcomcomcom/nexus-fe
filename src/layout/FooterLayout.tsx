import {Outlet} from "react-router-dom";
import Footer from "../component/footer/footer.tsx";

export default function Layout() {
  return <>
    <Outlet/>
    <Footer/>
  </>;
}