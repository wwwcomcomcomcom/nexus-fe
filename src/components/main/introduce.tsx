import { useScroll, motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard";
import { generateProjectEntity } from "../../test/TestVariables";

export default function Introduce() {
  const {scrollY} = useScroll();
  return (
    <div className="border-b border-black h-[100vh] overflow-scroll snap-y snap-mandatory">
      <motion.div className="h-full snap-center">
        <h1 className="font-bold p-4 text-center text-[4rem]">Nexus</h1>
        <h1 className="font-bold p-4 text-center text-[2rem]">Nexus는 교내 프로젝트 관리 & 지식공유 플랫폼입니다.</h1>
      </motion.div>
      <motion.div className="h-full snap-center">
        <h1 className="font-bold p-4 text-center text-[2rem]">프로젝트 인원 모집 / 관리</h1>
        <div className="w-2/3 relative left-1/2 -translate-x-1/2">
          <ProjectCard project={generateProjectEntity()}/>
        </div>
      </motion.div>
      <motion.div className="h-full snap-center">
        <h1 className="font-bold p-4 text-center text-[2rem]">개발 정보 공유 커뮤니티</h1>
      </motion.div>
      <motion.div className="h-full snap-center">
        <h1 className="font-bold p-4 text-center text-[2rem]">Nexus와 함께 프로젝트를 시작해보세요!</h1>
      </motion.div>
    </div>
  );
}