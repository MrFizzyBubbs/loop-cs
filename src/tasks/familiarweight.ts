import { cliExecute, mySign, use, visitUrl } from "kolmafia";
import { $effect, $effects, $familiar, $item, CommunityService, get, have } from "libram";
import { Quest } from "../engine/task";
import { beachTask, meteorShowerTask, potionTask, restoreBuffTasks } from "./common";

const buffs = $effects`Empathy, Leash of Linguini, Blood Bond`;

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    ...restoreBuffTasks(buffs),
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
      limit: { tries: 2 },
    },
    {
      name: "Blue Taffy",
      ready: () => have($item`pulled blue taffy`),
      completed: () => have($effect`Blue Swayed`, 50),
      do: () => use($item`pulled blue taffy`),
      limit: { tries: 5 },
    },
    {
      name: "Tune Moon",
      ready: () => !get("moonTuned"),
      completed: () => mySign() === "Platypus",
      do: () => cliExecute("spoon platypus"),
      limit: { tries: 1 },
    },
    meteorShowerTask(),
    potionTask($item`silver face paint`),
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: () => CommunityService.FamiliarWeight.run(() => undefined, 21),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`rope`, // TODO remove this?
        pants: $item`Great Wolf's beastly trousers`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Mini-Trainbot`,
        famequip: $item`overloaded Yule battery`,
      },
      limit: { tries: 1 },
    },
  ],
};
