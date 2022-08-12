import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have, Macro, PropertiesManager } from "libram";
import { cliExecute, myHp, myMaxhp, userConfirm, useSkill, writeCcs } from "kolmafia";
import { equipDefaults } from "./outfit";

const grimoireCCS = "grimoire_macro";

export class Engine extends BaseEngine<never, Task> {
  public run(actions?: number, confirm?: boolean): void {
    for (let i = 0; i < (actions ?? Infinity); i++) {
      const task = this.getNextTask();
      if (!task) return;
      if (confirm && !userConfirm(`Executing ${task.name}, continue?`)) throw `Abort requested`;
      this.execute(task);
    }
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    // Use the macro through a CCS file
    writeCcs(`[ default ]\n"${Macro.load().toString()};"`, grimoireCCS);
    cliExecute(`ccs ${grimoireCCS}`); // force Mafia to reparse the ccs
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  post(task: Task): void {
    super.post(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
    manager.set({
      hpAutoRecovery: -0.05,
      mpAutoRecovery: -0.05,
    });
  }
}
