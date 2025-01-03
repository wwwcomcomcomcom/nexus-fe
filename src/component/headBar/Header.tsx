import { useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import LoginButton from "./LoginButton";
import { useUpdatedUserStore } from "../../shared/userApi";

export default function Header() {
  const navigate = useNavigate();
  const { isLogin } = useUpdatedUserStore();

  const navigations = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/posts" },
    ...(isLogin() ? [{ name: "Chat", path: "/chat" }] : []),
  ];

  return (
    <header className="h-fit flex items-center justify-between xs:px-10 w-full sticky top-0 z-50 bg-white ">
      <nav className="flex flex-row w-full h-full border-b border-[#E4E4E4] max-xxs:px-4">
        <div className="flex items-center justify-start space-x-4 grow max-xxs:hidden">
          <h1 className="font-bold text-3xl">Nexus</h1>
        </div>

        <div className="flex items-center justify-center space-x-20 grow my-6">
          {navigations.map((nav, i) => {
            let style = "text-xl";
            if (
              window.location.pathname === nav.path ||
              (i === 2 && window.location.pathname.startsWith("/post")) ||
              (i === 1 && window.location.pathname.startsWith("/project"))
            )
              style += "  text-blue-500";
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
