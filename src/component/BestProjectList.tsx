import React, { useRef } from "react";
import Flicking, { MoveEvent, ReadyEvent } from "@egjs/react-flicking";
import ProjectCard from "./projectCard/ProjectCard.tsx";
import { ProjectEntity } from "../entity/ProjectEntity.ts";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";

interface BestProjectListProps {
  projects: ProjectEntity[];
}

export const BestProjectList: React.FC<BestProjectListProps> = ({
  projects,
}) => {
  const ref = useRef(null);
  const autoPlay = new AutoPlay({
    duration: 1500,
    direction: "NEXT",
    stopOnHover: true,
  });

  function updateSlider(e: MoveEvent<Flicking> | ReadyEvent<Flicking>) {
    e.currentTarget.panels.forEach((panel) => {
      if (Math.abs(panel.progress) < 0.2) {
        panel.element.style.transform = `scale(${
          0.8 - Math.abs(panel.progress) + 0.2
        })`;
      } else {
        panel.element.style.transform = "scale(0.8)";
      }
    });
  }

  return (
    <div className="border-none relative mb-5">
      <div className="w-[390px] h-[95%] my-[20px] bg-[#F4F9FF] rounded-3xl top-0 left-1/2 transform -translate-x-1/2 z-0 absolute"></div>
      <h2 className="pt-10 text-2xl font-bold text-center z-20 relative">
        Best Projects
      </h2>
      <h4 className="text-[#757575] text-xs p-2 text-center z-20 relative">
        NEXUS에서 관리중인 훌륭한 Project들을 살펴보세요
      </h4>
      <Flicking
        className="best-project-list"
        circular={true}
        onReady={updateSlider}
        onMove={updateSlider}
        ref={ref}
        plugins={[autoPlay]}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="my-10 mx-2 w-[250px] flex justify-center"
          >
            <ProjectCard project={project} width={250} height={320} />
          </div>
        ))}
      </Flicking>
    </div>
  );
};
