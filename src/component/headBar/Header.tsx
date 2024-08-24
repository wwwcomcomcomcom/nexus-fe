import { useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";
import { useUpdatedUserStore } from "../../shared/api";

export default function Header() {
  const navigate = useNavigate();
  const { isLogin } = useUpdatedUserStore();

  const navigations = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/posts" },
  ];

  return (
    <header className="flex items-center justify-between xs:px-10 w-full sticky top-0 z-50 h-16 bg-white ">
      <nav className="flex flex-row w-full h-full border-b border-[#E4E4E4] py-4 max-xxs:px-4">
        <div className="flex items-center justify-start space-x-4 grow max-xxs:hidden">
          <h1 className="font-bold text-xl">Nexus</h1>
        </div>
        <div className="flex items-center justify-center space-x-8 grow">
          {navigations.map((nav, i) => {
            let style = "font-semibold";
            if (
              window.location.pathname === nav.path ||
              (i === 2 && window.location.pathname.startsWith("/post")) ||
              (i === 1 && window.location.pathname.startsWith("/project"))
            )
              style += " !font-bold text-blue-500";
            return (
              <button
                key={nav.path}
                className={style}
                onClick={() => navigate(nav.path)}
              >
                {nav.name}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-end space-x-4 grow">
          {isLogin() ? <ProfileButton /> : <LoginButton />}
        </div>
      </nav>
    </header>
  );
}
