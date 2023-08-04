import { CombatStrategy } from "grimoire-kolmafia";
import { adv1, cliExecute, myPrimestat } from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  Cartography,
  CombatLoversLocket,
  CommunityService,
  CrimboShrub,
  get,
  getKramcoWandererChance,
  getTodaysHolidayWanderers,
  have,
} from "libram";
import Macro from "../combat";
import { CSQuest } from "../engine/task";
import { burnLibrams } from "../lib";

export const CoilWireQuest: CSQuest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: "Holiday Runaway",
      completed: () => getTodaysHolidayWanderers().length === 0 || get("_banderRunaways") >= 1,
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.runaway()),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      limit: { tries: 1 },
    },
    {
      name: "Shrub Meat",
      completed: () => have($effect`Everything Looks Red`),
      ready: () => have($item`cosmic bowling ball`),
      prepare: (): void => {
        CrimboShrub.decorate(myPrimestat().toString(), "Spooky Damage", "Blocking", "Red Ray");
        if (get("_hotTubSoaks") < 1) cliExecute("hottub");
      },
      do: $location`The Skeleton Store`, // Shrub's spooky damage won't kill monsters here
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Open a Big Red Present`).skill($skill`Bowl a Curveball`)
      ),
      outfit: { familiar: $familiar`Crimbo Shrub` },
      limit: { tries: 2 }, // Skeletons in Store opening NC
    },
    {
      name: "Kramco",
      completed: () => get("_sausageFights") > 0,
      ready: () => getKramcoWandererChance() >= 1,
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
      completed: () => get("_bagOfCandy"),
      ready: () => get("ghostLocation") !== $location`none`,
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
        famequip: $item.none,
      },
      limit: { tries: 1 },
    },
    {
      name: "Fruity Skeleton",
      class: $classes`Seal Clubber, Turtle Tamer, Sauceror`,
      completed: () => have($item`cherry`),
      ready: () => !have($effect`Everything Looks Yellow`),
      do: (): void => {
        Cartography.mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`);
      },
      outfit: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
      combat: new CombatStrategy().macro(Macro.skill($skill`Spit jurassic acid`)),
      limit: { tries: 1 },
    },
    {
      name: "Evil Olive",
      class: $classes`Disco Bandit, Accordion Thief`,
      completed: () => have($item`jumbo olive`),
      ready: () => !have($effect`Everything Looks Yellow`),
      do: () => CombatLoversLocket.reminisce($monster`Evil Olive`),
      outfit: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
      combat: new CombatStrategy().macro(Macro.skill($skill`Spit jurassic acid`)),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.CoilWire.isDone(),
      prepare: burnLibrams,
      do: () => CommunityService.CoilWire.run(() => undefined),
      outfit: { modifier: "mp, mp regen 15min" },
      limit: { tries: 1 },
    },
  ],
};
