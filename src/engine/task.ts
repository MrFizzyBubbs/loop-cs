import { Limit, Quest, Task } from "grimoire-kolmafia";
import { Class } from "kolmafia";
import { CombatActions, CSCombatStrategy } from "./combat";

export type CSTask = {
  limit: Limit;
  combat?: CSCombatStrategy;
  class?: Class[];
} & Task<CombatActions>;

export type CSQuest = Quest<CSTask>;
