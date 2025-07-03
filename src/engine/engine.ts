import { CSTask } from "./task";
import { CombatResources, Engine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { myClass, myHp, myMaxhp, userConfirm, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";
import { freeKillSources } from "./resources";
import { CombatActions, CSCombatStrategy } from "./combat";
import { args } from "../main";

export class CSEngine extends Engine<CombatActions, CSTask> {
  constructor(tasks: CSTask[]) {
    // Remove tasks for other classes
    tasks = tasks.filter((task) => !task.class || task.class.includes(myClass()));
    super(tasks);
  }

  execute(task: CSTask): void {
    if (args.confirm && !userConfirm(`Executing ${task.name}, continue?`)) {
      throw `User rejected execution of task ${task.name}`;
    }
    super.execute(task);
  }

  customize(
    task: CSTask,
    outfit: Outfit,
    combat: CSCombatStrategy,
    resources: CombatResources<CombatActions>
  ): void {
    // Set up a free kill if needed
    if (combat.can("killFree")) {
      const freeKillSource = freeKillSources.find(
        (source) => source.available() && (source.equip === undefined || outfit.equip(source.equip))
      );
      if (freeKillSource === undefined) throw "Unable to provide a free kill source";
      resources.provide("killFree", freeKillSource);
    }

    if (task.combat !== undefined && !outfit.skipDefaults) {
      equipDefaults(outfit, task.outfit?.canAttack ?? false);
    }
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
