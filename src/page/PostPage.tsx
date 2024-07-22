import { useNavigate, useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";
import PostUnderGreenBox from "../component/elements/PostUnderGreenBox";

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
        <div className="w-4/5">
          <div className="bg-white border border-[#F2F2F2] rounded-xl w-full shadow-xl">
            <GreenTopBox className="relative -top-16 -left-16" />
            <p className="mx-16">
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
              게시글임시로 적는 게시글
            </p>
            <PostUnderGreenBox />
          </div>
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
