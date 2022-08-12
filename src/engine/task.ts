import { Quest as BaseQuest, Task as BaseTask, Limit } from "grimoire-kolmafia";

export type Task = BaseTask & {
  limit: Limit;
};
export type Quest = BaseQuest<Task>;
