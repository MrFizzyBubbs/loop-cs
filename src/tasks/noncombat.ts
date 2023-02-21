import { cliExecute } from "kolmafia";
import { $effect, $effects, $familiar, $item, CommunityService, get, have } from "libram";
import { Quest } from "../engine/task";
import { potionTask, skillTask } from "./common";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    ...$effects`Feeling Lonely, Smooth Movements, The Sonata of Sneakiness, Invisible Avatar`.map(
      skillTask
    ),
    {
      name: "Silent Running",
      completed: () => have($effect`Silent Running`),
      do: () => cliExecute("swim sprints"),
      limit: { tries: 1 },
    },
    {
      name: "Cop Dollars",
      completed: () => get("_detectiveCasesCompleted") >= 3,
      do: () => cliExecute("Detective Solver.ash"),
      limit: { tries: 1 },
    },
    potionTask($item`shoe gum`, true),
    potionTask($item`shady shades`),
    {
      name: "Test",
      completed: () => CommunityService.Noncombat.isDone(),
      do: () => CommunityService.Noncombat.run(() => undefined, 1),
      outfit: {
        hat: $item`very pointy crown`,
        offhand: $item`unbreakable umbrella`,
        back: $item`protonic accelerator pack`,
        shirt: $item`Jurassic Parka`,
        familiar: $familiar`Disgeist`,
        famequip: $item`tiny stillsuit`,
        modes: { umbrella: "cocoon", parka: "pterodactyl" },
      },
      limit: { tries: 1 },
    },
  ],
};
