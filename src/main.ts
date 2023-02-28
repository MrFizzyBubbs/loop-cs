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
import { PrologueQuest } from "./tasks/prologue";
import { SpellDamageQuest } from "./tasks/spelldamage";
import StatTests from "./tasks/stat";
import { WeaponDamageQuest } from "./tasks/weapondamage";
import { DietQuest } from "./tasks/diet";

export const args = Args.create("loopcs", "A script to complete community service runs.", {
  vipclan: Args.string({
    help: "Name of clan that has a fully stocked VIP lounge.",
    default: "Margaretting Tye",
  }),
  slimeclan: Args.string({
    help: "Name of clan that has Mother Slime ready in The Slime Tube.",
    default: "Hobopolis Vacation Home",
  }),
  confirm: Args.flag({
    help: "Whether the user must confirm execution of each unique task.",
    default: false,
  }),
  abort: Args.string({
    help: "If given, abort during the prepare() step for the task with matching name.",
  }),
  list: Args.flag({
    help: "Show the status of all tasks and exit.",
    setting: "",
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

  const timeProperty = "_loopcs_elapsedTime";
  const setTimeNow = get(timeProperty, -1) === -1;
  if (setTimeNow) set(timeProperty, gametimeToInt());

  const tasks = getTasks([
    DietQuest,
    PrologueQuest,
    CoilWireQuest,
    LevelingQuest,
    ...StatTests,
    WeaponDamageQuest,
    SpellDamageQuest,
    HotResQuest,
    NoncombatQuest,
    FamiliarWeightQuest,
    BoozeDropQuest,
    DonateQuest,
  ]);

  // Abort during the prepare() step of the specified task
  if (args.abort) {
    const to_abort = tasks.find((task) => task.name === args.abort);
    if (!to_abort) throw `Unable to identify task ${args.abort}`;
    to_abort.prepare = (): void => {
      throw `Abort requested on task ${to_abort.name}`;
    };
  }

  const engine = new Engine(tasks);
  try {
    if (args.list) {
      listTasks(engine);
      return;
    }

    engine.run();

    const remaining_tasks = tasks.filter((task) => !task.completed());
    if (!runComplete()) {
      print("Remaining tasks:", "red");
      for (const task of remaining_tasks) {
        if (!task.completed()) print(`${task.name}`, "red");
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

function listTasks(engine: Engine): void {
  for (const task of engine.tasks) {
    if (task.completed()) {
      print(`${task.name}: Done`, "blue");
    } else if (engine.available(task)) {
      print(`${task.name}: Available`);
    } else {
      print(`${task.name}: Not Available`, "red");
    }
  }
}
