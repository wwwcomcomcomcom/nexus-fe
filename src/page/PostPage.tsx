import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";
import PencilIcon from "../component/icons/PencilIcon";
import PostGreenTopBox from "../component/elements/PostGreenTopBox";
import PostGreenBottomBox from "../component/elements/PostGreenBottomBox";

function PostPage() {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="p-8">
        <span className="inline-block p-2" onClick={() => navigate(-1)}>
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <main className="flex flex-col pt-10 items-center">
        <div className="w-[700px] h-[700px] rounded-full absolute bg-[#FFF5DB] left-0 -z-10 -translate-x-1/2"></div>
        <div className="w-1/2 flex flex-col">
          <div className="bg-white border border-[#F2F2F2] rounded-3xl w-full shadow-xl mb-24">
            <PostGreenTopBox className="relative -top-9 -left-8 w-[75%]" />
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
              <PostGreenBottomBox className=" translate-x-8 translate-y-16 w-[50%]" />
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
        {/* <div className="grid gap-4 px-4 md:gap-8 md:px-6 w-[40%] z-0 relative ">
          <div className="flex bg-[#FFF5DB] w-[700px] h-[700px] rounded-full z-0 absolute top-56 -translate-x-64"></div>
        </div>
        <div className="mx-[10%] items-center relative ">
          <div className="relative">
            <div className="flex-col absolute flex z-40 ">
              <GreenTopBox />
            </div>
            <div className=" flex justify-center rounded-[40px] shadow-xl bg-white border border-[#F2F2F2] z-0 px-16 w-[80%] ml-36 pt-[29rem] pb-[6rem] translate-y-16">
              <p className="">
                임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글임시로
                적는 게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글임시로 적는
                게시글임시로 적는 게시글임시로 적는 게시글 게시글임시로 적는
                게시글임시로 적는 게시글 게시글임시로 적는 게시글 게시글임시로
                적는 게시글 게시글임시로 적는 게시글 게시글임시로 적는 게시글
                게시글임시로 적는 게시글임시로 적는 게시글 게시글임시로 적는
                게시글 게시글임시로 적는 게시글 게시글임시로 적는 게시글
              </p>
              <div className="absolute flex flex-col z-40 translate-x-[40%] translate-y-[10rem] ">
                <PostUnderGreenBox />
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
export default PostPage;
