// import { DivProps } from "../../utils/typedef.ts";
import { useParams } from "react-router-dom";


function  ProjectPage(/*props: DivProps*/) {
  const param = useParams();
  if (param.id === undefined) {
    window.location.href = "/notfound";
  }

  return (
    <main className="grid gap-6 md:grid-cols-3 p-8 md:h-[100vh]">
      <div className="flex flex-col gap-2 shadow-lg p-4">
        <h1 className="font-semibold flex-grow-0 text-3xl">Cloud Base</h1>
        <br/>
        <div>This is a repository description</div>
      </div>
      <div className="flex flex-col gap-2 shadow-lg p-8">
        <h2 className="text-lg font-semibold">Commit Count</h2>
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
        </div>
      </div>
      <div className="flex flex-col gap-2 shadow-lg p-8">
        <h2 className="text-lg font-semibold">Project Team</h2>
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
        </div>
      </div>
    </main>
  );
}

export default ProjectPage;
