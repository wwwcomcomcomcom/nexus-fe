export default function AboutUs() {
  return (
    <div className="w-[100%] px-[250px] py-[100px]">
      <div className="pl-20">
        <h1 className="font-bold text-2xl">About us</h1>
        <p className="text-[#757575] my-1">NEXUS를 만든 사람들이에요</p>
      </div>
      <div className="grid grid-cols-3 py-10 gap-6">
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/162972723?v=4"
            className="rounded-full w-48"
          ></img>

          <h2 className="font-semibold pb-6">김담율</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="APP" className="bg-sky-400"></Label>
            {/* <Label text="Backend" className="bg-orange-400"></Label> */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/156983141?v=4"
            className="rounded-full w-48"
          ></img>
          <h2 className="font-semibold pb-6">이서희</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="Backend" className="bg-orange-400"></Label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/68013923?v=4"
            className="rounded-full w-48"
          ></img>
          <h2 className="font-semibold pb-6">이세민</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="FrontEnd" className="bg-yellow-400"></Label>
            <Label text="Backend" className="bg-orange-400"></Label>
            <Label text="APP" className="bg-sky-400"></Label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/162972645?v=4"
            className="rounded-full w-48"
          ></img>
          <h2 className="font-semibold pb-6">이영서</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="APP" className="bg-sky-400"></Label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/164720957?v=4"
            className="rounded-full w-48"
          ></img>
          <h2 className="font-semibold pb-6">정효주</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="Frontend" className="bg-yellow-400"></Label>
            <Label text="Design" className="bg-emerald-400"></Label>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://avatars.githubusercontent.com/u/123460320?v=4"
            className="rounded-full w-48"
          ></img>
          <h2 className="font-semibold pb-6">송재욱</h2>
          <div className="flex flex-col gap-4 w-1/4">
            <Label text="Frontend" className="bg-yellow-400"></Label>
            <Label text="Design" className="bg-emerald-400"></Label>
            <Label text="AI" className="bg-purple-400"></Label>
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
