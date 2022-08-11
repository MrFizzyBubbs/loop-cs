import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have, PropertiesManager } from "libram";
import { myHp, myMaxhp, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed());
  }

  public execute(task: Task): void {
    super.execute(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
    manager.set({
      hpAutoRecovery: -0.05,
      mpAutoRecovery: -0.05,
    });
  }
}
