import {Status, getStatusColor} from "./projectStatus.ts";
export default function ProjectStatusIndicator({status = Status.Active}:{status?:Status}){
  const color = getStatusColor(status);
  return <div className="flex items-center space-x-4">
    <div className={`bg-${color} h-3 w-3 rounded-full`}/>
    <p className={`text-sm text-${color}`}>{status}</p>
  </div>;
}