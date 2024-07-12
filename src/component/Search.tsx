// import SearchGreenBox from "./elements/SearchGreenBox";

export default function Search() {
  return (
    <div className="flex justify-center my-32">
      {/* <SearchGreenBox className="translate-x-[70%]" /> */}
      <div className="bg-[#F4F9FF] w-[50%] h-[200px] rounded-[60px] p-10 flex place-content-between">
        <span className="translate-y-[30%]">
          <h1 className="flex text-2xl font-bold">Search</h1>
          <p className="flex text-[#757575]">project나 사람을 찾아보세요</p>
        </span>

        <input
          type="text"
          className="h-16 w-[60%] translate-x-[40%] translate-y-[40%] border border-[#F1F1F1] rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
