export default function AboutUs() {
  return (
    <div className="w-[100%] px-[250px] py-[100px]">
      <div className="pl-20">
        <h1 className="font-bold text-2xl">About us</h1>
        <p className="text-[#757575] my-1">NEXUS를 만든 사람들이에요</p>
      </div>
      <div className="grid grid-cols-3 py-10 ">
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">김담율</h2>
          <h3>APP</h3>
          <h3>BackEnd</h3>
        </span>
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">이서희</h2>
          <h3>BackEnd</h3>
        </span>
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">이세민</h2>
          <h3>FrontEnd</h3>
          <h3>APP</h3>
          <h3>BackEnd</h3>
        </span>
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">이영서</h2>
          <h3>APP</h3>
        </span>
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">정효주</h2>
          <h3>FrontEnd</h3>
          <h3>Design</h3>
        </span>
        <span className="flex flex-col items-center">
          <h2 className="font-semibold">송재욱</h2>
          <h3>FrontEnd</h3>
          <h3>Design</h3>
          <h3>AI</h3>
        </span>
      </div>
    </div>
  );
}
