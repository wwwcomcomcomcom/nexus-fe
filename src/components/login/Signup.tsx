import { useNavigate, useSearchParams } from "react-router-dom";
import { GauthOauthClientId } from "../../shared/guathApi";
import { useEffect } from "react";

export default function Signup() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const gauthCode = query.get("code");

  useEffect(() => {
    if(gauthCode){
      //TODO:regist access token to server
    }
  }, [gauthCode]);

  return(
    <>
      <a
        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute"
        href=".."
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
          <p className="text-gray-500">Gauth 계정을 이용하여 간편하게 회원가입하세요!</p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-gray-100 h-[1px] w-full my-6"
        ></div>
        <img src="/github-icon.png" alt="github" className="mx-auto w-64" />
        <a
          className="space-y-4 block"
          href={`https://gauth.co.kr/login?client_id=${GauthOauthClientId}&redirect_uri=http://localhost:5173/signup`}
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border transition-colors duration-300 text-gauth-primary hover:bg-gauth-primary hover:text-white h-10 px-4 py-2 w-full">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M0.197998 4.33382L7.901 0V5.31397L4.92057 6.9908L0.197998 4.33382ZM4.72255 7.31768L0 4.66071V13.3393L4.72255 10.6823V7.31768ZM5.30681 10.3536V7.64639L7.71274 9L5.30681 10.3536ZM4.9205 11.0092L0.197998 13.6662L7.901 18V12.6861L4.9205 11.0092ZM7.901 12.0287L5.50476 10.6805L7.901 9.33236V12.0287ZM8.29051 12.6861V18L16 13.6625L11.2775 11.0056L8.29051 12.6861ZM10.6933 10.6769L8.29051 12.0287V9.32506L10.6933 10.6769ZM11.2775 6.99444L16 4.33747L8.29051 0V5.31394L11.2775 6.99444ZM7.901 5.97139V8.66764L5.50483 7.31951L7.901 5.97139Z"
              />
            </svg>
            Sign up with Gauth
          </button>
        </a>
        <div className="text-end px-4">
          이미 계정을 가지고 있나요? <span
          className="text-blue-400 ml-2 cursor-pointer"
          onClick={() => navigate("/login")}          
          >로그인</span>
        </div>
      </div>
    </>
  );
}