import { useUpdatedUserStore } from "../shared/userApi.ts";
import {
  generateProfileEntity,
  getAllPostEntity,
  getAllProjectEntity,
} from "../shared/apiMockup.ts";
import ProjectCard from "../component/projectCard/ProjectCard.tsx";
import PostCard from "../component/projectCard/PostCard.tsx";

const profile = generateProfileEntity();

export default function ProfilePage() {
  const { isLogin, user } = useUpdatedUserStore();
  // const { user } = useUpdatedUserStore();

  if (isLogin() === false) return <h1>You are not logged in</h1>;
  return (
    <div className="flex justify-center pt-24">
      <div className="flex flex-col items-center  w-[27%] rounded-3xl bg-[#F4F9FF]">
        <div className="flex flex-row w-full">
          <div className="grow flex items-center justify-center translate-x-[35%] gap-10 n">
            <div className="flex flex-col pt-10">
              <h1 className="text-4xl">{profile.role}</h1>
              <h1 className="text-4xl font-extrabold pt-1">{profile.name}</h1>
              <h1 className="text-2xl font-bold">{user.name as string}</h1>
              <p className="text-gray-500 my-9 text-2xl">한마디 ㅋ</p>
            </div>
            <img
              className=" w-[20rem] h-[20rem] rounded-full shadow-md "
              src={user.profileImageUrl as string}
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="grow basis-0 flex gap-10 pl-52 items-start">
        {/* 프로젝트 */}
        <div className="py-10 flex flex-col items-start w-fit">
          <h1 className="text-2xl font-bold px-2 pb-3 ">Projects</h1>
          <div className="grid grid-cols-2 h-[50rem] w-fit gap-7  overflow-y-scroll scrollbar-hide mb-4 p-4 place-items-center">
            {getAllProjectEntity(10).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="h-[8rem]"
              />
            ))}
          </div>
        </div>
        {/* 포스트 */}
        <div className="py-10 pr-10 flex flex-col items-start w-[60%] ">
          <h1 className="text-2xl font-bold pb-3">Posts</h1>
          <div className="gap-7 h-[50rem] overflow-y-scroll scrollbar-hide ">
            {/* <div className="flex flex-col gap-6"> */}
            {getAllPostEntity(10).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
