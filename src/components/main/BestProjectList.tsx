import React, { useRef } from "react";
import Flicking, { MoveEvent, ReadyEvent } from "@egjs/react-flicking";
import ProjectCard from "../card/projectCard";
import { ProjectEntity } from "../../entity/ProjectEntity";
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
      if(Math.abs(panel.progress) < 0.2) {
        panel.element.style.transform = `scale(${1-Math.abs(panel.progress) + 0.2})`;
      }else{
        panel.element.style.transform = "scale(1)";
      }
    });
  }

  return (
    <div className="border-b border-black">
      <h2 className="text-2xl font-bold p-4 text-center">Best Projects</h2>
      <Flicking
        className="best-project-list"
        circular={true}
        onReady={updateSlider}
        onMove={updateSlider}
        ref={ref}
        plugins={[autoPlay]}
      >
        {projects.map((project) => (
          <div key={project.id} className="my-8 mx-8 w-[80%] sm:w-[70%] sm:mx-8 md:w-[40%] md:mx-6 lg:w-[25%] lg:mx-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </Flicking>
    </div>
  );
};
