import { CSTask } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { myClass, myHp, myMaxhp, userConfirm, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";
import { args } from "../main";

export class Engine extends BaseEngine<never, CSTask> {
  confirmed: Set<string>;

  constructor(tasks: CSTask[]) {
    // Remove tasks for other classes
    tasks = tasks.filter((task) => !task.class || task.class.includes(myClass()));
    super(tasks);
    this.confirmed = new Set();
  }

  execute(task: CSTask): void {
    if (
      args.confirm &&
      !this.confirmed.has(task.name) &&
      !userConfirm(`Executing ${task.name}, continue?`)
    ) {
      throw `User rejected execution of task ${task.name}`;
    }
    this.confirmed.add(task.name);
    super.execute(task);
  }

  dress(task: CSTask, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: CSTask): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  post(task: CSTask): void {
    super.post(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
  }
}
