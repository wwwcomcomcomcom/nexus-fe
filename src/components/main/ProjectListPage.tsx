import ProjectList from "../content/ProjectList";

export default function ProjectListPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg text-gray-500">List of all projects</p>
      <ProjectList />
    </div>
  );
}