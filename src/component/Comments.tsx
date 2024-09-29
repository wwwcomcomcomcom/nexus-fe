import { useCallback, useState } from "react";
import { generateProfileEntity } from "../shared/apiMockup";
import PencilIcon from "./icons/PencilIcon";

interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [replyInputs, setReplyInputs] = useState<{ [key: number]: string }>({});

  const profile = generateProfileEntity();

  // 댓글 추가
  const handleAddComment = useCallback(() => {
    if (commentInput.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { id: prevComments.length, text: commentInput, replies: [] },
      ]);
      setCommentInput("");
    }
  }, [commentInput]);

  // input
  const handleReplyInputChange = useCallback((id: number, value: string) => {
    setReplyInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  }, []);

  // 대댓글 추가
  const handleAddReply = useCallback(
    (id: number) => {
      if (replyInputs[id]?.trim()) {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === id
              ? {
                  ...comment,
                  replies: [
                    ...comment.replies,
                    {
                      id: comment.replies.length,
                      text: replyInputs[id],
                      replies: [],
                    },
                  ],
                }
              : comment
          )
        );
        setReplyInputs((prevInputs) => ({ ...prevInputs, [id]: "" }));
      }
    },
    [replyInputs]
  );

  // textarea height 자동 조정
  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    element.style.height = "auto"; // 기존 높이 리셋
    element.style.height = `${element.scrollHeight}px`; // 새로운 높이 설정
  };

  return (
    <>
      {/* 댓글 입력 필드 */}
      <label
        className="w-full flex mb-3 border border-[#F2F2F2] rounded-full px-6 py-1 shadow-md"
        htmlFor="commentInput"
      >
        <input
          id="commentInput"
          type="text"
          placeholder="댓글을 최대 500자까지 입력할 수 있어요."
          className="grow outline-none"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <PencilIcon className="w-6 cursor-pointer" onClick={handleAddComment} />
      </label>

      {/* 댓글 리스트 */}
      <ul className="mt-3 z-20">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4">
            <div
              className={`p-4 pt-2 border border-[#F2F2F2] rounded-3xl bg-white shadow-md ${
                comment.replies.length > 0 ? "mr-[30%]" : ""
              }`}
            >
              <div className="flex">
                <img
                  onClick={() => (window.location.href = `${profile.url}`)}
                  src={profile.imgUrl}
                  alt="profile"
                  className="cursor-pointer flex h-7 relative rounded-full bg-white shadow-md mt-1"
                />
                <p className="text-md font-[200] p-2 ">{profile.name}</p>
              </div>
              <p>{comment.text}</p>
            </div>

            <div
              className={`mt-2 ml-[50%] ${
                comment.replies.length > 0 ? "-translate-y-10 -mb-10" : ""
              }`}
            >
              {/* 대댓글 목록 */}
              <div className="z-30">
                {comment.replies.map((reply) => (
                  <li
                    key={reply.id}
                    className="p-4 pt-2 border border-[#F2F2F2 bg-white rounded-3xl shadow-md mb-3 "
                  >
                    <div className="flex">
                      <img
                        onClick={() =>
                          (window.location.href = `${profile.url}`)
                        }
                        src={profile.imgUrl}
                        alt="profile"
                        className="cursor-pointer flex h-7 relative rounded-full bg-white shadow-md mt-1"
                      />
                      <p className="text-md font-[200] p-2 ">{profile.name}</p>
                    </div>
                    {reply.text}
                  </li>
                ))}
              </div>

              {/* 대댓글 입력 필드 */}
              <label
                className="w-full flex mb-3 border border-[#F2F2F2] bg-white  rounded-[30px] px-6 py-1 shadow-md"
                htmlFor="commentInput"
              >
                <textarea
                  rows={1} // 초기 row 크기
                  style={{ overflow: "hidden", resize: "none" }} // 수동 크기 조정 방지
                  placeholder="대댓글을 입력하세요. "
                  className="grow outline-none mt-2 mr-2 "
                  value={replyInputs[comment.id] || ""}
                  onChange={(e) => {
                    handleReplyInputChange(comment.id, e.target.value);
                    adjustTextareaHeight(e.target); // 높이 조정
                  }}
                />
                <PencilIcon
                  className="w-6 cursor-pointer "
                  onClick={() => handleAddReply(comment.id)}
                />
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
