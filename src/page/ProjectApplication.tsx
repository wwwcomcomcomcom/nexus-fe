import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";

export default function ProjectApplication() {
  const navigate = useNavigate();

  return (
    <div className="py-8">
      <div className="pl-8 pb-4">
        <span
          className="inline-block p-2 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>

      <div className="text-center font-bold text-3xl mb-6">Application</div>
      <div className="w-full h-[100vh] flex justify-end">
        <div className="md:w-3/4 w-full h-full bg-[#F4F9FF] rounded-[3rem] relative rounded-r-none"></div>
      </div>
    </div>
  );
}
