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

            {/* 여기 부분 확인 */}
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
                className="w-full flex mb-3 border border-[#F2F2F2] bg-white rounded-full px-6 py-1 shadow-md"
                htmlFor="commentInput"
              >
                <input
                  type="text"
                  placeholder="대댓글을 입력하세요. "
                  className="grow outline-none"
                  value={replyInputs[comment.id] || ""}
                  onChange={(e) =>
                    handleReplyInputChange(comment.id, e.target.value)
                  }
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
