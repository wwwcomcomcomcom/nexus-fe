export default function AboutUs() {
  const seminGitHubProfileLink = () => {
    window.location.href = "https://github.com/wwwcomcomcomcom";
  };
  const hyojooGitHubProfileLink = () => {
    window.location.href = "https://github.com/jhj080802";
  };
  const youngSeoGitHubProfileLink = () => {
    window.location.href = "https://github.com/ysl0331";
  };
  const damYulGitHubProfileLink = () => {
    window.location.href = "https://github.com/DAMNyul";
  };
  const seohuiGitHubProfileLink = () => {
    window.location.href = "https://github.com/se0hui";
  };
  const JaewookGitHubProfileLink = () => {
    window.location.href = "https://github.com/976520";
  };

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div className="w-3/4 pl-10">
        <h1 className="font-bold text-2xl">
          About us
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
            className="ml-2 h-5 w-5 inline mb-1"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </h1>
        <p className="text-[#757575] my-1">NEXUS를 만든 사람들이에요</p>
      </div>
      <div className="grid grid-cols-3 py-8 gap-6  max-w-7xl w-5/6">
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/162972723?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={damYulGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">김담율</h2>
          <div className="flex flex-col gap-4 w-1/4 min-w-20">
            <Label text="APP" className="bg-[#F4F9FF] "></Label>
            {/* <Label text="Backend" className="bg-orange-400"></Label> */}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/156983141?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={seohuiGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">이서희</h2>
          <div className="flex flex-col gap-4 w-1/4 min-w-20">
            <Label text="Backend" className="bg-[#FFEDE3]"></Label>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/68013923?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={seminGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">이세민</h2>
          <div className="flex flex-col gap-2 w-1/4 min-w-20">
            <Label text="FrontEnd" className="bg-[#FFF5DB]"></Label>
            <Label text="Backend" className="bg-[#FFEDE3]"></Label>
            <Label text="APP" className="bg-[#F4F9FF]"></Label>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/162972645?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={youngSeoGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">이영서</h2>
          <div className="flex flex-col gap-4 w-1/4 min-w-20">
            <Label text="APP" className="bg-[#F4F9FF]"></Label>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/164720957?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={hyojooGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">정효주</h2>
          <div className="flex flex-col gap-2 w-1/4 min-w-20">
            <Label text="Frontend" className="bg-[#FFF5DB]"></Label>
            <Label text="Design" className="bg-[#F5E3FF]"></Label>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/123460320?v=4"
            className="rounded-full w-24 cursor-pointer"
            onClick={JaewookGitHubProfileLink}
          ></img>
          <h2 className="font-semibold pb-5 pt-2">송재욱</h2>
          <div className="flex flex-col gap-2 w-1/4 min-w-20">
            <Label text="Frontend" className="bg-[#FFF5DB]"></Label>
            <Label text="Design" className="bg-[#F5E3FF]"></Label>
            <Label text="AI" className="bg-[#DEFFEE]"></Label>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ text, className }: { text: string; className: string }) {
  return (
    <label className={"w-full rounded-full text-center" + " " + className}>
      {text}
    </label>
  );
}
