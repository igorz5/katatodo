import { formatDistanceToNowStrict } from "date-fns";

export function formatTimeForTask(time: Date): string {
  return `created ${formatDistanceToNowStrict(time, {
    roundingMethod: "ceil",
    addSuffix: true,
  })}`;
}
