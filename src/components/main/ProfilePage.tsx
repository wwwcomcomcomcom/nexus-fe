import { useUpdatedUserStore } from "../../shared/api";
import { getAllProjectEntity } from "../../test/TestVariables";
import ProjectCard from "../card/ProjectCard";

export default function ProfilePage() {
  const { isLogin, user } = useUpdatedUserStore();
  if (isLogin() === false) return <h1>You are not logged in</h1>;
  return (
    <div className="flex justify-center pt-4">
      <aside className="flex flex-col items-center space-x-4 flex-grow basis-0">
        <img
          className="w-52 h-52 rounded-full border-2 border-gray-300"
          src={user.profileImageUrl as string}
          alt="profile"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name as string}</h1>
          <p className="text-gray-500"></p>
        </div>
      </aside>
      <main className="grow-[2] basis-0 flex flex-col gap-4 px-10">
        <div>
          <h1 className="text-2xl font-bold">My Projects</h1>
          <div className="grid grid-cols-2 gap-4 h-[17rem] overflow-y-scroll scrollbar-hide mb-4">
            {getAllProjectEntity(10).map((project) => (
              <ProjectCard key={project.id} project={project} className="h-[8rem]"/>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">My Posts</h1>
          <div className="grid grid-cols-2 gap-4 h-[17rem] overflow-y-scroll scrollbar-hide mb-4">
            <h1>TODO:Impl post card</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
