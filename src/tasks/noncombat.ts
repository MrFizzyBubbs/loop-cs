import { cliExecute } from "kolmafia";
import { $effect, $familiar, $item, CommunityService, get } from "libram";
import { Quest } from "../engine/task";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Cop Dollars",
      completed: () => get("_detectiveCasesCompleted") >= 3,
      do: () => cliExecute("Detective Solver.ash"),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: () => cliExecute("umbrella nc"),
      completed: () => CommunityService.Noncombat.isDone(),
      do: () => CommunityService.Noncombat.run(() => undefined, 1),
      outfit: {
        hat: $item`very pointy crown`,
        back: $item`protonic accelerator pack`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`pantogram pants`,
        familiar: $familiar`Disgeist`,
      },
      effects: [
        $effect`Blessing of the Bird`,
        $effect`Feeling Lonely`,
        $effect`Gummed Shoes`,
        $effect`Invisible Avatar`,
        $effect`Silent Running`,
        $effect`Smooth Movements`,
        $effect`The Sonata of Sneakiness`,
        $effect`Throwing Some Shade`,
      ],
      limit: { tries: 1 },
    },
  ],
};
