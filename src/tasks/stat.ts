import { myThrall, Thrall, useSkill } from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $item,
  $skill,
  $thrall,
  byStat,
  CommunityService,
} from "libram";
import { CSQuest, CSTask } from "../engine/task";
import { beachTask, potionTask, skillTask } from "./common";

const SKILL_BUFFS = {
  MUSCLE: $effects`Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination`,
  MYSTICALITY: $effects`Feeling Excited, Big, Song of Bravado, Quiet Judgement`,
  MOXIE: $effects`Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind`,
  HP: $effects`Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination`,
};

function skillBuffTasks(key: keyof typeof SKILL_BUFFS): CSTask[] {
  return SKILL_BUFFS[key].map(skillTask);
}

function thrallTask(thrall: Thrall): CSTask {
  return {
    name: thrall.toString(),
    class: $classes`Pastamancer`,
    completed: () => myThrall() === thrall,
    do: () => useSkill(thrall.skill),
    limit: { tries: 1 },
  };
}

function equalizeTask(): CSTask {
  return {
    ...potionTask(
      byStat({
        Muscle: $item`oil of stability`,
        Mysticality: $item`oil of expertise`,
        Moxie: $item`oil of slipperiness`,
      }),
      true
    ),
    class: $classes`Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror`,
    limit: { tries: 1 },
  };
}

export const Muscle: CSQuest = {
  name: "Muscle",
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [
    ...skillBuffTasks("MUSCLE"),
    skillTask($skill`Blessing of the War Snapper`),
    thrallTask($thrall`Elbow Macaroni`),
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

export const Mysticality: CSQuest = {
  name: "Mysticality",
  completed: () => CommunityService.Mysticality.isDone(),
  tasks: [
    ...skillBuffTasks("MYSTICALITY"),
    equalizeTask(),
    {
      name: "Test",
      completed: () => CommunityService.Mysticality.isDone(),
      do: () => CommunityService.Mysticality.run(() => undefined, 1),
      outfit: { modifier: "Mysticality" },
      limit: { tries: 1 },
    },
  ],
};

export const Moxie: CSQuest = {
  name: "Moxie",
  completed: () => CommunityService.Moxie.isDone(),
  tasks: [
    ...skillBuffTasks("MOXIE"),
    thrallTask($thrall`Penne Dreadful`),
    equalizeTask(),
    {
      name: "Test",
      completed: () => CommunityService.Moxie.isDone(),
      do: () => CommunityService.Moxie.run(() => undefined, 1),
      outfit: { modifier: "Moxie" },
      limit: { tries: 1 },
    },
  ],
};

export const Hitpoints: CSQuest = {
  name: "Hitpoints",
  completed: () => CommunityService.HP.isDone(),
  tasks: [
    ...skillBuffTasks("HP"),
    skillTask($skill`Blessing of the War Snapper`),
    thrallTask($thrall`Elbow Macaroni`),
    beachTask($effect`Lack of Body-Building`),
    equalizeTask(),
    {
      name: "Test",
      completed: () => CommunityService.HP.isDone(),
      do: () => CommunityService.HP.run(() => undefined, 1),
      outfit: { modifier: "HP" },
      limit: { tries: 1 },
    },
  ],
};

const StatTests = byStat({
  Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
  Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
  Moxie: [Mysticality, Muscle, Hitpoints, Moxie],
});

export default StatTests;
