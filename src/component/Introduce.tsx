import {
  useScroll,
  motion,
  useTransform,
  HTMLMotionProps,
  MotionValue,
} from "framer-motion";
import ProjectCard from "./projectCard/ProjectCard.tsx";
import { generateProjectEntity } from "../shared/apiMockup.ts";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import GauthIcon from "./icons/GauthIcon.tsx";

interface ScrollPageProps extends HTMLMotionProps<"div"> {
  childProps?: HTMLMotionProps<"div">;
}

function ScrollPage(props: ScrollPageProps) {
  return (
    <motion.div
      className="h-full snap-center flex justify-center items-center"
      {...props}
    >
      <motion.div {...props.childProps}>{props.children}</motion.div>
    </motion.div>
  );
}

function useParallaxEffect(nthChild: number, progress: MotionValue<number>) {
  return {
    opacity: useTransform(progress, [(nthChild - 1) / 3, nthChild / 3], [1, 0]),
    offset: useTransform(
      progress,
      [(nthChild - 1) / 3, nthChild / 3],
      [0, 250]
    ),
  };
}

export default function Introduce() {
  const navigate = useNavigate();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const { opacity: opacity1, offset: offset1 } = useParallaxEffect(
    1,
    scrollYProgress
  );
  const { opacity: opacity2, offset: offset2 } = useParallaxEffect(
    2,
    scrollYProgress
  );
  const { opacity: opacity3, offset: offset3 } = useParallaxEffect(
    3,
    scrollYProgress
  );

  return (
    <motion.div
      ref={ref}
      className="border-none border-gray-300 h-[90vh] overflow-scroll snap-y snap-mandatory scrollbar-hide"
    >
      <ScrollPage
        style={{ opacity: opacity1 }}
        childProps={{ style: { y: offset1 } }}
      >
        <h1 className="font-bold p-4 text-center text-[4rem]">Nexus</h1>
        <h1 className="font-semibold p-4 text-center text-[20px] text-[#757575]">
          Nexus는 교내 프로젝트 관리 & 지식공유 플랫폼입니다.
        </h1>
      </ScrollPage>
      <ScrollPage
        style={{ opacity: opacity2 }}
        childProps={{
          style: {
            y: offset2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <h1 className="font-bold p-4 text-center text-[2rem] ">
          프로젝트 인원 모집 / 관리
        </h1>
        <ProjectCard
          project={generateProjectEntity()}
          width={300}
          height={400}
        />
      </ScrollPage>
      <ScrollPage
        style={{ opacity: opacity3 }}
        childProps={{ style: { y: offset3 } }}
      >
        <h1 className="font-bold p-4 text-center text-[2rem]">
          개발 정보 공유 커뮤니티
        </h1>
        <h2 className="text-[20px] text-[#757575]">
          AI 추천기반 최신 기술정보 | 자유로운 정보공유 게시판
        </h2>
      </ScrollPage>
      <ScrollPage
        childProps={{ className: "flex flex-col items-center gap-5" }}
      >
        <h1 className="font-bold p-4 text-center text-[2rem]">
          Nexus와 함께 프로젝트를 시작해보세요!
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="p-4 rounded-lg bg-gauth-primary text-white font-bold hover:bg-blue-400 hover:shadow hover:shadow-blue-700"
        >
          <GauthIcon className="inline mr-2 -translate-y-0.5" />
          Gauth로 시작하기
        </button>
      </ScrollPage>
    </motion.div>
  );
}
