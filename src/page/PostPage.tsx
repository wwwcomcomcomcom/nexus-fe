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
            <div className="-translate-y-10">
              <PostGreenTopBox className="relative -left-10 w-[75%] " />
              <div className="gird absolute -translate-y-[200px] pl-3">
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
            </div>
            <p className="mx-16 mt-10 font-thin leading-7 text-gray-800 text-sm">
              임시로 적는 본문입니다. 이 글이 중간 발표때까지 살아남을지
              의문스럽습니다. 저는 프론트엔드 개발을 하려고 했는데 왜
              유아이유엑스 디자인을 하고 있는지 아직도 잘 모르겠습니다. 그런데
              디자인이 꽤 재미있다는 사실을 여러분은 알고계셨나요? 오늘
              점심시간에 학생회에서 블루레몬에이드랑 미숫가루를 팔고 판매금액을
              기부한다고 합니다. 제가 저희반 애 들 다끌고가서 사줄라고
              계획중입니다. 조금 길게 써놔야 뭔가 진짜 게시물 같고 뭐 그런
              느낌이 나니까요. 더 써보겠습니다. 사실 일 하기 싫어서 노가리
              까는중입니다. 옆에서 세민이는 열심히 개발을 하고 있습니다.
              프론트엔드에게 디자 인을 시킨 최후라고 할 수 있죠. 아까 윤시연쌤이
              저한테 에이아이 배우라고 했습니다. 진짜 얼척엑스인게 프론트
              엔드인데 아이디어 페스티벌에서 에이아이를 하게 됐습니다. 제가
              시험을 망쳤습니다. 다른 과목은 양호한데 수학을 진짜 개 망쳤습니다.
              제가 공부를 안한 대가이니 상실감이 크지는 않지만 명희쌤을 볼
              면목이 없습니다. 더 쓸 말이 없네요. 개소리 여기까지 하겠습니다.
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
                      {/* {comments.length} */}
                      42
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Comments />
        </div>
      </main>
    </>
  );
}

export default PostPage;
