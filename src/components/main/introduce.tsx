import { useScroll, motion, useTransform, HTMLMotionProps, MotionValue } from "framer-motion";
import ProjectCard from "../card/ProjectCard";
import { generateProjectEntity } from "../../test/TestVariables";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ScrollPageProps extends HTMLMotionProps<"div">{
  childProps?:HTMLMotionProps<"div">
}

function ScrollPage(props:ScrollPageProps){
  return <motion.div className="h-full snap-center flex justify-center items-center" {...props}>
    <motion.div {...props.childProps}>
      {props.children}
    </motion.div>
  </motion.div>
}

function useParallaxEffect(nthChild:number,progress:MotionValue<number>){
  return {
    opacity:useTransform(progress,[(nthChild-1)/3,nthChild/3],[1,0]),
    offset:useTransform(progress,[(nthChild-1)/3,nthChild/3],[0,250])
  };
}

export default function Introduce() {
  const navigate = useNavigate();

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({container: ref});
  const {opacity:opacity1,offset:offset1} = useParallaxEffect(1,scrollYProgress);
  const {opacity:opacity2,offset:offset2} = useParallaxEffect(2,scrollYProgress);
  const {opacity:opacity3,offset:offset3} = useParallaxEffect(3,scrollYProgress);

  return (
    <motion.div ref={ref} className="border-b border-black h-[90vh] overflow-scroll snap-y snap-mandatory scrollbar-hide">
      <ScrollPage style={{opacity:opacity1}} childProps={{style:{y:offset1}}}>
        <h1 className="font-bold p-4 text-center text-[4rem]">Nexus</h1>
        <h1 className="font-bold p-4 text-center text-[2rem]">Nexus는 교내 프로젝트 관리 & 지식공유 플랫폼입니다.</h1>
      </ScrollPage>
      <ScrollPage style={{opacity:opacity2}} childProps={{style:{y:offset2}}}>
        <h1 className="font-bold p-4 text-center text-[2rem]">프로젝트 인원 모집 / 관리</h1>
        <ProjectCard project={generateProjectEntity()}/>
      </ScrollPage>
      <ScrollPage style={{opacity:opacity3}} childProps={{style:{y:offset3}}}>
        <h1 className="font-bold p-4 text-center text-[2rem]">개발 정보 공유 커뮤니티</h1>
        <h2 className="text-[1.5rem]">AI 추천기반 최신 기술정보 | 자유로운 정보공유 게시판</h2>
      </ScrollPage>
      <ScrollPage childProps={{className:"flex flex-col items-center gap-5"}}>
        <h1 className="font-bold p-4 text-center text-[2rem]">Nexus와 함께 프로젝트를 시작해보세요!</h1>
        <button onClick={()=>navigate("/login")} className="p-4 rounded-lg bg-gauth-primary text-white font-bold hover:bg-blue-400 hover:shadow hover:shadow-blue-700">
          <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline mr-2 -translate-y-0.5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M0.197998 4.33382L7.901 0V5.31397L4.92057 6.9908L0.197998 4.33382ZM4.72255 7.31768L0 4.66071V13.3393L4.72255 10.6823V7.31768ZM5.30681 10.3536V7.64639L7.71274 9L5.30681 10.3536ZM4.9205 11.0092L0.197998 13.6662L7.901 18V12.6861L4.9205 11.0092ZM7.901 12.0287L5.50476 10.6805L7.901 9.33236V12.0287ZM8.29051 12.6861V18L16 13.6625L11.2775 11.0056L8.29051 12.6861ZM10.6933 10.6769L8.29051 12.0287V9.32506L10.6933 10.6769ZM11.2775 6.99444L16 4.33747L8.29051 0V5.31394L11.2775 6.99444ZM7.901 5.97139V8.66764L5.50483 7.31951L7.901 5.97139Z"
              />
            </svg>
            Gauth로 시작하기
        </button>
      </ScrollPage>
    </motion.div>
  );
}