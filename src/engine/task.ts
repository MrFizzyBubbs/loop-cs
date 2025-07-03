import { Limit, OutfitSpec, Quest, Task } from "grimoire-kolmafia";
import { Class } from "kolmafia";
import { CombatActions, CSCombatStrategy } from "./combat";

export interface CSOutfitSpec extends OutfitSpec {
  canAttack?: boolean;
}

export type CSTask = {
  limit: Limit;
  outfit?: CSOutfitSpec;
  combat?: CSCombatStrategy;
  class?: Class[];
} & Task<CombatActions>;

export type CSQuest = Quest<CSTask>;
