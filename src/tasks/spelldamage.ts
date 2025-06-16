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
  $monster,
  $skill,
  byStat,
  CommunityService,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { CSQuest } from "../engine/task";
import { asdonTask, buskTask, innerElfTask, potionTask, skillTask } from "./common";
import { byPrimaryClass, peridotChoice } from "../lib";
import { CSCombatStrategy } from "../engine/combat";

const buffs = $effects`Arched Eyebrow of the Archmage, Carol of the Hells, Jackasses' Symphony of Destruction, Song of Sauce, Spirit of Cayenne`;

const chefstaff = byStat({
  Mysticality: $item`Staff of the Roaring Hearth`,
  default: $item`Staff of Simmering Hatred`,
});

const maxTurns = byPrimaryClass({
  Pastamancer: 10,
  Sauceror: 8,
  "Accordion Thief": 11,
  default: 12,
});

export const SpellDamageQuest: CSQuest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    ...buffs.map((effect) => skillTask(effect)),
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
      limit: { tries: 1 },
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
      limit: { tries: 1 },
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
      combat: new CSCombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      limit: { tries: 2 },
    },
    skillTask($skill`Simmer`, true),
    innerElfTask(),
    // meteorShowerTask(),
    asdonTask("Waterproofly"),
    {
      name: "Meteor Wild Girl",
      completed: () => have($effect`Meteor Showered`),
      ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
      do: $location`The Sunken Party Yacht`,
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
      ),
      choices: { ...peridotChoice($monster`wild girl`), 1387: 3 },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar.none,
      },
      limit: { tries: 2 }, // Intro NC
    },
    // busk 5, 980 power
    buskTask(5, {
      hat: $item`yellow plastic hard hat`,
      shirt: $item`extremely wet T-shirt`,
      pants: $item`Great Wolf's beastly trousers`,
    }),
    {
      name: "Pull Staff",
      completed: () => have(chefstaff),
      prepare: () => {
        if (!canEquip(chefstaff)) {
          throw `Will not be able to equip ${chefstaff.name}, consider a lesser chef staff`;
        }
      },
      do: () => takeStorage(chefstaff, 1),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () => CommunityService.SpellDamage.run(() => undefined, maxTurns),
      outfit: {
        hat: $items`astral chapeau, Hollandaise helmet, none`,
        weapon: chefstaff,
        offhand: $items`Abracandalabra, weeping willow wand`,
        back: $item`Buddy Bjorn`,
        acc1: $item`battle broom`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Disembodied Hand`,
        famequip: $item`Stick-Knife of Loathing`,
        riders: { "buddy-bjorn": $familiar`Mechanical Songbird` },
      },
      limit: { tries: 1 },
    },
  ],
};
