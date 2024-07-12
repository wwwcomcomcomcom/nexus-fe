// import { DivProps } from "../../utils/typedef.ts";
import { useParams } from "react-router-dom";
import GreenTopBox from "../component/elements/greenTopBox";

function ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  return (
    <main className="">
      {/* Top Section */}
      {/* <section className="grid gap-6 md:grid-cols-3 mb-8"> */}
      {/* <div className="flex flex-col gap-2 shadow-lg p-4"> */}
      {/* <h1 className="font-semibold text-3xl">Cloud Base</h1>
          <h2 className="text-lg font-medium text-gray-600">
            A collaborative platform
          </h2>
          <p className="text-sm text-gray-500">Status: Active</p> */}
      {/* </div> */}
      {/* <div className="flex flex-col gap-2 shadow-lg p-8"> */}
      {/* <h2 className="text-lg font-semibold">Commit Count</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Total Commits</span>
              <span className="font-medium">1,234</span>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      SD
                    </span>
                  </span>
                  <span>Sofia Davis</span>
                </div>
                <span className="font-medium">567</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      JD
                    </span>
                  </span>
                  <span>John Doe</span>
                </div>
                <span className="font-medium">321</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      OM
                    </span>
                  </span>
                  <span>Olivia Martin</span>
                </div>
                <span className="font-medium">346</span>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* <div className="flex flex-col gap-2 shadow-lg p-8"> */}
      {/* <h2 className="text-lg font-semibold">Project Team</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    SD
                  </span>
                </span>
                <div>
                  <p className="font-medium">Sofia Davis</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    JD
                  </span>
                </span>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    OM
                  </span>
                </span>
                <div>
                  <p className="font-medium">Olivia Martin</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div> */}
      {/* </section> */}

      <div className="relative my-20">
        <GreenTopBox
          width={350}
          height="auto"
          className="fixed -translate-y-72 translate-x-32 z-0"
        />
        <h1 className="fixed text-5xl font-extrabold bg-white translate-x-28 p-4 px-6 rounded-full border-[#F1F1F1] border-[1px] shadow-lg z-20">
          NEXUS
        </h1>
        <section className="block bg-[#F4F9FF] rounded-l-3xl ml-56 align-start p-8 max-h-[70vh] overflow-y-auto z-20">
          <h2 className="text-xs pb-7 pt-1 text-[#565656]">프로젝트 내용</h2>
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
