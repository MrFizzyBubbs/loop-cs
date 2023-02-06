import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { myClass, myHp, myMaxhp, userConfirm, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";

export class Engine extends BaseEngine<never, Task> {
  constructor(tasks: Task[]) {
    // Tasks for other classes are always completed
    tasks = tasks.map((task) => {
      if (task.class && !task.class.includes(myClass())) return { ...task, completed: () => true };
      return task;
    });
    super(tasks);
  }

  public run(actions?: number, confirm?: boolean): void {
    for (let i = 0; i < (actions ?? Infinity); i++) {
      const task = this.getNextTask();
      if (!task) return;
      if (task.ready && !task.ready()) throw `Task ${task.name} is not ready`;
      if (confirm && !userConfirm(`Executing ${task.name}, continue?`)) throw `Abort requested`;
      this.execute(task);
    }
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
