import SearchGreenBox from "./elements/SearchGreenBox";

import SearchBtn from "./elements/SearchBtn";
import SearchYellowBox from "./elements/SearchYellowBox";

export default function Search() {
  return (
    <div className="flex justify-center mb-80 pr-48">
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
          className="p-4 h-16 w-[60%] translate-x-[40%] translate-y-[40%] border border-[#F1F1F1] rounded-full shadow-lg bg-white flex items-end"
          onClick={() => document.getElementById("search")?.focus()}
        >
          <input
            type="text"
            id="search"
            className="w-full h-full outline-none z-20"
            placeholder="Enter text here"
          />
          {/* <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500"
              placeholder=" "
            />

            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
              Enter text here
            </label>
          </div> */}

          <SearchBtn className="z-20 cursor-pointer translate-y-2 w-7" />
        </div>
      </div>
    </div>
  );
}
