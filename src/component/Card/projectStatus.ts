export enum Status {
  Active = "진행중",
  Recruit = "모집중",
  Completed = "완료됨",
  Cancelled = "중단됨",
}

//should be defined at ./tailwind.config.js/safelist
export const StatusColorSet = {
  Active: ["#73d67d", "#e7feef"],
  Completed: ["#3f3de3", "#f3f7fe"],
  Recruit: ["#e89d3a", "#fcf7e5"],
  Cancelled: ["#df347a", "#fcf3f8"],
};

export function getStatusColorSet(status: Status) {
  return StatusColorSet[Object.keys(Status)[Object.values(Status).indexOf(status)] as keyof typeof StatusColorSet];
}
