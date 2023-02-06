import { drink, myInebriety, myLevel, use } from "kolmafia";
import { $effects, $item, have } from "libram";
import { Quest } from "../engine/task";

export const DietQuest: Quest = {
  name: "Diet",
  tasks: [
    {
      name: "Open Pilsners",
      completed: () => !have($item`astral six-pack`),
      do: () => use($item`astral six-pack`),
    },
    {
      name: "Drink Pilsner",
      ready: () => myLevel() >= 11,
      completed: () => myInebriety() >= 4,
      do: () => drink($item`astral pilsner`),
      effects: $effects`Ode to Booze`,
    },
  ],
};
