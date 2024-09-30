import { useCallback, useState, useRef } from "react";
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

  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const replyInputRefs = useRef<{ [key: number]: HTMLTextAreaElement | null }>(
    {}
  );

  const profile = generateProfileEntity();

  // 댓글 추가
  const handleAddComment = useCallback(() => {
    if (commentInput.trim()) {
      setComments((prevComments) => [
        ...prevComments,
        { id: prevComments.length, text: commentInput, replies: [] },
      ]);
      setCommentInput("");

      // 댓글 입력창 높이 초기화
      if (commentInputRef.current) {
        commentInputRef.current.style.height = "auto";
      }
    }
  }, [commentInput]);

  // 대댓글 입력값 변경 처리
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

        // 대댓글 입력창 높이 초기화
        if (replyInputRefs.current[id]) {
          replyInputRefs.current[id]!.style.height = "auto";
        }
      }
    },
    [replyInputs]
  );

  // textarea 높이 자동 조정
  const adjustTextareaHeight = (element: HTMLTextAreaElement) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <>
      {/* 댓글 입력 필드 */}
      <label
        className="w-full flex items-center mb-3 border border-[#F2F2F2] rounded-[30px] px-6 py-1 shadow-md"
        htmlFor="commentInput"
      >
        <textarea
          id="commentInput"
          ref={commentInputRef} // 댓글 입력창 ref
          rows={1}
          style={{ overflow: "hidden", resize: "none" }}
          placeholder="댓글을 최대 500자까지 입력할 수 있어요."
          className="grow outline-none"
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
            adjustTextareaHeight(e.target);
          }}
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
                <p className="text-md font-[200] p-2">{profile.name}</p>
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
                    className="p-4 pt-2 border border-[#F2F2F2] bg-white rounded-3xl shadow-md mb-3"
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
                      <p className="text-md font-[200] p-2">{profile.name}</p>
                    </div>
                    {reply.text}
                  </li>
                ))}
              </div>

              {/* 대댓글 입력 필드 */}
              <label
                className="w-full flex items-center mb-3 border border-[#F2F2F2] bg-white rounded-[30px] px-6 py-1 shadow-md"
                htmlFor="replyInput"
              >
                <textarea
                  rows={1}
                  ref={(el) => (replyInputRefs.current[comment.id] = el)}
                  style={{ overflow: "hidden", resize: "none" }}
                  placeholder="대댓글을 입력하세요."
                  className="grow outline-none mt-2 mr-2"
                  value={replyInputs[comment.id] || ""}
                  onChange={(e) => {
                    handleReplyInputChange(comment.id, e.target.value);
                    adjustTextareaHeight(e.target);
                  }}
                />
                <PencilIcon
                  className="w-6 cursor-pointer"
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
