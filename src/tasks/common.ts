import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  availableAmount,
  buy,
  cliExecute,
  create,
  eat,
  Effect,
  effectModifier,
  getFuel,
  getProperty,
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
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  AsdonMartin,
  BeachComb,
  Clan,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { Task } from "../engine/task";
import { args } from "../main";

export function innerElfTask(): Task {
  return {
    name: "Inner Elf",
    ready: () => myLevel() >= 13,
    completed: () => have($effect`Inner Elf`),
    do: () =>
      Clan.with(args.slimeclan, () => {
        adv1($location`The Slime Tube`, -1, "");
      }),
    combat: new CombatStrategy().macro(
      Macro.trySkill($skill`KGB tranquilizer dart`).skill($skill`Snokebomb`)
    ),
    choices: { 326: 1 },
    effects: [$effect`Blood Bubble`],
    outfit: { acc1: $item`Kremlin's Greatest Briefcase`, familiar: $familiar`Machine Elf` },
    limit: { tries: 1 },
  };
}

export function meteorShowerTask(): Task {
  return {
    name: "Meteor Showered",
    ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
    completed: () => have($effect`Meteor Showered`),
    do: $location`The Dire Warren`,
    combat: new CombatStrategy().macro(
      Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
    ),
    choices: { 1387: 3 },
    outfit: {
      weapon: $item`Fourth of May Cosplay Saber`,
      familiar: $familiar.none,
      famequip: $item.none,
    },
    limit: { tries: 1 },
  };
}

export function beachTask(effect: Effect): Task {
  const num = 1 + BeachComb.headBuffs.indexOf(effect);
  return {
    name: `Beach Head: ${effect}`,
    completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    ready: () =>
      get("_freeBeachWalksUsed") < 11 &&
      get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    do: () => BeachComb.tryHead(effect),
  };
}

export function potionTask(item: Item): Task {
  const effect = effectModifier(item, "Effect");
  return {
    name: effect.toString(),
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
      completed: () => (effect !== $effect.none ? have(effect) : skill.timescast > 0),
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
