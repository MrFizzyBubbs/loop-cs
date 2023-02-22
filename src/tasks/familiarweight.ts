import { cliExecute, knollAvailable, myAscensions, mySign, use, visitUrl } from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import { Quest } from "../engine/task";
import { burnLibrams, byClass } from "../lib";
import { beachTask, meteorShowerTask, potionTask, skillTask } from "./common";

const maxTurns = byClass({
  "Accordion Thief": 18,
  default: 20,
});

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    ...$effects`Empathy, Leash of Linguini, Blood Bond`.map(skillTask),
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
    },
    {
      name: "Tune Moon",
      completed: () => mySign() === "Platypus",
      ready: () => !get("moonTuned"),
      do: () => cliExecute("spoon platypus"),
      limit: { tries: 1 },
    },
    meteorShowerTask(),
    potionTask($item`silver face paint`),
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      prepare: burnLibrams,
      do: () => CommunityService.FamiliarWeight.run(() => undefined, maxTurns),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`rope`,
        pants: $item`Great Wolf's beastly trousers`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Beach Comb`,
        acc3: $item`hewn moon-rune spoon`,
        familiar: $familiar`Mini-Trainbot`,
        famequip: $item`overloaded Yule battery`,
      },
      limit: { tries: 1 },
    },
  ],
};
