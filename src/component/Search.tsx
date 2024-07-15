import SearchGreenBox from "./elements/SearchGreenBox";

import SearchBtn from "./elements/SearchBtn";
import SearchYellowBox from "./elements/SearchYellowBox";

export default function Search() {
  return (
    <div className="flex justify-center mb-80 ">
      <div className="absolute w-1/2 h-[200px] flex items-center justify-center -translate-x-1/2 translate-y-1/2 -z-10">
        <SearchYellowBox className="translate-x-10 -translate-y-10" />
      </div>
      <div className="absolute w-1/2 h-[200px] flex items-end justify-end translate-y-[55%] translate-x-1/3 z-0">
        <SearchGreenBox className="" width={450} height={400} />
      </div>
      <div className="bg-[#F4F9FF] w-1/2 h-[200px] rounded-[60px] p-10 flex place-content-between">
        <span className="translate-y-[30%]">
          <h1 className="flex text-2xl font-bold">Search</h1>
          <p className="flex text-[#757575]">project나 사람을 찾아보세요</p>
        </span>
        <div
          className="p-3 h-16 w-[60%] translate-x-[40%] translate-y-[40%] border border-[#F1F1F1] rounded-full shadow-lg bg-white flex items-end"
          onClick={() => document.getElementById("search")?.focus()}
        >
          <input type="text" id="search" className="w-full h-full outline-none z-20" />
          <SearchBtn className="z-20 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
