import { CombatStrategy } from "grimoire-kolmafia";

const myActions = ["killFree"] as const;
export type CombatActions = (typeof myActions)[number];
export class CSCombatStrategy extends CombatStrategy.withActions(myActions) {}
