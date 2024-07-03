import { useNavigate } from "react-router-dom";
import ProjectList from "../component/ProjectList.tsx";
import { useUpdatedUserStore } from "../shared/api.ts";

export default function ProjectListPage() {
  const navigate = useNavigate();
  const userStore = useUpdatedUserStore();
  return (
    <div className="flex flex-col w-full h-full mt-2">
      <div className="flex flex-row w-full px-10 place-content-between">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-gray-500">List of all projects</p>
        </div>
        {
          userStore.isLogin() && <div className="flex flex-row items-center">
          <button className="bg-blue-400 rounded-md h-10 px-3" onClick={()=>navigate("/createProject")}>Create Project</button>
        </div>
        }
        
      </div>
      <ProjectList />
    </div>
  );
}
