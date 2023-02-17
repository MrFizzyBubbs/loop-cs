import { CombatStrategy } from "grimoire-kolmafia";
import { adv1, cliExecute, myHp, myMaxhp, myPrimestat, retrieveItem } from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $items,
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
import { Quest } from "../engine/task";
import { burnLibrams } from "../lib";
import { generalStoreItem } from "./leveling";

const sewerItems = $items`turtle totem, saucepan, stolen accordion`;

export const CoilWireQuest: Quest = {
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
      ready: () => have($item`cosmic bowling ball`),
      prepare: (): void => {
        CrimboShrub.decorate(myPrimestat().toString(), "Spooky Damage", "Blocking", "Red Ray");
        if (myHp() < myMaxhp()) cliExecute("hottub");
      },
      completed: () => have($effect`Everything Looks Red`),
      do: $location`The Skeleton Store`, // Shrub's spooky damage won't kill monsters here
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Open a Big Red Present`).skill($skill`Bowl a Curveball`)
      ),
      outfit: { familiar: $familiar`Crimbo Shrub` },
      limit: { tries: 2 }, // Skeletons in Store opening NC
    },
    {
      name: "Kramco",
      ready: () => getKramcoWandererChance() >= 1,
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
        famequip: $item.none,
      },
      limit: { tries: 1 },
    },
    {
      name: "Fruity Skeleton",
      class: $classes`Seal Clubber, Turtle Tamer, Sauceror`,
      ready: () => !have($effect`Everything Looks Yellow`),
      completed: () => have($item`cherry`),
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
      ready: () => !have($effect`Everything Looks Yellow`),
      completed: () => have($item`jumbo olive`),

      do: () => CombatLoversLocket.reminisce($monster`Evil Olive`),
      outfit: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
      combat: new CombatStrategy().macro(Macro.skill($skill`Spit jurassic acid`)),
      limit: { tries: 1 },
    },
    {
      // Prevent swapping pants and consequently losing MP when casting leveling buffs
      name: "General Store",
      completed: () => [generalStoreItem, ...sewerItems].every((item) => have(item)),
      do: () => [generalStoreItem, ...sewerItems].forEach((item) => retrieveItem(item)),
      outfit: { pants: $item`designer sweatpants` },
    },
    {
      name: "Test",
      completed: () => CommunityService.CoilWire.isDone(),
      prepare: burnLibrams,
      do: () => CommunityService.CoilWire.run(() => undefined),
      outfit: {
        hat: $item`Iunion Crown`,
        weapon: $item`weeping willow wand`,
        offhand: $item`familiar scrapbook`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Eight Days a Week Pill Keeper`,
        acc2: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`hewn moon-rune spoon`,
        modes: { retrocape: ["heck", "thrill"], parka: "ghostasaurus" },
      },
      limit: { tries: 1 },
    },
  ],
};
