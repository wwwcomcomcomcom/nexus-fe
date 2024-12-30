import { useState, useRef, useEffect } from "react";
import PencilIcon from "../component/icons/PencilIcon";
import ChatLIstGreenBox from "../component/elements/ChatLIstGreenBox";

interface User {
  id: string;
  name: string;
  img: string;
}

interface Message {
  id: string;
  message: string;
  sender: string;
  receiver: string;
}

const users: User[] = [
  {
    id: "1",
    name: "이서희",
    img: "https://avatars.githubusercontent.com/u/156983141?v=4",
  },
  {
    id: "2",
    name: "송재욱",
    img: "https://avatars.githubusercontent.com/u/123460320?v=4",
  },
  {
    id: "3",
    name: "이세민",
    img: "https://avatars.githubusercontent.com/u/68013923?v=4",
  },
]; // 유저 목록 데이터 예시

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<User>(users[0]); // 선택된 유저
  const [chatMessages, setChatMessages] = useState<Message[]>([]); // 채팅 메시지 목록
  const messageInputRef = useRef<HTMLTextAreaElement>(null); // textarea의 ref

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if ("key" in event && event.key !== "Enter") return;
    event.preventDefault();
    const message = messageInputRef.current?.value; // textarea 값을 가져옴
    if (message) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          id: new Date().getTime().toString(),
          message,
          sender: "me",
          receiver: selectedUser.id,
        },
      ]);
      messageInputRef.current!.value = "";
    }
  };

  // 선택된 유저와의 채팅 메시지만 필터링하여 표시
  const filteredMessages = chatMessages.filter(
    (message) => message.receiver === selectedUser.id
  );

  return (
    <div className="flex flex-col h-lvh">
      <div className="flex grow">
        {/* 채팅자 목록 */}
        <div className="h-full grow max-w-xl min-w-64 flex flex-col pt-10 pr-10">
          <div className="rounded-r-3xl bg-[#F4F9FF] h-[90%] ">
            {/* 유저 리스트 */}
            <div className="pt-10">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="p-8 cursor-pointer relative flex items-center text-xl"
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-center gap-4 z-30">
                    <img
                      src={user.img}
                      alt="profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="text-2xl">{user.name}</p>
                  </div>
                  {user.id === selectedUser?.id && (
                    <ChatLIstGreenBox className="absolute z-20 -translate-x-10 translate-y-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 채팅 내용과 입력 박스 */}
        <div className="h-[87.3%] grow-[2] flex flex-col mt-10 mr-10 ">
          {/* 채팅 내용과 입력 박스 */}
          <div className="flex-1 flex flex-col gap-8">
            {/* 채팅 내용 */}
            <div
              id="chat-box"
              className="flex-1 overflow-y-auto p-6 bg-white rounded-3xl shadow-lg border border-1"
            >
              <div className="flex flex-col gap-4">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span
                      className={`${
                        message.sender === "me"
                          ? "bg-[#FFE3E3] text-right"
                          : "bg-[#E4E4E4] text-left"
                      } text-xl py-3 px-5 rounded-2xl break-words max-w-[70%]`}
                    >
                      {message.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 채팅 입력 - textarea */}
            <div className="sticky  bottom-0 bg-white ">
              <form onSubmit={handleSendMessage}>
                <div className="flex items-center gap-4">
                  <textarea
                    ref={messageInputRef}
                    rows={1}
                    style={{ overflow: "hidden", resize: "none" }}
                    placeholder={`${selectedUser.name}님에게 메시지 보내기`}
                    className="flex-1 text-lg p-4 rounded-xl border border-[#DCDCDC] shadow-md focus:outline-none"
                    onKeyPress={handleSendMessage}
                  />
                  <button
                    type="submit"
                    className="text-2xl text-[#4CAF50] p-2 rounded-full"
                  >
                    <PencilIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
