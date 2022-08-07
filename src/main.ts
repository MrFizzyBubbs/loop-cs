import {
  cliExecute,
  gametimeToInt,
  myAdventures,
  print,
  setAutoAttack,
  turnsPlayed,
  userConfirm,
} from "kolmafia";
import { convertMilliseconds } from "./lib";
import { get, set } from "libram";
import { Engine } from "./engine/engine";
import { Args, getTasks } from "grimoire-kolmafia";
import { BoozeDropQuest } from "./tasks/boozedrop";
import { CoilWireQuest } from "./tasks/coilwire";
import { DonateQuest } from "./tasks/donate";
import { FamiliarWeightQuest } from "./tasks/familiarweight";
import { HotResQuest } from "./tasks/hotres";
import { LevelingQuest } from "./tasks/leveling";
import { NoncombatQuest } from "./tasks/noncombat";
import { RunStartQuest } from "./tasks/runstart";
import { SpellDamageQuest } from "./tasks/spelldamage";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./tasks/stat";
import { WeaponDamageQuest } from "./tasks/weapondamage";

const timeProperty = "fullday_elapsedTime";

export const args = Args.create("loopcs", "A full-day wrapper script.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false,
  }),
});

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (runComplete()) {
    print("Community Service complete!", "purple");
    return;
  }

  const setTimeNow = get(timeProperty, -1) === -1;
  if (setTimeNow) set(timeProperty, gametimeToInt());

  const tasks = getTasks([
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
  ]);
  const engine = new Engine(tasks);
  setAutoAttack(0);
  cliExecute("ccs loopcs");

  while (!runComplete()) {
    const task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";
    if (args.confirm && !userConfirm(`Executing task ${task.name}, should we continue?`)) {
      throw `User rejected execution of task ${task.name}`;
    }
    if (task.ready !== undefined && !task.ready()) throw `Task ${task.name} is not ready`;
    engine.execute(task);
  }

  print("Community Service complete!", "purple");
  print(`Adventures used: ${turnsPlayed()}`, "purple");
  print(`Adventures remaining: ${myAdventures()}`, "purple");
  if (setTimeNow)
    print(
      `Time: ${convertMilliseconds(gametimeToInt() - get(timeProperty, gametimeToInt()))}`,
      "purple"
    );
  else
    print(
      `Time: ${convertMilliseconds(
        gametimeToInt() - get(timeProperty, gametimeToInt())
      )} since first run today started`,
      "purple"
    );
}

function runComplete(): boolean {
  return get("kingLiberated");
}
