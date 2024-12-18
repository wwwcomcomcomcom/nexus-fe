import { useNavigate } from "react-router-dom";
import ProjectList from "../component/ProjectList.tsx";
import { useUpdatedUserStore } from "../shared/userApi.ts";
import { useRef } from "react";

export default function ProjectListPage() {
  const navigate = useNavigate();
  const userStore = useUpdatedUserStore();
  const scrollRef = useRef(null);
  return (
    <div className="flex flex-col w-full h-full" ref={scrollRef}>
      <div className="flex w-full px-10 place-content-center bg-transparent">
        <div className="relative py-10">
          <h1 className="text-3xl font-bold">Projects</h1>
          {userStore.isLogin() && (
            <div className="flex w-44 items-center place-content-center absolute top-10 left-40">
              <button
                className="bg-blue-400 rounded-md h-10 px-3"
                onClick={() => navigate("/createProject")}
              >
                Create Project
              </button>
            </div>
          )}
        </div>
      </div>
      <ProjectList scrollRef={scrollRef} />
    </div>
  );
}
