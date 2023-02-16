import { cliExecute, useSkill } from "kolmafia";
import { $effect, $effects, $familiar, $item, $skill, CommunityService, get, have } from "libram";
import { Quest } from "../engine/task";
import { potionTask, skillTask } from "./common";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    ...$effects`Smooth Movements, The Sonata of Sneakiness`.map(skillTask),
    { ...skillTask($effect`Invisible Avatar`), outfit: { acc1: $item`Powerful Glove` } },
    {
      name: "Silent Running",
      completed: () => have($effect`Silent Running`),
      do: () => cliExecute("swim sprints"),
      limit: { tries: 1 },
    },
    {
      name: "Feel Lonely",
      completed: () => get("_feelLonelyUsed") > 0,
      do: () => useSkill($skill`Feel Lonely`),
      limit: { tries: 1 },
    },
    {
      name: "Cop Dollars",
      completed: () => get("_detectiveCasesCompleted") >= 3,
      do: () => cliExecute("Detective Solver.ash"),
      limit: { tries: 1 },
    },
    potionTask($item`shoe gum`),
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
