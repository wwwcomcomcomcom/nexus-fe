import { useUpdatedUserStore } from "../shared/api.ts";
import { getAllPostEntity, getAllProjectEntity } from "../shared/apiMockup.ts";
import ProjectCard from "../component/projectCard/ProjectCard.tsx";
// import { getElement } from "@egjs/react-flicking";
import PostCard from "../component/projectCard/PostCard.tsx";

export default function ProfilePage() {
  const { isLogin, user } = useUpdatedUserStore();
  if (isLogin() === false) return <h1>You are not logged in</h1>;
  return (
    <div className="flex justify-center pt-20">
      <div className="flex flex-col items-center space-x-4 grow basis-0 bg-[url('profile-bg.svg')]">
        <div className="flex flex-row w-full">
          <div className="grow flex items-center justify-center">
            <div className="flex flex-col pt-10">
              <h1 className="text-3xl">FrontEnd</h1>
              <h1 className="text-3xl font-extrabold pt-1">송재욱</h1>
              <h1 className="text-2xl font-bold">{user.name as string}</h1>
              <p className="text-gray-500 my-9">한마디 ㅋ</p>
              <div className="flex gap-6 text-center">
                <div className="flex flex-col cursor-pointer">
                  <a className="font-bold">Follower</a>
                  <a>514</a>
                </div>
                <div className="flex flex-col cursor-pointer">
                  <a className="font-bold">Following</a>
                  <a>519</a>
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            <img
              className="w-64 h-64 rounded-full shadow-inner translate-x-3"
              src={user.profileImageUrl as string}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="grow basis-0 flex flex-col px-14 items-center">
        <h1 className="text-2xl font-bold px-2 pb-3 ">Projects</h1>
        <div className="grid grid-cols-2 h-[35rem] w-fit gap-7  overflow-y-scroll scrollbar-hide mb-4 p-4 place-items-center">
          {getAllProjectEntity(10).map((project) => (
            <ProjectCard key={project.id} project={project} className="h-[8rem]" />
          ))}
        </div>
        <div className="py-10 flex flex-col items-center">
          <h1 className="text-2xl font-bold pb-3">Posts</h1>
          <div className="grid gap-y-4 h-[24.5rem] overflow-y-scroll scrollbar-hide p-4 w-[80%]">
            {getAllPostEntity(10).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
