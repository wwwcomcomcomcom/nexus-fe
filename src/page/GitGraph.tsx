import GitCommits from "../component/GitCommits";
import GitGraphComponent from "../component/GitGraphComponent";

export default function GitGraph() {
  return (
    <div className="w-full min-h-[70vh] flex justify-end">
      <div className="md:w-2/3 w-full h-full bg-[#F4F9FF] rounded-3xl md:rounded-r-none">
        <div className="p-10">
          <div className="font-extrabold text-2xl mb-4">Git Graph</div>
          <GitGraphComponent />
          <GitCommits />
        </div>
      </div>
    </div>
  );
}
