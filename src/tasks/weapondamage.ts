import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, useSkill } from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  CombatLoversLocket,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { Quest } from "../engine/task";
import { crimboCarols } from "../lib";
import { beachTask, innerElfTask, potionTask, skillTask } from "./common";

const buffs = $effects`Carol of the Bulls, Disdain of the War Snapper, Frenzied\, Bloody, Jackasses' Symphony of Destruction, Rage of the Reindeer, Scowl of the Auk, Song of the North, Tenacity of the Snapper`;

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    ...buffs.map(skillTask),
    potionTask($item`LOV Elixir #3`),
    potionTask($item`vial of hamethyst juice`),
    beachTask($effect`Lack of Body-Building`),
    {
      name: "Play Pool",
      class: $classes`Seal Clubber, Turtle Tamer, Sauceror, Disco Bandit, Accordion Thief`,
      completed: () => have($effect`Billiards Belligerence`),
      do: () => cliExecute("pool 1"),
      limit: { tries: 1 },
    },
    {
      name: "Do You Crush What I Crush?",
      ready: () => crimboCarols.every((ef) => !have(ef)),
      completed: () => have($effect`Do You Crush What I Crush?`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      outfit: {
        acc1: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Ghost of Crimbo Carols`,
        famequip: $item.none,
      },
      limit: { tries: 1 },
    },
    innerElfTask(),
    {
      name: "Spit Ungulith",
      ready: () => get("camelSpit") >= 100,
      completed: () =>
        have($effect`Spit Upon`) &&
        have($effect`Meteor Showered`) &&
        (have($item`corrupted marrow`) || have($effect`Cowrruption`)),
      do: () => CombatLoversLocket.reminisce($monster`ungulith`),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`%fn, spit on me!`)
          .skill($skill`Meteor Shower`)
          .skill($skill`Use the Force`)
      ),
      choices: { 1387: 3 },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Melodramedary`,
      },
      limit: { tries: 1 },
    },
    potionTask($item`corrupted marrow`),
    {
      name: "Bow-Legged Swagger",
      completed: () => get("_bowleggedSwaggerUsed"),
      do: () => useSkill($skill`Bow-Legged Swagger`),
    },
    {
      name: "Test",
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: () => CommunityService.WeaponDamage.run(() => void {}, 1),
      outfit: {
        weapon: $item`dented scepter`,
        offhand: $item`broken champagne bottle`,
        pants: $item`Great Wolf's beastly trousers`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`Stick-Knife of Loathing`,
        familiar: $familiar`Disembodied Hand`,
      },
      acquire: [{ item: $item`broken champagne bottle` }],
      limit: { tries: 1 },
    },
  ],
};
