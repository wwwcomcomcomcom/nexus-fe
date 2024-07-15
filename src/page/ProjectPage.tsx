import { useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";

function ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  return (
    <main className="">
      <div className="relative my-20">
        <GreenTopBox
          width={350}
          height="auto"
          className="absolute top-[-50px] left-[50px] z-10"
        />
        <div className="absolute top-[100px] left-[150px] z-20 flex items-center space-x-4 ">
          <h1 className="inline-block text-5xl font-extrabold bg-white p-4 px-6 rounded-full border-[#F1F1F1] border-[1px] shadow-lg">
            NEXUS
          </h1>
          <span className="bg-green-500 text-white py-2 px-4 rounded-full">
            진행중
          </span>
        </div>

        <section className="block bg-[#F4F9FF] rounded-l-3xl ml-[35%] align-start p-8 max-h-[70vh] overflow-y-auto z-20">
          <h2 className="text-xs pb-7 pt-1 text-[#565656] z-20">
            프로젝트 내용
          </h2>
          <p className="">
            예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음 해보는데 정말
            어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는 것처럼 보여서 쓰고
            있습니다. 계속 하면 들킬 것 같으니 여기까지 하겠습니다.
            감사합니다.예시로 쓰는 프로젝트 소개입니다. 유아이유엑스 처음
            해보는데 정말 어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는
            것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지
            하겠습니다. 감사합니다.예시로 쓰는 프로젝트 소개입니다. 유아이유엑스
            처음 해보는데 정말 어렵네요. 키보드를 일단 치고 있으면 뭔가 일 하는
            것처럼 보여서 쓰고 있습니다. 계속 하면 들킬 것 같으니 여기까지
            하겠습니다. 감사합니다.
          </p>
        </section>
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
