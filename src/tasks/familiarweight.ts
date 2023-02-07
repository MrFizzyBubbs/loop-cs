import { cliExecute, mySign, use, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, CommunityService, get, have } from "libram";
import { Quest } from "../engine/task";
import { beachTask, meteorShowerTask } from "./common";

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Anticheese",
      completed: () => get("lastAnticheeseDay") === 1,
      do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
      acquire: [{ item: $item`bitchin' meatcar` }], // Need ~500 meat for meatcar
      limit: { tries: 1 },
    },
    {
      name: "DRINK ME",
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
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
    },
    {
      name: "Tune Moon",
      ready: () => !get("moonTuned"),
      completed: () => mySign() === "Platypus",
      do: () => cliExecute("spoon platypus"),
      limit: { tries: 1 },
    },
    meteorShowerTask(),
    beachTask($effect`Do I Know You From Somewhere?`),
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: () => CommunityService.FamiliarWeight.run(() => undefined, 21),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`rope`,
        pants: $item`Great Wolf's beastly trousers`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Mini-Trainbot`,
        famequip: $item`overloaded Yule battery`,
      },
      effects: [
        $effect`Billiards Belligerence`,
        $effect`Blood Bond`,
        $effect`Empathy`,
        $effect`Leash of Linguini`,
        $effect`Puzzle Champ`,
        $effect`Robot Friends`,
        $effect`You Can Really Taste the Dormouse`,
      ],
      limit: { tries: 1 },
    },
  ],
};
