import PencilIcon from "../component/icons/PencilIcon";

export default function ChatPage() {
  return (
    <div className="flex h-lvh">
      <div className="h-full grow max-w-lg min-w-64 flex flex-col p-6 pl-0">
        <div className="rounded-r-3xl bg-slate-200 h-full"></div>
      </div>
      <div className="h-full grow-[2] flex flex-col py-6 gap-8">
        <div className="h-full rounded-3xl border border-[#FEFEFE] grow shadow-[0_10px_50px_0px_rgb(0,0,0,0.1)]"></div>
        <label
          className="bg-white w-full flex items-center border border-[#F2F2F2] rounded-[30px] px-6 py-1 shadow-md"
          htmlFor="commentInput"
        >
          <textarea
            id="commentInput"
            rows={1}
            style={{ overflow: "hidden", resize: "none" }}
            placeholder="채팅치기"
            className="grow outline-none"
          />
          <PencilIcon className="w-6 cursor-pointer" />
        </label>
      </div>
    </div>
  );
}
