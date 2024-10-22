import React, { useEffect, useRef } from "react";
import { createGitgraph } from "@gitgraph/js";

const GitGraphComponent: React.FC = () => {
  const graphContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gitgraph = createGitgraph(graphContainerRef.current!);

    const master = gitgraph.branch("master");
    master.commit("Initial commit");

    const develop = gitgraph.branch("develop");
    develop.commit("Add new feature");

    const feature = develop.branch("feature/my-feature");
    feature.commit("Work on feature");

    develop.merge(feature, "Merge feature into develop");
    master.merge(develop, "Release new version");
  }, []);
  return <div ref={graphContainerRef} className="w-full h-[500px]"></div>;
};

export default GitGraphComponent;
