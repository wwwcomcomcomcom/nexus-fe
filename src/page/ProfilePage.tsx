import { useEffect, useState } from "react";
import { useUpdatedUserStore } from "../shared/userApi";
import ProjectCard from "../component/projectCard/ProjectCard";
import PostCard from "../component/projectCard/PostCard";
import axios from "axios";
import { ApiBaseUrl } from "../shared/apiConfig";
import { ProjectEntity } from "../entity/ProjectEntity";
import { PostEntity } from "../entity/PostEntity";
import Loading from "../component/Loading";

interface UserProfile {
  id: number;
  name: string;
  profileImageUrl: string;
  githubUrl?: string;
  role?: string;
  bio?: string;
}

export default function ProfilePage() {
  const { isLogin, user } = useUpdatedUserStore();
  const [projects, setProjects] = useState<ProjectEntity[]>([]);
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isLogin() || !user) return;

      try {
        setLoading(true);

        // 프로필 정보 가져오기
        // const profileResponse = await axios.get(`${ApiBaseUrl}/api/user/info`);

        setProfile(user as unknown as UserProfile);

        // 프로젝트 목록 가져오기
        const projectsResponse = await axios.get(
          `${ApiBaseUrl}/api/project/`
          // `${ApiBaseUrl}/api/project/user/${user.id}`
        );
        setProjects(projectsResponse.data);

        // 포스트 목록 가져오기
        const postsResponse = await axios.get(
          `${ApiBaseUrl}/api/post`
          // `${ApiBaseUrl}/api/post/user/${user.id}`
        );
        setPosts(postsResponse.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (!isLogin()) return <h1>로그인하세요;</h1>;
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!profile) return <div>프로필 정보가 없습니다.</div>;

  return (
    <div className="flex justify-center pt-24">
      <div className="flex flex-col items-center w-[27%] rounded-3xl bg-[#F4F9FF]">
        <div className="flex flex-row w-full">
          <div className="grow flex items-center justify-center translate-x-[35%] gap-10">
            <div className="flex flex-col pt-10">
              <h1 className="text-4xl">{profile.role || "프론트엔드"}</h1>
              <h1 className="text-4xl font-extrabold pt-1">{profile.name}</h1>
              <p className="text-gray-500 my-9 text-2xl">
                {profile.bio || "-"}
              </p>
            </div>
            <img
              className="w-[20rem] h-[20rem] rounded-full shadow-md"
              src={profile.profileImageUrl}
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="grow basis-0 flex gap-10 pl-52 items-start">
        {/* 프로젝트 */}
        <div className="py-10 flex flex-col items-start w-fit">
          <h1 className="text-2xl font-bold px-2 pb-3">Projects</h1>
          <div className="grid grid-cols-2 h-[50rem] w-fit gap-7 overflow-y-scroll scrollbar-hide mb-4 p-4 place-items-center">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="h-[8rem]"
              />
            ))}
          </div>
        </div>

        {/* 포스트 */}
        <div className="py-10 pr-10 flex flex-col items-start w-[60%]">
          <h1 className="text-2xl font-bold pb-3">Posts</h1>
          <div className="gap-7 h-[50rem] overflow-y-scroll scrollbar-hide">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
