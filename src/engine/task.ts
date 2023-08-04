import { Limit, Quest, Task } from "grimoire-kolmafia";
import { Class } from "kolmafia";

export type CSTask = Task & { limit: Limit; class?: Class[] };
export type CSQuest = Quest<CSTask>;
