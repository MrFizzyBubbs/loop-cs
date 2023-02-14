import { canAdventure, Class, cliExecute, knollAvailable, mySign, use, visitUrl } from "kolmafia";
import {
  $class,
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import { Quest } from "../engine/task";
import { byClass } from "../lib";
import { asdonTask, beachTask, meteorShowerTask, potionTask, skillTask } from "./common";

const buffs = $effects`Empathy, Leash of Linguini, Blood Bond`;

const maxTurns = byClass({
  options: new Map<Class, number>([[$class`Accordion Thief`, 18]]),
  default: 20,
});

const outfit = {
  hat: $item`Daylight Shavings Helmet`,
  weapon: $item`Fourth of May Cosplay Saber`,
  offhand: $item`rope`,
  pants: $item`Great Wolf's beastly trousers`,
  acc1: $item`Brutal brogues`,
  acc2: $item`Beach Comb`,
  acc3: $item`hewn moon-rune spoon`,
  familiar: $familiar`Mini-Trainbot`,
  famequip: $item`overloaded Yule battery`,
};

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    ...buffs.map(skillTask),
    { ...skillTask($skill`Chorale of Companionship`), class: $classes`Accordion Thief` },
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
    },
    {
      name: "Yule Battery",
      completed: () => have($item`overloaded Yule battery`),
      do: () => use($item`box of Familiar Jacks`),
      outfit: { familiar: $familiar`Mini-Trainbot` },
      acquire: [{ item: $item`box of Familiar Jacks` }],
      limit: { tries: 1 },
    },
    {
      name: "Icy Revenge",
      ready: () => have($item`love song of icy revenge`),
      completed: () => have($effect`Cold Hearted`, 20),
      do: () => use($item`love song of icy revenge`),
      limit: { tries: 4 },
    },
    {
      name: "Blue Taffy",
      ready: () => have($item`pulled blue taffy`),
      completed: () => have($effect`Blue Swayed`, 50),
      do: () => use($item`pulled blue taffy`),
      limit: { tries: 5 },
    },
    {
      name: "Unlock Beach",
      completed: () => canAdventure($location`South of the Border`),
      do: (): void => {
        const desertAccessItem = knollAvailable()
          ? $item`bitchin' meatcar`
          : $item`Desert Bus pass`;
        if (!have(desertAccessItem)) {
          cliExecute(`acquire ${desertAccessItem.name}`);
        }
      },
    },
    {
      name: "Tune Moon",
      ready: () => !get("moonTuned"),
      completed: () => mySign() === "Platypus",
      do: () => cliExecute("spoon platypus"),
      limit: { tries: 1 },
    },
    potionTask($item`silver face paint`),
    asdonTask("Waterproofly"),
    { ...meteorShowerTask(), do: $location`The Ice Hole`, outfit: outfit },
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: () => CommunityService.FamiliarWeight.run(() => undefined, maxTurns),
      outfit: outfit,
      limit: { tries: 1 },
    },
  ],
};
