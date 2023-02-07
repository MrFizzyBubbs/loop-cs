import { CombatStrategy } from "grimoire-kolmafia";
import {
  canEquip,
  cliExecute,
  elementalResistance,
  myHp,
  myLevel,
  myMaxhp,
  numericModifier,
  storageAmount,
  takeStorage,
  useSkill,
} from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $element,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { beachTask, innerElfTask, meteorShowerTask } from "./common";

const chefstaves = $items`Staff of the Roaring Hearth, Staff of Simmering Hatred`;

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Simmer",
      completed: () => have($effect`Simmering`),
      do: () => ensureEffect($effect`Simmering`),
      limit: { tries: 1 },
    },
    {
      name: "Barrel Prayer",
      class: $classes`Sauceror`,
      completed: () => get("_barrelPrayer"),
      do: () => cliExecute("barrelprayer buff"),
    },
    {
      name: "Cargopocket",
      completed: () => get("_cargoPocketEmptied"),
      do: () => cliExecute("cargo 177"),
    },
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
    beachTask($effect`We're All Made of Starfish`),
    {
      name: "KGB",
      completed: () =>
        numericModifier($item`Kremlin's Greatest Briefcase`, "Spell Damage Percent") > 0,
      do: () => cliExecute("Briefcase.ash enchantment spell"),
      limit: { tries: 1 },
    },
    {
      name: "Deep Dark",
      completed: () => have($effect`Visions of the Deep Dark Deeps`),
      do: (): void => {
        const resist = 1 - elementalResistance($element`spooky`) / 100;
        const neededHp = Math.max(500, myMaxhp() * 4 * resist);
        if (myMaxhp() < neededHp) throw `Not enough HP for Deep Dark Visions.`;
        while (myHp() < neededHp) useSkill($skill`Cannelloni Cocoon`);
        useSkill($skill`Deep Dark Visions`);
      },
      outfit: {
        familiar: $familiar`Exotic Parrot`,
        modifier: "HP 500max, Spooky Resistance",
      },
      effects: $effects`Astral Shell, Elemental Saucesphere`,
      limit: { tries: 1 },
    },
    {
      name: "Snack Voucher",
      completed: () => get("grimoire3Summons") > 0,
      do: () => useSkill($skill`Summon Alice's Army Cards`),
      limit: { tries: 1 },
    },
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
      do: () => CommunityService.SpellDamage.run(() => undefined, 16),
      outfit: {
        hat: $items`astral chapeau, Hollandaise helmet, none`,
        weapon: chefstaves,
        offhand: $items`Abracandalabra, weeping willow wand`,
        pants: $item`pantogram pants`,
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
        $effect`The Magic of LOV`,
      ],
      limit: { tries: 1 },
    },
  ],
};
