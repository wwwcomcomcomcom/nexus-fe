import { useState } from "react";
import PencilIcon from "../component/icons/PencilIcon";

const users = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
]; // 유저 목록 데이터 예시

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(users[0]); // 선택된 유저

  return (
    <div className="flex flex-col h-lvh">
      {/* 채팅자 목록 */}
      <div className="flex grow">
        <div className="h-full grow max-w-lg min-w-64 flex flex-col p-6 pl-0">
          <div className="rounded-r-3xl bg-slate-200 h-full overflow-auto">
            {/* 유저 리스트 */}
            {users.map((user) => (
              <div
                key={user.id}
                className={`p-4 cursor-pointer hover:bg-slate-300 ${
                  user.id === selectedUser.id ? "bg-slate-300" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                {user.name}
              </div>
            ))}
          </div>
        </div>

        {/* 채팅 내용과 입력 박스 */}
        <div className="h-full grow-[2] flex flex-col gap-8">
          {/* 채팅 내용이 담긴 상자 */}
          <div className="mt-6 h-full rounded-3xl border border-[#FEFEFE] grow shadow-[0_10px_50px_0px_rgb(0,0,0,0.1)] overflow-auto">
            {/* 선택된 유저와의 대화 */}
            <div className="p-4">
              <p>Chat with {selectedUser.name}</p>
              {/* Scrollable chat content goes here */}
            </div>
          </div>
        </div>
      </div>

      {/* 채팅 입력 - textarea */}
      <footer className="w-full fixed bottom-0 left-0 bg-white border-t border-[#F2F2F2] py-2 shadow-md px-6">
        <label
          className="w-full flex items-center bg-white border border-[#F2F2F2] rounded-[30px] px-6 py-1"
          htmlFor="commentInput"
        >
          <textarea
            id="commentInput"
            rows={1}
            style={{ overflow: "hidden", resize: "none" }}
            placeholder={`Send a message to ${selectedUser.name}`}
            className="grow outline-none"
          />
          <PencilIcon className="w-6 cursor-pointer" />
        </label>
      </footer>
    </div>
  );
}
