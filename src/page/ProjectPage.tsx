import { useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";

function ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  return (
    <main className="">
      <div className="relative my-20 pt-10">
        <div className="relative ">
          <GreenTopBox className="absolute top-[-70px] ml-64 z-10 h-auto w-[30%]" />
          <div className="absolute top-[100px] left-[300px] z-30 flex items-center space-x-4 ">
            <a className="grid text-[#757575] text-sm">
              NEXUS 안의 NEXUS ?? 뿌슝빠슝
            </a>
            <h1 className="inline-block gird text-5xl font-extrabold bg-white p-4 px-6 rounded-full border-[#F1F1F1] border-[1px] shadow-lg">
              NEXUS
            </h1>
            <span className="bg-green-500 text-white py-2 px-4 rounded-full grid">
              진행중
            </span>
          </div>
          <section className="block bg-[#F4F9FF] rounded-l-3xl ml-[25%] align-start py-28 pl-[20%] max-h-[70vh] overflow-y-auto z-50">
            <h2 className="text-xs pb-7 pt-1 text-[#565656] z-20">
              프로젝트 내용
            </h2>
            <p className="">
              예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음 해보는데 정말
              어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는 것처럼 보여서
              쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지 하겠습니다.
              감사합니다.예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음
              해보는데 정말 어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는
              것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지
              하겠습니다. 감사합니다.예시로 쓰는 프로젝트 소개입니다.
              유아이유엑스 처음 해보는데 정말 어렵네요. 키보드를 일단 치고
              있으면 뭔가 일 하는 것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것
              같으니 여기까지 하겠습니다. 감사합니다.
            </p>
          </section>
        </div>
      </div>

      <div className="relative my-0">
        <section className="block bg-[#F4F9FF] rounded-r-3xl mr-52 align-start p-8 max-h-[70vh] overflow-y-auto z-20">
          <h1 className="text-2xl font-semibold">프로젝트 소개</h1>
          <h2 className="text-xs pb-7 pt-1 text-[#565656]">프로젝트 내용</h2>
          <p className="">
            예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음 해보는데 정말
            어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는 것처럼 보여서 쓰고
            있습니다. 계속 하면 들킬 것 같으니 여기까지 하겠습니다. 감사합니다.
          </p>
        </section>
      </div>
    </main>
  );
}

export default ProjectPage;
