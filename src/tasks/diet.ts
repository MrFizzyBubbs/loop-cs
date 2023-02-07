import { cliExecute, drink, myInebriety, myLevel, reverseNumberology, use } from "kolmafia";
import { $effects, $item, get, have } from "libram";
import { Quest } from "../engine/task";

export const DietQuest: Quest = {
  name: "Diet",
  tasks: [
    {
      name: "Numberology",
      ready: () => Object.keys(reverseNumberology()).includes("69") && get("skillLevel144") <= 3,
      completed: () => get("_universeCalculated") >= get("skillLevel144"),
      do: () => cliExecute("numberology 69"),
      limit: { tries: 3 },
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
