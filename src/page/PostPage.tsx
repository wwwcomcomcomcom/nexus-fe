import { useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";

function PostPage() {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  const handleClick = () => {
    window.history.back();
  };

  return (
    <main>
      <div className="grid gap-4 px-4 md:gap-8 md:px-6 w-[40%] z-0 relative ">
        <div className="flex bg-[#FFF5DB] w-[700px] h-[700px] rounded-full z-0 absolute top-56 -translate-x-64"></div>
      </div>
      <div className="mx-[5%] py-10 cursor-pointer" onClick={handleClick}>
        <LeftArrowIcon />
      </div>
      <div className="mx-[10%] items-center">
        <div className="flex justify-center rounded-[40px] shadow-xl bg-white border z-50  px-16 w-[80%] ml-36 pt-[29rem] pb-[6rem] translate-y-16">
          <p className="">
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
            게시글임시로 적는 게시글임시로 적는 게시글임시로 적는 게시글{" "}
          </p>
        </div>
        <div className="flex z-30 -translate-y-[46rem]">
          <GreenTopBox />
        </div>
      </div>
    </main>
  );
}
export default PostPage;
