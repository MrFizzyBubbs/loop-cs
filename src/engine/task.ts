import { Quest as BaseQuest, Task as BaseTask } from "grimoire-kolmafia";
import { Class } from "kolmafia";

export type Task = BaseTask & { class?: Class[] };
export type Quest = BaseQuest<Task>;
