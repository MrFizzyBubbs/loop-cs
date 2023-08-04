import { drink, itemAmount, myInebriety, myLevel, use, useSkill } from "kolmafia";
import { $effects, $item, $skill, clamp, get, have } from "libram";
import { CSQuest } from "../engine/task";

export const DietQuest: CSQuest = {
  name: "Diet",
  tasks: [
    {
      name: "Ancestral Recall",
      completed: () => $skill`Ancestral Recall`.timescast > 0,
      ready: () => have($item`blue mana`),
      do: () => useSkill($skill`Ancestral Recall`),
      limit: { tries: 1 },
    },
    {
      name: "Borrowed Time",
      completed: () => get("_borrowedTimeUsed"),
      do: () => use($item`borrowed time`),
      acquire: [{ item: $item`borrowed time` }],
      limit: { tries: 1 },
    },
    {
      name: "Open Six-Pack",
      completed: () => !have($item`astral six-pack`),
      do: () => use($item`astral six-pack`),
      limit: { tries: 1 },
    },
    {
      name: "Drink Pilsners",
      completed: () => myInebriety() >= 4,
      ready: () => myLevel() >= 11,
      do: () =>
        drink(
          $item`astral pilsner`,
          clamp(itemAmount($item`astral pilsner`), 0, 4 - myInebriety())
        ),
      effects: $effects`Ode to Booze`,
      limit: { tries: 1 },
    },
  ],
};
