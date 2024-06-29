import { useScroll, useTransform,motion } from "framer-motion";
import ProjectCard from "../card/ProjectCard";
import { generateProjectEntity } from "../../test/TestVariables";

export default function Introduce() {
  const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const opacity2 = useTransform(scrollY, [100, 200,250,350], [0,1,1,0]);
  const opacity3 = useTransform(scrollY, [250, 350,400,500], [0,1,1,0]);
  const y = useTransform(scrollY, [0, 200], [0, 100]);
  const y2 = useTransform(scrollY, [0, 200], [0, 200]);
  const y3 = useTransform(scrollY, [150, 350], [0, 200]);
  const y4 = useTransform(scrollY, [350, 550], [0, 200]);
  return (
    <div className="border-b border-black h-[150vh] flex flex-col gap-4 py-8">
      <motion.h1 className="font-bold p-4 text-center text-[4rem]" style={{y:y,opacity:opacity}}>Nexus</motion.h1>
      <motion.h1 className="font-bold p-4 text-center text-[2rem]" style={{y:y2,opacity:opacity}}>Nexus는 교내 프로젝트 관리 & 지식공유 플랫폼입니다.</motion.h1>
      <motion.div style={{y:y3,opacity:opacity2,width:"50%",alignSelf:"center"}}>
        <h1 className="font-bold p-4 text-center text-[2rem]">프로젝트 인원 모집 / 관리</h1>
        <ProjectCard project={generateProjectEntity()}/>
      </motion.div>
      <motion.h1 className="font-bold p-4 text-center text-[2rem]" style={{y:y4,opacity:opacity3}}>개발 정보 공유 커뮤니티</motion.h1>
    </div>
  );
}