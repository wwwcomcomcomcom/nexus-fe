import { Status, getStatusColorSet } from "./projectStatus.ts";
export default function ProjectStatusIndicator({
  status = Status.Active,
}: {
  status?: Status;
}) {
  const colorSet = getStatusColorSet(status);
  return (
    <div className="flex items-center space-x-1">
      <div
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: colorSet[0] }}
      />
      <p className="text-sm" style={{ color: colorSet[0] }}>
        {status}
      </p>
    </div>
  );
}
