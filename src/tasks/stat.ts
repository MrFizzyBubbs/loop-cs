import { useSkill } from "kolmafia";
import { $effect, $effects, $skill, CommunityService } from "libram";
import { Quest } from "../engine/task";

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

export const MuscleQuest: Quest = {
  name: "Muscle",
  tasks: [
    {
      name: "Test",
      prepare: () => useSkill($skill`Bind Undead Elbow Macaroni`),
      completed: () => CommunityService.Muscle.isDone(),
      do: () => CommunityService.Muscle.run(() => undefined, 1),
      outfit: { modifier: "Muscle" },
      effects: [
        $effect`Quiet Determination`,
        $effect`Power Ballad of the Arrowsmith`,
        $effect`Rage of the Reindeer`,
      ],
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
