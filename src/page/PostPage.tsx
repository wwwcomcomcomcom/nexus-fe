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
      <div className="flex bg-[#FFF5DB] w-[30%] h-96 rounded-full"></div>

      <div className="mx-[5%] py-10 cursor-pointer" onClick={handleClick}>
        <LeftArrowIcon />
      </div>
      <div className="mx-[10%]">
        <GreenTopBox />
      </div>
    </main>
  );
}
export default PostPage;
