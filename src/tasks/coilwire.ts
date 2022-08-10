import { CombatStrategy } from "grimoire-kolmafia";
import { adv1, cliExecute, myHp, myMaxhp } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  CrimboShrub,
  get,
  getKramcoWandererChance,
  have,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { holidayRunaway } from "./common";

export const CoilWireQuest: Quest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    holidayRunaway(),
    {
      name: "Shrub Meat",
      ready: () => have($item`cosmic bowling ball`),
      prepare: (): void => {
        CrimboShrub.decorate("Mysticality", "Spooky Damage", "Blocking", "Red Ray");
        if (myHp() < myMaxhp()) cliExecute("hottub");
      },
      completed: () => have($effect`Everything Looks Red`),
      do: $location`The Skeleton Store`, // Shrub's spooky damage won't kill monsters here
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Open a Big Red Present`).skill($skill`Bowl a Curveball`)
      ),
      choices: { 1387: 3 },
      outfit: { familiar: $familiar`Crimbo Shrub` },
      limit: { tries: 2 }, // Skeletons in Store opening NC
    },
    {
      name: "Kramco",
      ready: () => getKramcoWandererChance() >= 1.0,
      completed: () => get("_sausageFights") > 0,
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Micrometeorite`)
          .attack()
          .repeat()
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`Kramco Sausage-o-Matic™`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Mimic",
      ready: () => get("ghostLocation") !== $location`none`,
      completed: () => get("_bagOfCandy"),
      do: () => adv1(get("ghostLocation", $location`none`), 0, ""),
      combat: new CombatStrategy().macro(
        Macro.delevel()
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Trap Ghost`)
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        familiar: $familiar`Stocking Mimic`,
        famequip: $item`none`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => undefined),
      outfit: {
        familiar: $familiar`Left-Hand Man`,
        modifier: "mp, mp regen, switch disembodied hand",
      },
      limit: { tries: 1 },
    },
  ],
};
