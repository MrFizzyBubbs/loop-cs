import { CombatStrategy } from "grimoire-kolmafia";
import {
  canEquip,
  cliExecute,
  myHp,
  myLevel,
  myMaxhp,
  numericModifier,
  takeStorage,
  useSkill,
} from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { byClass, byStat } from "../lib";
import { innerElfTask, meteorShowerTask, potionTask, skillTask } from "./common";

const buffs = $effects`Arched Eyebrow of the Archmage, Carol of the Hells, Jackasses' Symphony of Destruction, Simmering, Song of Sauce, Spirit of Cayenne`;

const chefstaff = byStat({
  Mysticality: $item`Staff of the Roaring Hearth`,
  default: $item`Staff of Simmering Hatred`,
});

const maxTurns = byClass({
  Pastamancer: 10,
  Sauceror: 8,
  "Accordion Thief": 11,
  default: 12,
});

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    ...buffs.map(skillTask),
    { ...skillTask($skill`Elron's Explosive Etude`), class: $classes`Accordion Thief` },
    {
      name: "Play Pool",
      completed: () => have($effect`Mental A-cue-ity`),
      do: () => cliExecute("pool 2"),
      limit: { tries: 1 },
    },
    {
      name: "Deep Dark Visions",
      completed: () => have($effect`Visions of the Deep Dark Deeps`),
      do: (): void => {
        while (myHp() < myMaxhp()) useSkill($skill`Cannelloni Cocoon`);
        useSkill($skill`Deep Dark Visions`);
      },
      outfit: {
        shirt: $item`Jurassic Parka`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Exotic Parrot`,
        famequip: $item`tiny stillsuit`,
        modes: { parka: "ghostasaurus", retrocape: ["vampire", "hold"] },
      },
      limit: { tries: 1 },
    },
    potionTask($item`tobiko marble soda`, true),
    potionTask($item`cordial of concentration`, true),
    {
      name: "Barrel Prayer",
      class: $classes`Sauceror`,
      completed: () => get("_barrelPrayer"),
      do: () => cliExecute("barrelprayer buff"),
    },
    {
      name: "Briefcase Enchantment",
      completed: () =>
        numericModifier($item`Kremlin's Greatest Briefcase`, "Spell Damage Percent") > 0,
      do: () => cliExecute("Briefcase.ash enchantment spell"),
      limit: { tries: 1 },
    },
    {
      name: "Cargopocket",
      completed: () => get("_cargoPocketEmptied"),
      do: () => cliExecute("cargo 177"),
    },
    potionTask($item`Yeg's Motel hand soap`),
    {
      name: "Saucefingers",
      class: $classes`Pastamancer`,
      completed: () => have($effect`Saucefingers`),
      ready: () => myLevel() >= 15 && get("_reflexHammerUsed") < 3,
      do: $location`The Dire Warren`,
      outfit: { acc3: $item`Lil' Doctor™ bag`, familiar: $familiar`Mini-Adventurer` },
      choices: { 768: 4 },
      combat: new CombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      limit: { tries: 2 },
    },
    innerElfTask(),
    meteorShowerTask(),
    {
      name: "Pull Staff",
      completed: () => have(chefstaff),
      do: (): void => {
        if (!canEquip(chefstaff)) {
          throw `Unable to equip chefstaff ${chefstaff}`;
        }
        takeStorage(chefstaff, 1);
      },
    },
    {
      name: "Test",
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () => CommunityService.SpellDamage.run(() => undefined, maxTurns),
      outfit: {
        hat: $items`astral chapeau, Hollandaise helmet, none`,
        weapon: chefstaff,
        offhand: $items`Abracandalabra, weeping willow wand`,
        acc1: $item`battle broom`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Disembodied Hand`,
        famequip: $item`Stick-Knife of Loathing`,
      },
      limit: { tries: 1 },
    },
  ],
};
