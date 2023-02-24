import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { myClass, myHp, myMaxhp, userConfirm, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";
import { args } from "../main";

export class Engine extends BaseEngine<never, Task> {
  constructor(tasks: Task[]) {
    // Remove tasks for other classes
    tasks = tasks.filter((task) => !task.class || task.class.includes(myClass()));
    super(tasks);
  }

  execute(task: Task): void {
    if (args.confirm && !userConfirm(`Executing ${task.name}, continue?`)) {
      throw `User rejected execution of task ${task.name}`;
    }
    super.execute(task);
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  post(task: Task): void {
    super.post(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
  }
}
