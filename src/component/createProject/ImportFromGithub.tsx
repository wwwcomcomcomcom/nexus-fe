export default function ImportFromGithub({setViewPage}:{setViewPage:(page:number)=>void}) {
  
  return <>
    <div
        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 m-2 absolute left-0"
        onClick={() => setViewPage(0)}
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
      </div>
      <div className="flex flex-col">
        <h1>GitHub 저장소에서 프로젝트 가져오기</h1>
      </div>
  </>
}