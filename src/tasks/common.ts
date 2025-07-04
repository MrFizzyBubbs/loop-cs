import {
  adv1,
  buy,
  canEquip,
  cliExecute,
  create,
  eat,
  Effect,
  effectModifier,
  equip,
  equippedItem,
  getFuel,
  getPower,
  getProperty,
  Item,
  itemAmount,
  knollAvailable,
  mpCost,
  myLevel,
  myMaxmp,
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
  $items,
  $location,
  $skill,
  $skills,
  $slot,
  AsdonMartin,
  BeachComb,
  Clan,
  Counter,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { CSTask } from "../engine/task";
import { args } from "../main";
import { burnLibrams, canCastLibrams } from "../lib";
import { CSCombatStrategy } from "../engine/combat";
import { OutfitSpec } from "grimoire-kolmafia";

export function innerElfTask(): CSTask {
  return {
    name: "Inner Elf",
    completed: () => have($effect`Inner Elf`),
    ready: () => myLevel() >= 13 && !Counter.exists("portscan.edu"),
    do: () =>
      Clan.with(args.slimeclan, () => {
        adv1($location`The Slime Tube`, -1, "");
      }),
    combat: new CSCombatStrategy().macro(
      Macro.trySkill($skill`KGB tranquilizer dart`).skill($skill`Snokebomb`)
    ),
    choices: { 326: 1 },
    effects: [$effect`Blood Bubble`],
    outfit: { acc3: $item`Kremlin's Greatest Briefcase`, familiar: $familiar`Machine Elf` },
    limit: { tries: 1 },
  };
}

export function meteorShowerTask(): CSTask {
  return {
    name: "Meteor Showered",
    completed: () => have($effect`Meteor Showered`),
    ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
    do: $location`The Dire Warren`,
    combat: new CSCombatStrategy().macro(
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

export function beachTask(effect: Effect): CSTask {
  const num = 1 + BeachComb.headBuffs.indexOf(effect);
  return {
    name: `Beach Head: ${effect}`,
    completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    ready: () =>
      get("_freeBeachWalksUsed") < 11 &&
      get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    do: () => BeachComb.tryHead(effect),
    limit: { tries: 1 },
  };
}

export function potionTask(item: Item, acquire = false): CSTask {
  const effect = effectModifier(item, "Effect");
  return {
    name: item.toString(),
    completed: () => have(effect),
    ready: acquire ? undefined : () => have(item),
    do: () => use(item),
    acquire: acquire ? [{ item }] : undefined,
    limit: { tries: 1 },
  };
}

export function skillTask(
  x: Skill | Effect | { skill: Skill; effect: Effect },
  includeAprilShield = false
): CSTask {
  {
    const { skill, effect } =
      x instanceof Skill
        ? { skill: x, effect: toEffect(x) }
        : x instanceof Effect
        ? { skill: toSkill(x), effect: x }
        : x;
    const needGlove = $skills`CHEAT CODE: Invisible Avatar, CHEAT CODE: Triple Size`.includes(
      skill
    );
    return {
      name: skill.name,
      completed: () =>
        effect !== $effect.none ? have(effect) : skill.timescast > skill.dailylimit,
      prepare: () => {
        if (myMaxmp() < mpCost(skill)) throw `Max MP is too low to cast ${skill.name}`;
        while (myMp() < mpCost(skill)) {
          if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
            create(1, $item`magical sausage`);
          }
          if (have($item`magical sausage`)) {
            eat(1, $item`magical sausage`);
          } else if (have($item`psychokinetic energy blob`)) {
            use(1, $item`psychokinetic energy blob`);
          } else {
            throw "Ran out of preferred MP restorers, consider Doc Galaktik's Invigorating Tonic";
          }
        }
      },
      do: () => useSkill(skill),
      outfit: {
        ...(needGlove ? { equip: [$item`Powerful Glove`] } : {}),
        ...(includeAprilShield
          ? { offhand: $item`April Shower Thoughts shield` }
          : { avoid: $items`April Shower Thoughts shield` }),
      },
      limit: { tries: 1 },
    };
  }
}

export function asdonTask(style: Effect | keyof typeof AsdonMartin.Driving): CSTask {
  const effect = style instanceof Effect ? style : AsdonMartin.Driving[style];
  return {
    name: effect.name,
    completed: () => have(effect),
    prepare: () => {
      if (!knollAvailable() && getFuel() < 37 && itemAmount($item`wad of dough`) < 8) {
        buy($item`all-purpose flower`);
        use($item`all-purpose flower`);
      }
    },
    do: () => AsdonMartin.drive(effect),
    limit: { tries: 1 },
  };
}

export function deckTask(card: string): CSTask {
  return {
    name: `Cheat At Cards: ${card}`,
    completed: () => get("_deckCardsSeen").toLowerCase().split("|").includes(card.toLowerCase()),
    ready: () => have($item`Deck of Every Card`) && get("_deckCardsDrawn") <= 10,
    do: () => cliExecute(`cheat ${card.toLowerCase()}`),
    limit: { tries: 1 },
  };
}

export function libramTask(): CSTask {
  return {
    name: "Burn Librams",
    completed: () => !canCastLibrams(),
    do: burnLibrams,
    limit: { tries: 1 },
  };
}

function currentBuskPower(): number {
  const tao = have($skill`Tao of the Terrapin`) ? 1 : 0;
  const hammertime = have($effect`Hammertime`) ? 3 : 0;
  return (
    getPower(equippedItem($slot`hat`)) * (1 + tao) +
    getPower(equippedItem($slot`shirt`)) +
    getPower(equippedItem($slot`pants`)) * (1 + tao + hammertime)
  );
}

export function buskTask(
  cast: number,
  power: number,
  spec: Pick<OutfitSpec, "hat" | "shirt" | "pants">
): CSTask {
  const needHatrack = spec.hat !== $item`prismatic beret`;
  return {
    name: `Busk ${cast}`,
    completed: () => get("_beretBuskingUses", 0) >= cast,
    ready: () =>
      get("_beretBuskingUses", 0) === cast - 1 &&
      !have($effect`Salty Mouth`) &&
      Object.values(spec)
        .filter((itemOrItems) => itemOrItems !== $item.none)
        .every((itemOrItems) =>
          Array.isArray(itemOrItems)
            ? itemOrItems.some((item) => canEquip(item))
            : canEquip(itemOrItems)
        ),
    prepare: () => {
      // Grimoire does not currently support equipping hats in familiar slot
      if (needHatrack) equip($item`prismatic beret`, $slot`familiar`);
      if (currentBuskPower() !== power) {
        throw `Current busk power (${currentBuskPower()}) does not match target (${power})`;
      }
    },
    do: () => useSkill($skill`Beret Busking`),
    outfit: {
      ...spec,
      ...(needHatrack ? { familiar: $familiar`Mad Hatrack` } : {}),
    },
    limit: { tries: 1 },
  };
}
