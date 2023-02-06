import { gametimeToInt, myAdventures, print, turnsPlayed } from "kolmafia";
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
import { DietQuest } from "./tasks/diet";

export const args = Args.create("loopcs", "A script to complete community service runs.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false,
  }),
  vipclan: Args.string({
    help: "Name of clan that has a fully stocked VIP lounge.",
    default: "Margaretting Tye",
  }),
  slimeclan: Args.string({
    help: "Name of clan that has Mother Slime ready in The Slime Tube.",
    default: "Hobopolis Vacation Home",
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

  const timeProperty = "loopcs_elapsedTime";
  const setTimeNow = get(timeProperty, -1) === -1;
  if (setTimeNow) set(timeProperty, gametimeToInt());

  const tasks = getTasks([
    RunStartQuest,
    CoilWireQuest,
    LevelingQuest,
    DietQuest,
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
  try {
    engine.run(undefined, args.confirm);

    // Print the next task that will be executed, if it exists
    const task = engine.getNextTask();
    if (task) {
      print(`Next: ${task.name}`, "blue");
    }

    // If the engine ran to completion, the run should be complete.
    // Print any tasks that are not complete.
    if (!runComplete()) {
      const uncompletedTasks = engine.tasks.filter((t) => !t.completed());
      if (uncompletedTasks.length > 0) {
        print("Uncompleted Tasks:");
        for (const t of uncompletedTasks) print(t.name);
      }
      throw `Unable to find available task, but the run is not complete.`;
    }
  } finally {
    engine.destruct();
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
