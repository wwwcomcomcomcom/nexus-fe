import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "../component/elements/LeftArrowIcon";
import ProjectGreenTopBox from "../component/elements/ProjectGreenTopBox";
import ProfileCard from "../component/projectCard/ProfileCard";

function ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-24">
      <ProfileCard
        profile={{
          name: "정효주",
          url: "https://github.com/jhj080802",
          imgUrl: "https://avatars.githubusercontent.com/u/164720957?v=4",
          role: "FrontEnd",
        }}
      />
      {/* {getAllProjectEntity(10).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="h-[8rem]"
            />
          ))} */}
      <div className="p-8">
        <span
          className="inline-block p-2 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>
      <div className="w-full h-[70vh] flex justify-end">
        <div className="md:w-2/3 w-full h-full bg-[#F4F9FF] rounded-[3rem] relative rounded-r-none">
          <div className="absolute w-full h-fit flex justify-start items-start -translate-x-10 -translate-y-10 max-md:translate-x-0">
            <ProjectGreenTopBox className="w-1/2 max-w-[30rem] h-fit max-md:w-1/2" />
            <div className="absolute text-[#757575] top-[25%] left-[8%]">
              NEXUS 안에 NEXUS ?? 뿌슝빠슝
            </div>
            <div className="absolute bg-white rounded-full text-6xl font-extrabold py-5 px-10 translate-y-1/2 -translate-x-[80%] shadow-xl">
              NEXUS
              <div className="absolute bg-white shadow-xl flex items-center gap-2 rounded-full p-2 pr-4 border border-gray-200 translate-x-[115%]">
                <div className="w-8 h-8 rounded-full bg-orange-400"></div>
                <div className="text-2xl">모집중</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-start">
        <div className="md:w-2/3 w-full h-full bg-[#F4F9FF] rounded-[3rem] relative rounded-l-none ">
          <div className="p-16 pr-32">
            <div>
              <p className="font-extrabold text-2xl">프로젝트 소개</p>
              <div className="text-[#565656] text-sm py-3">프로젝트 내용</div>
            </div>
            <div className="py-16">
              <p>
                예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음 해보는데 정말
                어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는 것처럼 보여서
                쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지 하겠습니다.
                감사합니다.예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음
                해보는데 정말 어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는
                것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지
                하겠습니다. 감사합니다.예시로 쓰는 프로젝트 소개입니다.
                유아이유엑스 처음 해보는데 정말 어렵네요. 키보드를 일단 치고
                있으면 뭔가 일 하는 것처럼 보여서 쓰고 있습니다. 계속 하면 들킬
                것 같으니 여기까지 하겠습니다. 감사합니다.예시로 쓰는 프로젝트
                소개입니다. 유아이유엑스 처음 해보는데 정말 어렵네요. 키보드를
                일단 치고 있으면 뭔가 일 하는 것처럼 보여서 쓰고 있습니다. 계속
                하면 들킬 것 같으니 여기까지 하겠습니다. 감사합니다.예시로 쓰는
                프로젝트 소개입니다. 유아이유엑스 처음 해보는데 정말 어렵네요.
                키보드를 일단 치고 있으면 뭔가 일 하는 것처럼 보여서 쓰고
                있습니다. 계속 하면 들킬 것 같으니 여기까지 하겠습니다.
                감사합니다..예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음
                해보는데 정말 어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는
                것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지
                하겠습니다. 감사합니다.예시로 쓰는 프로젝트 소개입니다.
                유아이유엑스
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[70vh] flex justify-end">
        <div className="md:w-2/3 w-full h-full bg-[#F4F9FF] rounded-[3rem] relative rounded-r-none">
          <div className="p-10">
            <div className="font-extrabold text-2xl">git 그래프</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
