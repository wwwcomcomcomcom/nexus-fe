import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import PostGreenTopBox from "../component/elements/PostGreenTopBox";
import PostGreenBottomBox from "../component/elements/PostGreenBottomBox";
import HeartIcon from "../component/icons/HeartIcon";
import CommentIcon from "../component/icons/CommentIcon";
import { useState, useCallback } from "react";
import FilledHeartIcon from "../component/icons/FilledHeartIcon";
import { generateProfileEntity } from "../shared/apiMockup";
import Comments from "../component/Comments";

function PostPage() {
  const profileImageUrl =
    "https://avatars.githubusercontent.com/u/68013923?v=4";

  const param = useParams();
  const navigate = useNavigate();

  // param.id가 undefined인지 확인하고 /notfound로 리다이렉션
  if (!param.id) {
    window.location.href = "/notfound";
  }

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(37);

  const profile = generateProfileEntity();

  const handleLikeToggle = useCallback(() => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  }, [liked]);

  return (
    <>
      <div className="px-4 py-2 sm:px-8 sm:py-4">
        <span
          className="inline-block p-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <main className="flex flex-col pt-10 items-center min-h-screen overflow-hidden relative">
        {/* 베경 무늬*/}
        <div className="w-[50vw] h-[50vw] sm:w-[700px] sm:h-[700px] rounded-full absolute bg-[#FFF5DB] left-0 z-0 -translate-x-1/2"></div>
        <div className="w-[40vw] h-[40vw] sm:w-[600px] sm:h-[600px] rounded-full absolute bg-[#FFF5DB] right-0 z-0 translate-x-1/3 top-[60rem]"></div>

        {/* 게시글 내용 컨테이너 */}
        <div className="w-full max-w-[600px] flex flex-col z-10 relative">
          <div className="bg-white border border-[#F2F2F2] rounded-3xl w-full shadow-xl mb-24 z-1">
            {/* Post content */}
            <div className="-translate-y-10">
              <PostGreenTopBox className="relative -left-10 w-[75%]" />
              <div className="grid absolute -translate-y-[200px] pl-3">
                <p className="text-2xl">넥서스를 만들며..</p>
                <div className="flex py-5">
                  <img
                    onClick={() =>
                      (window.location.href = `/profile/${profile.id}`)
                    }
                    src={profileImageUrl}
                    alt="profile"
                    className="cursor-pointer flex h-9 relative rounded-full bg-white shadow-md"
                  />
                  <div className="text-xl font-[450] p-2">이세민</div>
                </div>
                <div className="text-xs text-[#757575] ">
                  <p>2024년 12월 30일</p>
                  <p>오후 12:04</p>
                </div>
              </div>
            </div>
            <p className="mx-4 sm:mx-16 mt-10 font-thin leading-7 text-gray-800 text-sm">
              이번 프로젝트는 정말 유익한 경험이었습니다. 협업과 소통의 중요성을
              다시 한 번 깨닫게 되었고, 프로젝트를 성공적으로 진행할 수
              있었습니다. 다음 프로젝트에서는 명확한 명세 작성과 체계적인 회의를
              통해 역할을 더욱 효과적으로 분담하고, 효율적인 협업을 이루고자
              합니다.
            </p>
            <div className="flex justify-end">
              <div className="translate-x-8 translate-y-16 w-[50%] relative h-36 flex justify-center items-center">
                <PostGreenBottomBox className="absolute w-full" />
                <div className="w-full flex gap-7 items-center justify-center ml-3">
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
                    <CommentIcon className="pt-[0.7rem] ml-[0.5rem]" />
                    <p className="pr-[1rem] pt-[0.7rem] text-lg">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 댓글 */}
          <div className=" p-4">
            <Comments />
          </div>
        </div>
      </main>
    </>
  );
}

export default PostPage;
