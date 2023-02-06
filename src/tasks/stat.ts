import { myThrall, Thrall, useSkill } from "kolmafia";
import { $classes, $effect, $effects, $item, $skill, $thrall, CommunityService } from "libram";
import { Quest, Task } from "../engine/task";
import { byStat } from "../lib";
import { potionTask, restoreBuffTasks } from "./common";

const SKILL_BUFFS = {
  MUSCLE: $effects`Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper`,
  MYSTICALITY: $effects`Feeling Excited, Big, Song of Bravado`,
  MOXIE: $effects`Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind`,
  HP: $effects`Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper`,
};

function skillBuffTasks(key: keyof typeof SKILL_BUFFS): Task[] {
  return restoreBuffTasks(SKILL_BUFFS[key]);
}

function thrallTask(thrall: Thrall): Task {
  return {
    name: thrall.toString(),
    class: $classes`Pastamancer`,
    completed: () => myThrall() === thrall,
    do: () => useSkill(thrall.skill),
  };
}

function equalizeTask(): Task {
  return {
    ...potionTask(
      byStat({
        Moxie: $item`oil of slipperiness`,
        Muscle: $item`oil of stability`,
        Mysticality: $item`oil of expertise`,
      })
    ),
    class: $classes`Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror`,
  };
}

export const MuscleQuest: Quest = {
  name: "Muscle",
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [
    ...skillBuffTasks("MUSCLE"),
    potionTask($item`LOV Elixir #3`),
    thrallTask($thrall`Elbow Macaroni`),
    // beachTask($effect`Lack of Body-Building`),
    // birdTask("Muscle Percent"),
    // favouriteBirdTask("Muscle Percent"),
    equalizeTask(),
    {
      name: "Test",
      completed: () => CommunityService.Muscle.isDone(),
      do: () => CommunityService.Muscle.run(() => undefined, 1),
      outfit: { modifier: "Muscle" },
      limit: { tries: 1 },
    },
  ],
};

export const MysticalityQuest: Quest = {
  name: "Mysticality",
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.Mysticality.isDone(),
      do: () => CommunityService.Mysticality.run(() => undefined, 1),
      outfit: { modifier: "Mysticality" },
      effects: $effects`Quiet Judgement`,
      limit: { tries: 1 },
    },
  ],
};

export const MoxieQuest: Quest = {
  name: "Moxie",
  tasks: [
    {
      name: "Test",
      prepare: () => useSkill($skill`Bind Penne Dreadful`),
      completed: () => CommunityService.Moxie.isDone(),
      do: () => CommunityService.Moxie.run(() => undefined, 1),
      outfit: { modifier: "Moxie" },
      effects: [$effect`Quiet Desperation`],
      limit: { tries: 1 },
    },
  ],
};

export const HPQuest: Quest = {
  name: "HP",
  tasks: [
    {
      name: "Test",
      prepare: () => useSkill($skill`Bind Undead Elbow Macaroni`),
      completed: () => CommunityService.HP.isDone(),
      do: () => CommunityService.HP.run(() => undefined, 1),
      outfit: { modifier: "HP" },
      effects: [
        $effect`A Few Extra Pounds`,
        $effect`Power Ballad of the Arrowsmith`,
        $effect`Quiet Determination`,
        $effect`Reptilian Fortitude`,
        $effect`Song of Starch`,
      ],
      limit: { tries: 1 },
    },
  ],
};

// const StatTests = byStat({
//   Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
//   Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
//   Moxie: [Mysticality, Muscle, Hitpoints, Moxie],
// });

// export default StatTests;
