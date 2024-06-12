export enum Status {
  Active = "Active",
  Stopped = "Stopped",
  Completed = "Completed",
  Cancelled = "Cancelled"
}

//should be defined at ./tailwind.config.js/safelist
export enum StatusColor {
  Active = "green-400",
  Stopped = "gray-400",
  Completed = "blue-400",
  // OnHold = "yellow-200",
  Cancelled = "red-400"
}

export function getStatusColor(status: Status) {
  return StatusColor[status as keyof typeof StatusColor];
}