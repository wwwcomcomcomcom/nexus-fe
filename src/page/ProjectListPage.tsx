import { useNavigate } from "react-router-dom";
import ProjectList from "../component/ProjectList.tsx";
import { useUpdatedUserStore } from "../shared/api.ts";
import { useRef } from "react";

export default function ProjectListPage() {
  const navigate = useNavigate();
  const userStore = useUpdatedUserStore();
  const scrollRef = useRef(null);
  return (
    <div className="flex flex-col w-full h-full" ref={scrollRef}>
      <div className="flex flex-row w-full px-10 place-content-center bg-transparent">
        <h1 className="text-3xl font-bold text-center py-10">Projects</h1>
        {userStore.isLogin() && (
          <div className="flex flex-row items-center">
            <button
              className="bg-blue-400 rounded-md h-10 px-3"
              onClick={() => navigate("/createProject")}
            >
              Create Project
            </button>
          </div>
        )}
      </div>
      <ProjectList scrollRef={scrollRef} />
    </div>
  );
}
