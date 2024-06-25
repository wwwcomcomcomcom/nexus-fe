import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../../shared/userStore";
import ProfileButton from "./profileButton";
import LoginButton from "./loginButton";

export default function Header() {
  const navigate = useNavigate();
  const { accessToken } = useTokenStore();

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-100 sm:py-4 md:py-6 dark:border-gray-800 w-full">
      <div className="flex items-center space-x-4">
        <div className="rounded-lg bg-gray-100 w-10 h-10 dark:bg-gray-300 max-xxs:hidden"></div>
        <nav className="flex items-center space-x-4">
          <button className="font-semibold" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="font-semibold" onClick={() => navigate("/")}>
            Projects
          </button>
          <button
            className="font-semibold !mr-4"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative w-60 max-sm:w-full max-xs:hidden">
          <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            className="flex h-10 rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 border-gray-200 text-sm dark:border-gray-800 w-60 max-sm:w-full"
            placeholder="Search"
            type="text"
          />
        </div>
        {accessToken ? <ProfileButton /> : <LoginButton />}
      </div>
    </header>
  );
}
