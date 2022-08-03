import { getTasks } from "grimoire-kolmafia";
import { Task } from "../engine/task";
import { BoozeDropQuest } from "./boozedrop";
import { CoilWireQuest } from "./coilwire";
import { DonateQuest } from "./donate";
import { FamiliarWeightQuest } from "./familiarweight";
import { HotResQuest } from "./hotres";
import { LevelingQuest } from "./leveling";
import { NoncombatQuest } from "./noncombat";
import { RunStartQuest } from "./runstart";
import { SpellDamageQuest } from "./spelldamage";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./stat";
import { WeaponDamageQuest } from "./weapondamage";

export function allTasks(): Task[] {
  const quests = [
    RunStartQuest,
    CoilWireQuest,
    LevelingQuest,
    MoxieQuest,
    MuscleQuest,
    HPQuest,
    MysticalityQuest,
    HotResQuest,
    NoncombatQuest,
    FamiliarWeightQuest,
    WeaponDamageQuest,
    SpellDamageQuest,
    BoozeDropQuest,
    DonateQuest,
  ];
  return getTasks(quests);
}
