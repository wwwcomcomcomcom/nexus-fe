import { Outlet } from "react-router-dom";
import Header from "../component/headBar/Header.tsx";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}
