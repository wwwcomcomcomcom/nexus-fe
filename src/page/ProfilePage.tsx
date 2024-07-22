import { useUpdatedUserStore } from "../shared/api.ts";
import { getAllPostEntity, getAllProjectEntity } from "../shared/apiMockup.ts";
import ProjectCard from "../component/projectCard/ProjectCard.tsx";
// import { getElement } from "@egjs/react-flicking";
import PostCard from "../component/projectCard/PostCard.tsx";

export default function ProfilePage() {
  const { isLogin, user } = useUpdatedUserStore();
  if (isLogin() == false) return <h1>You are not logged in</h1>;
  return (
    <div className="flex justify-center pt-16">
      <div className="flex flex-col items-center space-x-4 grow basis-0 bg-[url('profile-bg.svg')]">
        <div className="flex flex-row w-full">
          <div className="grow flex items-center justify-center">
            <div className="flex flex-col">
              <h1 className="text-2xl">FrontEnd</h1>
              <h1 className="text-2xl font-bold">{user.name as string}</h1>
              <p className="text-gray-500 mt-10">한마디 ㅋ</p>
            </div>
          </div>
          <div className="grow">
            <img
              className="w-52 h-52 rounded-full shadow-inner"
              src={user.profileImageUrl as string}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="grow basis-0 flex flex-col gap-4 px-14">
        <div>
          <h1 className="text-2xl font-bold px-2 pb-3">Projects</h1>
          <div className="grid grid-cols-2 gap-y-4 h-[34rem] w-3/4 overflow-y-scroll scrollbar-hide mb-4 p-4">
            {getAllProjectEntity(10).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="h-[8rem]"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold pb-3">Posts</h1>
          <div className="grid gap-y-4 h-[24rem] overflow-y-scroll scrollbar-hide p-4 w-[80%]">
            {getAllPostEntity(10).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
