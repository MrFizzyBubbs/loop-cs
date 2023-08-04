import { cliExecute, useSkill } from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $monster,
  $skill,
  CombatLoversLocket,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { CSQuest } from "../engine/task";
import { innerElfTask, potionTask, skillTask } from "./common";
import { CSCombatStrategy } from "../engine/combat";

const buffs = $effects`Carol of the Bulls, Frenzied\, Bloody, Jackasses' Symphony of Destruction, Rage of the Reindeer, Scowl of the Auk, Song of the North, Tenacity of the Snapper`;

export const WeaponDamageQuest: CSQuest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    ...buffs.map(skillTask),
    skillTask($skill`Blessing of the War Snapper`),
    {
      // Sometimes LOV Elixir #3 does not drop
      name: "Play Pool",
      completed: () => have($effect`The Power of LOV`) || have($effect`Billiards Belligerence`),
      do: () => cliExecute("pool 1"),
      limit: { tries: 1 },
    },
    innerElfTask(),
    {
      name: "Meteor Ungulith",
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`ungulith`),
      do: () => CombatLoversLocket.reminisce($monster`ungulith`),
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
      ),
      choices: { 1387: 3 },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar.none,
      },
      limit: { tries: 1 },
    },
    potionTask($item`corrupted marrow`),
    {
      name: "Bow-Legged Swagger",
      completed: () => get("_bowleggedSwaggerUsed"),
      do: () => useSkill($skill`Bow-Legged Swagger`),
      limit: { tries: 1 },
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
