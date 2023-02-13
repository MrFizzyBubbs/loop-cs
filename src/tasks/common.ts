import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  buy,
  cliExecute,
  create,
  eat,
  Effect,
  effectModifier,
  getFuel,
  getProperty,
  Item,
  itemAmount,
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
    ready: () =>
      get("_freeBeachWalksUsed") < 11 &&
      get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    do: () => BeachComb.tryHead(effect),
  };
}

export function potionTask(item: Item, acquire = false): Task {
  const effect = effectModifier(item, "Effect");
  return {
    name: effect.toString(),
    ready: acquire ? undefined : () => have(item),
    completed: () => have(effect),
    do: () => use(item),
    acquire: acquire ? [{ item }] : undefined,
  };
}

export function skillTask(x: Skill | Effect): Task {
  {
    const skill = x instanceof Skill ? x : toSkill(x);
    const effect = x instanceof Effect ? x : toEffect(x);
    return {
      name: skill.name,
      completed: () => (effect !== $effect.none ? have(effect) : skill.timescast > 0),
      prepare: () => {
        if (myMp() < mpCost(skill)) {
          if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
            create(1, $item`magical sausage`);
          }
          if (have($item`magical sausage`)) {
            eat(1, $item`magical sausage`);
          } else {
            use(1, $item`psychokinetic energy blob`);
          }
        }
      },
      do: () => useSkill(skill),
    };
  }
}

// export function songTasks(songs: (Skill | Effect)[]): Task[] {
//   const songEffects = songs.map((song) => (song instanceof Effect ? song : toEffect(song)));

//   return songEffects.map((songEffect) => ({
//     name: songEffect.name,
//     ready: () => myMp() >= mpCost(toSkill(songEffect)),
//     completed: () => have(songEffect),
//     prepare: () => {
//       const extraSongs = Object.keys(myEffects())
//         .map((effectName) => toEffect(effectName))
//         .filter((effect) => isSong(effect) && !songEffects.includes(effect));
//       extraSongs.slice(0, maxSongs() - songs.length).forEach((effect) => {
//         if (have(effect)) cliExecute(`shrug ${effect}`);
//       });
//     },
//     do: () => useSkill(toSkill(songEffect)),
//   }));
// }

export function asdonTask(style: Effect | keyof typeof AsdonMartin.Driving): Task {
  const effect = style instanceof Effect ? style : AsdonMartin.Driving[style];
  return {
    name: effect.name,
    completed: () => have(effect),
    prepare: () => {
      if (getFuel() < 37 && itemAmount($item`wad of dough`) < 8) {
        buy($item`all-purpose flower`);
        use($item`all-purpose flower`);
      }
    },
    do: () => AsdonMartin.drive(effect),
  };
}

export function deckTask(card: string): Task {
  return {
    name: `Cheat At Cards: ${card}`,
    ready: () => have($item`Deck of Every Card`) && get("_deckCardsDrawn") <= 10,
    completed: () => get("_deckCardsSeen").toLowerCase().split("|").includes(card.toLowerCase()),
    do: () => cliExecute(`cheat ${card.toLowerCase()}`),
  };
}
