import {Outlet} from "react-router-dom";
import Header from "../component/headBar/Header.tsx";

export default function HeaderLayout() {
  return <>
    <Header/>
    <Outlet/>
  </>;
}