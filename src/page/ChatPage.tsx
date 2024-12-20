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
    img: "https://avatars.githubusercontent.com/u/164720957?v=4",
  },
  {
    id: "2",
    name: "정효주",
    img: "https://avatars.githubusercontent.com/u/164720957?v=4",
  },
  {
    id: "3",
    name: "이세민",
    img: "https://avatars.githubusercontent.com/u/164720957?v=4",
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
      {/* 채팅자 목록 */}
      <div className="flex grow">
        <div className="h-full grow max-w-xl min-w-64  flex flex-col p-6 pl-0">
          <div className="rounded-r-3xl bg-[#F4F9FF] h-full ">
            {/* 유저 리스트 */}
            <div className="pt-10">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="p-16 cursor-pointer relative flex items-center text-3xl "
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-center gap-6 z-30">
                    <img
                      src={user.img}
                      alt="profile"
                      className="w-24 h-24 rounded-full object-cover "
                    />
                    <p className="text-4xl  ">{user.name}</p>
                  </div>
                  {user.id === selectedUser?.id && (
                    <ChatLIstGreenBox className="absolute z-20 -translate-x-20 translate-y-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 채팅 내용과 입력 박스 */}
        <div className="h-full grow-[2] flex flex-col gap-8">
          {/* 채팅 내용이 담긴 상자 */}
          <div
            id="chat-box"
            className="mt-6 h-full rounded-3xl border border-[#FEFEFE] grow shadow-[0_10px_50px_0px_rgb(0,0,0,0.1)] overflow-auto"
          >
            {/* 선택된 유저와의 대화 */}
            <div className="p-4">
              <p>Chat with {selectedUser.name}</p>
              {/* Scrollable chat content goes here */}
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${
                    message.sender === "me" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`${
                      message.sender === "me" ? "bg-[#FFE3E3]" : "bg-[#E4E4E4]"
                    } text-black text-3xl py-2 px-4 rounded-full flex-wrap  break-words`}
                  >
                    {message.message}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 채팅 입력 - textarea */}
      <footer className="w-full fixed bottom-0 left-0 bg-white border-t border-[#F2F2F2] py-2 shadow-md px-6">
        <form onSubmit={handleSendMessage}>
          <label className="w-full flex items-center bg-white border border-[#F2F2F2] rounded-[30px] px-6 py-1">
            <textarea
              ref={messageInputRef}
              rows={1}
              style={{ overflow: "hidden", resize: "none" }}
              placeholder={`Send a message to ${selectedUser.name}`}
              className="grow outline-none"
              onKeyPress={handleSendMessage}
            />
            <button onClick={handleSendMessage} className="w-6 cursor-pointer">
              <PencilIcon className="h-6 w-6" />
            </button>
          </label>
        </form>
      </footer>
    </div>
  );
}
