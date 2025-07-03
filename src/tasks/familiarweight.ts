import {
  cliExecute,
  create,
  familiarWeight,
  knollAvailable,
  myAscensions,
  myFamiliar,
  mySign,
  toInt,
  use,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import { CSQuest } from "../engine/task";
import { beachTask, libramTask, meteorShowerTask, potionTask, skillTask } from "./common";
import { OutfitSpec } from "grimoire-kolmafia";
import { CSCombatStrategy } from "../engine/combat";
import Macro from "../combat";

const outfit: OutfitSpec = {
  hat: $item`Daylight Shavings Helmet`,
  weapon: $item`Fourth of May Cosplay Saber`,
  offhand: $item`burning paper crane`,
  shirt: $item`Stephen's lab coat`,
  pants: $item`Great Wolf's beastly trousers`,
  acc1: $item`Brutal brogues`,
  acc2: $item`Beach Comb`,
  acc3: $item`hewn moon-rune spoon`,
  familiar: $familiar`Comma Chameleon`,
};

export const FamiliarWeightQuest: CSQuest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    { ...skillTask($skill`Chorale of Companionship`), class: $classes`Accordion Thief` },
    skillTask($effect`Thoughtful Empathy`, true),
    potionTask($item`green candy heart`),
    beachTask($effect`Do I Know You From Somewhere?`),
    {
      name: "Puzzle Champ",
      completed: () => get("_witchessBuff"),
      do: () => cliExecute("witchess"),
      limit: { tries: 1 },
    },
    {
      name: "Play Pool",
      completed: () => have($effect`Billiards Belligerence`),
      do: () => cliExecute("pool 1"),
      limit: { tries: 1 },
    },
    {
      name: "Fireworks Hat",
      completed: () => have($item`sombrero-mounted sparkler`),
      prepare: () => visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2", false),
      do: () => visitUrl("shop.php?whichshop=fwshop&action=buyitem&quantity=1&whichrow=1248&pwd"),
      limit: { tries: 1 },
    },
    {
      name: "Tea Party",
      completed: () => get("_madTeaParty"),
      prepare: (): void => {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        use($item`"DRINK ME" potion`);
      },
      do: () => cliExecute("hatter sombrero-mounted sparkler"),
      limit: { tries: 1 },
    },
    {
      name: "Homemade Robot Gear",
      completed: () =>
        have($item`homemade robot gear`) || get("commaFamiliar") === $familiar`Homemade Robot`,
      do: () => use($item`box of Familiar Jacks`),
      outfit: { familiar: $familiar`Homemade Robot` },
      acquire: [{ item: $item`box of Familiar Jacks` }],
      limit: { tries: 1 },
    },
    {
      name: "Feed Chameleon",
      completed: () => get("commaFamiliar") === $familiar`Homemade Robot`,
      do: (): void => {
        visitUrl(
          `inv_equip.php?which=2&action=equip&whichitem=${toInt($item`homemade robot gear`)}&pwd`
        );
        visitUrl("charpane.php");
      },
      outfit: { familiar: $familiar`Comma Chameleon` },
      limit: { tries: 1 },
    },
    {
      name: "Paper Crane",
      completed: () => have($item`burning paper crane`),
      do: () => create($item`burning paper crane`),
      ready: () => have($item`burning newspaper`),
      limit: { tries: 1 },
    },
    {
      name: "Icy Revenge",
      completed: () => have($effect`Cold Hearted`, 20),
      ready: () => have($item`love song of icy revenge`),
      do: () => use($item`love song of icy revenge`),
      limit: { tries: 4 },
    },
    {
      name: "Blue Taffy",
      completed: () => have($effect`Blue Swayed`, 50),
      ready: () => have($item`pulled blue taffy`),
      do: () => use($item`pulled blue taffy`),
      limit: { tries: 5 },
    },
    {
      name: "Unlock Beach",
      completed: () => get("lastDesertUnlock") === myAscensions(),
      do: (): void => {
        const desertAccessItem = knollAvailable()
          ? $item`bitchin' meatcar`
          : $item`Desert Bus pass`;
        if (!have(desertAccessItem)) {
          cliExecute(`acquire ${desertAccessItem.name}`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Tune Moon",
      completed: () => mySign() === "Platypus",
      ready: () => !get("moonTuned"),
      do: () => cliExecute("spoon platypus"),
      limit: { tries: 1 },
    },
    potionTask($item`silver face paint`),
    {
      name: "Gingerbread Clock",
      completed: () => get("_gingerbreadClockAdvanced"),
      ready: () => get("_gingerbreadCityTurns") === 0,
      do: $location`Gingerbread Civic Center`,
      limit: { tries: 1 },
    },
    {
      // Need 178 lbs for 50 sprinkles from 1 free kill
      name: "Gingerbread Sprinkles",
      completed: () =>
        have($item`sprinkles`, 50) ||
        get("_gingerbreadCityTurns") >= 4 ||
        have($item`gingerbread spice latte`) ||
        have($effect`Whole Latte Love`),
      ready: () => get("_gingerbreadClockAdvanced"),
      prepare: (): void => {
        const weight = familiarWeight(myFamiliar()) + weightAdjustment();
        if (weight < 158) {
          throw `Unable to guarantee 50 sprinkles, current familiar weight of ${weight} lbs is < 158 lbs`;
        }
      },
      do: $location`Gingerbread Upscale Retail District`,
      outfit: { ...outfit, familiar: $familiar`Chocolate Lab`, famequip: $item`tiny stillsuit` },
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Meteor Shower`).skill($skill`Shattering Punch`)
      ),
      limit: { tries: 1 },
    },
    {
      name: "Gingerbread Noon",
      completed: () => get("_gingerbreadCityTurns") >= 5,
      do: $location`Gingerbread Upscale Retail District`,
      outfit: { ...outfit, familiar: $familiar`Pair of Stomping Boots` },
      choices: { 1208: 3 },
      combat: new CSCombatStrategy().macro(Macro.runaway()),
      limit: { tries: 3 },
    },
    potionTask($item`gingerbread spice latte`),
    meteorShowerTask(),
    libramTask(),
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: () => CommunityService.FamiliarWeight.run(() => undefined, 1),
      outfit,
      limit: { tries: 1 },
    },
  ],
};
