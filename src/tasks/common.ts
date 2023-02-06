import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  cliExecute,
  create,
  eat,
  Effect,
  effectModifier,
  getFuel,
  Item,
  mpCost,
  myLevel,
  myMp,
  Skill,
  toEffect,
  toSkill,
  use,
  useSkill,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, AsdonMartin, Clan, get, have } from "libram";
import Macro from "../combat";
import { Task } from "../engine/task";
import { args } from "../main";

export function innerElf(): Task {
  return {
    name: "Inner Elf",
    ready: () => myLevel() >= 13 && get("_kgbTranquilizerDartUses") < 3,
    prepare: () => Clan.join(args.slimeclan),
    completed: () => have($effect`Inner Elf`),
    do: $location`The Slime Tube`,
    post: () => Clan.join(args.vipclan),
    combat: new CombatStrategy().macro(Macro.skill($skill`KGB tranquilizer dart`)),
    choices: { 326: 1 },
    effects: [$effect`Blood Bubble`],
    outfit: { acc1: $item`Kremlin's Greatest Briefcase`, familiar: $familiar`Machine Elf` },
    limit: { tries: 1 },
  };
}

export function meteorShower(): Task {
  return {
    name: "Meteor Shower",
    ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
    completed: () => have($effect`Meteor Showered`),
    do: $location`The Dire Warren`,
    combat: new CombatStrategy().macro(
      Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
    ),
    choices: { 1387: 3 },
    outfit: { weapon: $item`Fourth of May Cosplay Saber` },
    limit: { tries: 1 },
  };
}

export function potionTask(item: Item): Task {
  const effect = effectModifier(item, "Effect");
  return {
    name: `${effect}`,
    completed: () => have(effect),
    ready: () => have(item),
    do: () => use(item),
  };
}

export function restore(effects: Effect[]): Task {
  return {
    name: "Restore",
    completed: () => effects.every((e) => have(e)),
    do: () => {
      if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
      }
      if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
      } else {
        use(1, $item`psychokinetic energy blob`);
      }
    },
  };
}

export function skillTask(x: Skill | Effect): Task {
  {
    const skill = x instanceof Skill ? x : toSkill(x);
    const effect = x instanceof Effect ? x : toEffect(x);
    return {
      name: skill.name,
      completed: () => have(effect),
      ready: () => myMp() >= mpCost(skill),
      do: () => useSkill(skill),
    };
  }
}

export function restoreBuffTasks(buffs: Effect[]): Task[] {
  return [...buffs.map(skillTask), restore(buffs)];
}

export function asdonTask(style: Effect | keyof typeof AsdonMartin.Driving): Task {
  const effect = style instanceof Effect ? style : AsdonMartin.Driving[style];
  return {
    name: effect.name,
    completed: () => have(effect),
    do: () => {
      if (getFuel() < 37) {
        buy(1, $item`all-purpose flower`);
        use(1, $item`all-purpose flower`);
        buy(availableAmount($item`wad of dough`), $item`soda water`);
        create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
        cliExecute(`asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`);
      }
      AsdonMartin.drive(effect);
    },
  };
}
