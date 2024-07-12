// import SearchGreenBox from "./elements/SearchGreenBox";

import SearchBtn from "./elements/SearchBtn";

export default function Search() {
  return (
    <div className="flex justify-center my-52">
      {/* <SearchGreenBox className="translate-x-[70%]" /> */}
      <div className="bg-[#F4F9FF] w-[50%] h-[200px] rounded-[60px] p-10 flex place-content-between">
        <span className="translate-y-[30%]">
          <h1 className="flex text-2xl font-bold">Search</h1>
          <p className="flex text-[#757575]">project나 사람을 찾아보세요</p>
        </span>
        <div
          className="p-3 h-16 w-[60%] translate-x-[40%] translate-y-[40%] border border-[#F1F1F1] rounded-full shadow-lg bg-white flex items-end"
          onClick={() => document.getElementById("search")?.focus()}
        >
          <input
            type="text"
            id="search"
            className="w-full h-full outline-none"
          />
          <SearchBtn className="z-20 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
