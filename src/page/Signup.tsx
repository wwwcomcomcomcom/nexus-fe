import { useNavigate, useSearchParams } from "react-router-dom";
import * as GauthApi from "../shared/gauthApi.ts";
import { useEffect } from "react";
import * as GithubApi from "../shared/githubApi.ts";
import GauthIcon from "../component/icons/GauthIcon.tsx";
// import GithubIcon from "../component/icons/GithubIcon.tsx";
import LeftArrowIcon from "../component/icons/LeftArrowIcon.tsx";
import Logo from "../component/elements/Logo.tsx";

export default function Signup() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const gauthCode = query.get("gauth?code");
  const githubCode = query.get("code");
  console.log(gauthCode, githubCode);
  useEffect(() => {
    if (gauthCode) {
      GauthApi.signup(gauthCode)
        .then(() => navigate("/"))
        .catch((e) => {
          alert("Failed to signup" + e.message);
        });
    }
    if (githubCode) {
      GithubApi.signup(githubCode)
        .then(() => navigate("/"))
        .catch((e) => {
          alert("Failed to signup" + e.message);
        });
    }
  }, [gauthCode, githubCode, navigate]);

  return (
    <>
      <div
        className="inline-flex items-center justify-center cursor-pointer top-7 ml-10 p-3 m-2 absolute"
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon />
      </div>
      {/* <a
        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute"
        href="../"
      >
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
          className="h-5 w-5"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
      </a> */}
      <div className="mx-auto max-w-md space-y-6 py-12 h-screen flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-gray-500">
            Gauth 계정을 이용하여 간편하게 회원가입하세요!
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-100 h-[1px] w-full my-6"
        ></div>
        <Logo
          className="py-3 mx-auto w-64 h-64 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <a
          className="space-y-4 block"
          href={`https://github.com/login/oauth/authorize?client_id=${GithubApi.GithubOauthClientId}&redirect_uri=${window.location.origin}/signup`}
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border transition-colors duration-300 hover:bg-black hover:text-white active:bg-gray-700 active:text-gray-300 h-10 px-4 py-2 w-full">
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
              className="mr-2 h-4 w-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Sign up with GitHub
          </button>
        </a>
        <a
          className="space-y-4 block"
          href={`https://gauth-msg.vercel.app/login?client_id=${GauthApi.GauthOauthClientId}&redirect_uri=${window.location.origin}/signup?guath`}
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border transition-colors duration-300 text-gauth-primary hover:bg-gauth-primary hover:text-white h-10 px-4 py-2 w-full">
            <GauthIcon className="w-4 h-4 mr-2" />
            Sign up with Gauth
          </button>
        </a>
        <div className="text-end px-4 text-gray-500">
          이미 계정을 가지고 있나요?{" "}
          <span
            className="text-blue-400 ml-2 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            로그인
          </span>
        </div>
      </div>
    </>
  );
}
