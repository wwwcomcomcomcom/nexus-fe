import { useState } from "react";
import CreateNewProject from "../component/createProject/CreateNewProject.tsx";
import SelectCreateMode from "../component/createProject/SelectCreateMode.tsx";
import ImportFromGithub from "../component/createProject/ImportFromGithub.tsx";

export default function CreateProjectPage() {
  const [viewPage, setViewPage] = useState(0);
  const pages: JSX.Element[] = [
    <CreateNewProject setViewPage={setViewPage} />,
    <SelectCreateMode setViewPage={setViewPage} />,
    <ImportFromGithub setViewPage={setViewPage} />,
  ];
  return <main className="flex justify-center h-fit">{pages[viewPage]}</main>;
}
