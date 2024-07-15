import { useNavigate, useSearchParams } from "react-router-dom";
import { GauthOauthClientId, signup } from "../shared/guathApi.ts";
import { useEffect } from "react";
import GauthIcon from "../component/icons/GauthIcon.tsx";
import GithubIcon from "../component/icons/GithubIcon.tsx";

export default function Signup() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const gauthCode = query.get("code");

  useEffect(() => {
    if (gauthCode) {
      //TODO:regist access token to server
      signup(gauthCode)
        .then(() => navigate("/"))
        .catch((e) => {
          alert("Failed to signup" + e.message);
        });
    }
  }, [gauthCode, navigate]);

  return (
    <>
      <a
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
      </a>
      <div className="mx-auto max-w-md space-y-6 py-12">
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
        <GithubIcon className="mx-auto w-64 h-64" />
        <a
          className="space-y-4 block"
          href={`https://gauth.co.kr/login?client_id=${GauthOauthClientId}&redirect_uri=${window.location.origin}/signup`}
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
