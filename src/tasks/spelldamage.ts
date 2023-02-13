import { CombatStrategy } from "grimoire-kolmafia";
import {
  canEquip,
  Class,
  cliExecute,
  myHp,
  myLevel,
  myMaxhp,
  numericModifier,
  storageAmount,
  takeStorage,
  useSkill,
} from "kolmafia";
import {
  $class,
  $classes,
  $effect,
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
import { byClass } from "../lib";
import { innerElfTask, meteorShowerTask, potionTask, skillTask } from "./common";

const chefstaves = $items`Staff of the Roaring Hearth, Staff of Simmering Hatred`;

const maxTurns = byClass({
  options: new Map<Class, number>([
    [$class`Pastamancer`, 12],
    [$class`Sauceror`, 11],
    [$class`Accordion Thief`, 14],
  ]),
  default: 15,
});

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    skillTask($skill`Simmer`),
    skillTask($skill`Spirit of Cayenne`),
    { ...skillTask($skill`Elron's Explosive Etude`), class: $classes`Accordion Thief` },
    {
      name: "Play Pool",
      class: $classes`Pastamancer`,
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
      ready: () => myLevel() >= 15 && get("_reflexHammerUsed") < 3,
      completed: () => have($effect`Saucefingers`),
      do: $location`The Dire Warren`,
      outfit: { acc1: $item`Lil' Doctor™ bag`, familiar: $familiar`Mini-Adventurer` },
      choices: { 768: 4 },
      combat: new CombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      limit: { tries: 2 },
    },
    innerElfTask(),
    meteorShowerTask(),
    {
      name: "Pull Staff",
      completed: () => chefstaves.some((staff) => have(staff)),
      do: (): void => {
        const staff = chefstaves.find((s) => storageAmount(s) > 0 && canEquip(s));
        if (staff) takeStorage(staff, 1);
      },
    },
    {
      name: "Test",
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () => CommunityService.SpellDamage.run(() => undefined, maxTurns),
      outfit: {
        hat: $items`astral chapeau, Hollandaise helmet, none`,
        weapon: chefstaves,
        offhand: $items`Abracandalabra, weeping willow wand`,
        acc1: $item`battle broom`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Disembodied Hand`,
        famequip: $item`Stick-Knife of Loathing`,
      },
      effects: [
        $effect`Arched Eyebrow of the Archmage`,
        $effect`Carol of the Hells`,
        $effect`Concentration`,
        $effect`Cowrruption`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Mental A-cue-ity`,
        $effect`Pisces in the Skyces`,
        $effect`Sigils of Yeg`,
        $effect`Song of Sauce`,
      ],
      limit: { tries: 1 },
    },
  ],
};
