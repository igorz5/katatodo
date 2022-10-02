export interface ITaskData {
  label: string;
  completed: boolean;
  id: number;
  createdTime: Date;
  timeLeft: number;
  isActive: boolean;
  lastTickTime?: number;
}
