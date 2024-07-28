import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";
import PencilIcon from "../component/icons/PencilIcon";
import PostGreenTopBox from "../component/elements/PostGreenTopBox";
import PostGreenBottomBox from "../component/elements/PostGreenBottomBox";
import HeartIcon from "../component/elements/HeartIcon";
import CommentIcon from "../component/elements/CommentIcon";

function PostPage() {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="p-8">
        <span
          className="inline-block p-2 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <main className="flex flex-col pt-10 items-center">
        <div className="w-[700px] h-[700px] rounded-full absolute bg-[#FFF5DB] left-0 -z-10 -translate-x-1/2"></div>
        <div className="w-1/2 flex flex-col">
          <div className="bg-white border border-[#F2F2F2] rounded-3xl w-full shadow-xl mb-24">
            <PostGreenTopBox className="relative -top-9 -left-8 w-[75%]" />
            <div className="gird absolute -translate-y-[20rem]">
              <p className="text-3xl font-bold">임시로 만든 제목</p>
              <div className="flex  py-5">
                <p className="">프로필</p>
                <p className="text-2xl font-normal">송재욱</p>
              </div>
              <div className="text-sm text-[#757575]">
                <p>2024년 7월 29일</p>
                <p>오후 12:04</p>
              </div>
            </div>
            <p className="mx-16 mt-3">
              임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
              적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
              적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
              적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
              적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
              적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글
              게시글임시로 적는 게시글임시로 적는 게시글 게시글임시로 적는
              게시글 게시글임시로 적는 게시글 게시글임시로 적는 게시글
              게시글임시로 적는 게시글 게시글임시로 적는 게시글임시로 적는
              게시글 게시글임시로 적는 게시글 게시글임시로 적는 게시글
              게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글
              게시글임시로 적는 게시글 게시글
            </p>
            <div className="flex justify-end">
              <div className="translate-x-8 translate-y-16 w-[50%] relative h-36 flex justify-center items-center">
                <PostGreenBottomBox className="absolute w-full" />
                <div className="w-full flex gap-7 items-center content-center justify-center ml-3">
                  <div className="bg-white rounded-full w-[35%] h-[50px] shadow-lg relative flex justify-between">
                    <HeartIcon className=" pl-[1rem] pt-[0.7rem] cursor-pointer " />
                    <p className="pr-[1rem] pt-[0.7rem]">37</p>
                  </div>
                  <div className="bg-white rounded-full w-[35%] h-[50px] shadow-lg relative flex justify-between">
                    <CommentIcon className="  pt-[0.7rem] cursor-pointer  " />
                    <p className="pr-[1rem] pt-[0.7rem]">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            className="w-full flex mt-10 border border-[#F2F2F2] rounded-full px-6 py-1 shadow-md"
            htmlFor="commentInput"
          >
            <input
              id="commentInput"
              type="text"
              placeholder="댓글을 입력해!"
              className="grow outline-none"
            ></input>
            <PencilIcon className="w-6" />
          </label>
        </div>
      </main>
    </>
  );
}
export default PostPage;
