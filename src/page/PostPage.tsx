import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import PencilIcon from "../component/icons/PencilIcon";
import PostGreenTopBox from "../component/elements/PostGreenTopBox";
import PostGreenBottomBox from "../component/elements/PostGreenBottomBox";
import HeartIcon from "../component/icons/HeartIcon";
import CommentIcon from "../component/icons/CommentIcon";
import { useState } from "react";
import FilledHeartIcon from "../component/icons/FilledHeartIcon";
import { generateProfileEntity } from "../shared/apiMockup";

interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

function PostPage() {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(37);

  const handleLikeToggle = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const profile = generateProfileEntity();

  // 댓글과 대댓글 관리
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [replyInputs, setReplyInputs] = useState<{ [key: number]: string }>({});

  // 댓글 추가 함수
  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        { id: prevComments.length, text: commentInput, replies: [] },
      ]);
      setCommentInput(""); // 댓글 입력 필드 초기화
    }
  };

  // 대댓글 입력 핸들러
  const handleReplyInputChange = (id: number, value: string) => {
    setReplyInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  // 대댓글 추가 함수
  const handleAddReply = (id: number) => {
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
      setReplyInputs((prevInputs) => ({ ...prevInputs, [id]: "" })); // 대댓글 입력 필드 초기화
    }
  };

  return (
    <>
      <div className="px-8 py-4">
        <span
          className="inline-block p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <main className="flex flex-col pt-10 items-center overflow-hidden relative">
        <div className="w-[700px] h-[700px] rounded-full absolute bg-[#FFF5DB] left-0 z-0 -translate-x-1/2"></div>
        <div className="w-[600px] h-[600px] rounded-full absolute bg-[#FFF5DB] right-0 z-0 translate-x-1/3 top-[60rem]"></div>

        <div className="w-1/2 flex flex-col">
          <div className="bg-white border border-[#F2F2F2] rounded-3xl w-full shadow-xl mb-24">
            <PostGreenTopBox className="relative -top-9 -left-8 w-[75%]" />
            <div className="gird absolute -translate-y-[300px] pl-3">
              <p className="text-2xl ">임시로 만든 제목</p>
              <div className="flex py-5">
                <img
                  onClick={() => (window.location.href = `${profile.url}`)}
                  src={profile.imgUrl}
                  alt="profile"
                  className="cursor-pointer flex  h-9 relative rounded-full bg-white shadow-md "
                />
                <div className="text-xl font-[450] p-2 ">{profile.name}</div>
              </div>
              <div className="text-xs text-[#757575] ">
                <p>2024년 7월 29일</p>
                <p>오후 12:04</p>
              </div>
            </div>
            <p className="mx-16 mt-3 font-thin leading-7 text-gray-800 text-sm">
              임시로 적는 본문입니다...
            </p>
            <div className="flex justify-end">
              <div className="translate-x-8 translate-y-16 w-[50%] relative h-36 flex justify-center items-center">
                <PostGreenBottomBox className="absolute w-full" />
                <div className="w-full flex gap-7 items-center content-center justify-center ml-3">
                  <div
                    className="bg-white rounded-full w-[35%] h-[50px] shadow-lg relative flex justify-between cursor-pointer"
                    onClick={handleLikeToggle}
                  >
                    {liked ? (
                      <FilledHeartIcon className="pl-[1rem] pt-[0.7rem]" />
                    ) : (
                      <HeartIcon className="pl-[1rem] pt-[0.7rem]" />
                    )}
                    <p className="pr-[1rem] pt-[0.7rem] text-lg">{likeCount}</p>
                  </div>
                  <div className="bg-white rounded-full w-[35%] h-[50px] shadow-lg relative flex justify-between">
                    <CommentIcon className="pt-[0.7rem] ml-[0.5rem] " />
                    <p className="pr-[1rem] pt-[0.7rem] text-lg">
                      {comments.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 입력 필드 */}
          <label
            className="w-full flex mb-3 mt-10 border border-[#F2F2F2] rounded-full px-6 py-1 shadow-md"
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
            <PencilIcon
              className="w-6 cursor-pointer"
              onClick={handleAddComment}
            />
          </label>

          {/* 댓글 리스트 */}
          <ul className="mt-3 z-20">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-4">
                <div
                  className={`p-4 pt-2 border border-[#F2F2F2] border-10 rounded-3xl bg-white shadow-md ${
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
                        className="p-4 pt-2 border border-[#F2F2F2] border-10 bg-white rounded-3xl shadow-md mb-3 "
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
                          <p className="text-md font-[200] p-2 ">
                            {profile.name}
                          </p>
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
                      placeholder="대댓글을 입력하세요"
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
        </div>
      </main>
    </>
  );
}

export default PostPage;
