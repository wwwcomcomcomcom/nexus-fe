export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div className="w-3/4 pl-10">
        <h1 className="font-bold text-2xl">About us</h1>
        <p className="text-[#757575] my-1">NEXUS를 만든 사람들이에요</p>
      </div>
      <div className="grid grid-cols-3 py-8 gap-6  max-w-7xl w-5/6">
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/162972723?v=4"
            className="rounded-full w-24 cursor-pointer"
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
