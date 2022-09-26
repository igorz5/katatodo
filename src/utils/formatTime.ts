import { formatDistanceToNow } from "date-fns";

export function formatTimeForTask(time: Date): string {
  return `created ${formatDistanceToNow(time, {
    addSuffix: true,
  })}`;
}
