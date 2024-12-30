import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LeftArrowIcon from "../component/icons/LeftArrowIcon";
import NeedCard from "../component/projectCard/NeedCard";
import ProfileCard from "../component/projectCard/ProfileCard";
// import { getAllNededEntity, getAllProfileEntity } from "../shared/apiMockup"; <-- 목업 데이터 제거
import ProjectGreenTopBox from "../component/elements/ProjectGreenTopBox";
import IntroduceProject from "./IntroduceProject";
import { getStatusColorSet } from "../component/projectCard/projectStatus";
import GitGraph from "./GitGraph";
import axios from "axios";
import Loading from "../component/Loading";
import { ProjectEntity } from "../entity/ProjectEntity";
import { ProfileEntity } from "../entity/ProfileEntity";
import { ApiBaseUrl } from "../shared/apiConfig";

export async function getUserProfile(userId: number): Promise<ProfileEntity | null> {
  try {
    const response = await axios.get(`${ApiBaseUrl}/api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

function ProjectPage() {
  const [project, setProject] = useState<ProjectEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [memberProfiles, setMemberProfiles] = useState<ProfileEntity[]>([]);

  useEffect(() => {
    if (!id) {
      window.location.href = "/notfound";
      return;
    }

    axios
      .get(`/api/project/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setProject(res.data);
        } else {
          throw new Error("Invalid response");
        }
      })
      .catch((error) => {
        console.error("Error loading project:", error);
        window.location.href = "/notfound";
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (project?.members) {
      Promise.all(project.members.map((memberId) => getUserProfile(memberId))).then(
        (profiles: (ProfileEntity | null)[]) => {
          setMemberProfiles(profiles.filter((profile): profile is ProfileEntity => profile !== null));
        }
      );
    }
  }, [project]);

  if (!id) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!project) {
    return <div>프로젝트 정보를 불러올 수 없습니다.</div>;
  }

  const colorSet = getStatusColorSet(project.state);

  return (
    <main className="flex flex-col gap-24 mb-10">
      {/* 이전 페이지로 돌아가기 버튼 */}
      <div className="p-8">
        <span className="inline-block p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <LeftArrowIcon className="w-3 h-auto" />
        </span>
      </div>

      {/* 제목 설명 인력 */}
      <div className="flex justify-end">
        <div className="w-[70%] h-[70vh] flex items-center bg-[#F4F9FF] rounded-l-[3rem] relative">
          <div className="absolute flex justify-start items-start w-full h-full -translate-x-10 -translate-y-10">
            <ProjectGreenTopBox className="w-1/2 max-w-[30rem] h-fit max-md:w-3/4" />

            <div className="absolute bg-white rounded-full text-6xl font-extrabold py-5 px-10 translate-y-1/2 -translate-x-[80%] shadow-xl">
              {project.title}
              <div className="absolute bg-white shadow-xl flex items-center gap-2 rounded-full p-2 pr-4 border border-gray-200 translate-x-[60%]">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colorSet[0] }}></div>
                <div className="text-2xl">{project.state}</div>
              </div>
            </div>

            <div className="text-sm w-56 absolute text-[#757575] top-[10%] left-[8%] max-md:left-[4%]">
              {project.description}
            </div>

            <div className="flex flex-col">
              {/* 필요한 인력 섹션 */}
              {project.state === "모집중" && project.wanted && (
                <div className="w-full flex justify-center pt-16 pl-5">
                  <div className="w-11/12 max-w-6xl">
                    <h3 className="text-2xl font-semibold mb-6">필요한 인력</h3>
                    <div className="flex gap-8 overflow-x-auto">
                      {project.wanted.map((need, index) => (
                        <NeedCard
                          key={index}
                          need={{
                            id: index,
                            role: need.role,
                            number: need.neededMemberCount,
                            stack: need.stack,
                          }}
                          className="h-[8rem]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 프로필 카드 섹션 */}
              <div className="w-full flex justify-center pt-16 pl-5">
                <div className="w-11/12 max-w-6xl">
                  <h3 className="text-2xl font-semibold mb-6">프로필</h3>
                  <div className="flex flex-wrap gap-7">
                    {memberProfiles.map((profile, index) => (
                      <ProfileCard
                        key={index}
                        profile={{
                          id: profile.id,
                          name: profile.name,
                          githubUrl: profile.githubUrl,
                          profileImageUrl: profile.profileImageUrl,
                          role: profile.role || "Member",
                        }}
                        className="h-[8rem]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 소개 */}
      <IntroduceProject />

      {/* 진행 중일 때 깃 그래프 표시 */}
      {project.state === "진행중" && <GitGraph />}
    </main>
  );
}

export default ProjectPage;
