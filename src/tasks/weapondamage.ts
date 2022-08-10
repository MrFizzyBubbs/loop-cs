import { CombatStrategy } from "grimoire-kolmafia";
import {
  $effect,
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
import { innerElf } from "./common";

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Carol",
      ready: () => crimboCarols.every((ef) => !have(ef)) && get("_reflexHammerUsed") < 3,
      completed: () => have($effect`Do You Crush What I Crush?`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      outfit: { acc1: $item`Lil' Doctor™ bag`, familiar: $familiar`Ghost of Crimbo Carols` },
      limit: { tries: 1 },
    },
    innerElf(),
    {
      name: "Ungulith",
      ready: () =>
        CombatLoversLocket.availableLocketMonsters().includes($monster`ungulith`) &&
        get("camelSpit") >= 100 &&
        get("_meteorShowerUses") < 5 &&
        get("_saberForceUses") < 5,
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
    {
      name: "Test",
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: () => CommunityService.WeaponDamage.run(() => void {}, 1),
      outfit: {
        weapon: $item`dented scepter`,
        offhand: $item`broken champagne bottle`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Powerful Glove`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`Stick-Knife of Loathing`,
        familiar: $familiar`Disembodied Hand`,
      },
      effects: [
        $effect`Bow-Legged Swagger`,
        $effect`Carol of the Bulls`,
        $effect`Cowrruption`,
        $effect`Disdain of the War Snapper`,
        $effect`Frenzied, Bloody`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Lack of Body-Building`,
        $effect`Rage of the Reindeer`,
        $effect`Scowl of the Auk`,
        $effect`Song of the North`,
        $effect`Tenacity of the Snapper`,
        $effect`The Power of LOV`,
      ],
      acquire: [{ item: $item`broken champagne bottle` }],
      limit: { tries: 1 },
    },
  ],
};
