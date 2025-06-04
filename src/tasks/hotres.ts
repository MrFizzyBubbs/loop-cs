import {
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { CSQuest } from "../engine/task";
import { beachTask, skillTask } from "./common";
import { CSCombatStrategy } from "../engine/combat";

const buffs = $effects`Feeling Peaceful, Astral Shell, Ghostly Shell, Empathy, Leash of Linguini, Blood Bond`;

export const HotResQuest: CSQuest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    ...buffs.map((effect) => skillTask(effect)),
    beachTask($effect`Hot-Headed`),
    {
      name: "Foam Suit",
      completed: () => have($effect`Fireproof Foam Suit`),
      ready: () => get("_fireExtinguisherCharge") >= 10 && get("_saberForceUses") < 5,
      do: $location`The Dire Warren`,
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`)
      ),
      choices: { 1387: 3 },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        familiar: $familiar`none`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.HotRes.isDone(),
      do: () => CommunityService.HotRes.run(() => undefined, 1),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`Jurassic Parka`,
        pants: $item`designer sweatpants`,
        acc1: $item`cursed monkey's paw`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        familiar: $familiar`Exotic Parrot`,
        famequip: $item`tiny stillsuit`,
        modes: { retrocape: ["vampire", "hold"], parka: "pterodactyl" },
      },
      limit: { tries: 1 },
    },
  ],
};
