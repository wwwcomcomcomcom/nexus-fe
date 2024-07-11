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
      {/* <div className="w-[200px] h-[200px] bg-[#FFF7E3] rounded-full top-20 translate-x-[55rem] z-0 absolute"></div> */}
      <div className="w-[390px] h-[95%] my-[20px] bg-[#F4F9FF] rounded-3xl top-0 left-1/2 transform -translate-x-1/2 z-0 absolute"></div>
      <h2 className="pt-10 text-2xl font-bold text-center z-20 relative">
        Best Projects
      </h2>
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
            // className="my-8 mx-0 w-[80%] sm:w-[70%] sm:mx-8 md:w-[40%] md:mx-6 lg:w-[25%] lg:mx-0 flex justify-center"
            className="my-10 mx-2 w-[16%] flex justify-center"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </Flicking>
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparen z-10 "></div>
      </div> */}
      {/* <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent inset-0 z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent inset-0 z-10 translate-x-[64em]"></div> */}
    </div>
  );
};
