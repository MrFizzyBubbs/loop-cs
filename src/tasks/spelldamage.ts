import {
  cliExecute,
  elementalResistance,
  myHp,
  myMaxhp,
  numericModifier,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $effects,
  $element,
  $familiar,
  $item,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  have,
} from "libram";
import { Quest } from "../engine/task";
import { innerElfTask, meteorShowerTask } from "./common";

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
    { ...innerElfTask },
    { ...meteorShowerTask },
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
      name: "Test",
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () => CommunityService.SpellDamage.run(() => undefined, 16),
      outfit: {
        hat: $item`astral chapeau`,
        weapon: $item`Staff of the Roaring Hearth`,
        offhand: $item`weeping willow wand`,
        pants: $item`pantogram pants`,
        acc1: $item`battle broom`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`Stick-Knife of Loathing`,
        familiar: $familiar`Disembodied Hand`,
      },
      effects: [
        $effect`Arched Eyebrow of the Archmage`,
        $effect`Carol of the Hells`,
        $effect`Concentration`,
        $effect`Cowrruption`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Mental A-cue-ity`,
        $effect`Pisces in the Skyces`,
        $effect`Song of Sauce`,
        $effect`The Magic of LOV`,
        $effect`We're All Made of Starfish`,
      ],
      limit: { tries: 1 },
    },
  ],
};
