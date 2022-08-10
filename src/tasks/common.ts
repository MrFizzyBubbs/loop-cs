import { CombatStrategy } from "grimoire-kolmafia";
import { myLevel } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  Clan,
  Counter,
  get,
  have,
  StompingBoots,
} from "libram";
import Macro from "../combat";
import { Task } from "../engine/task";
import { args } from "../main";

export function holidayRunaway(): Task {
  return {
    name: "Holiday Runaway",
    ready: () => StompingBoots.couldRunaway(),
    completed: () => (Counter.get("Holiday Monster window begin") ?? Infinity) > 0,
    do: $location`Noob Cave`,
    combat: new CombatStrategy().macro(Macro.ifHolidayWanderer(Macro.runaway()).abort()),
    outfit: { familiar: $familiar`Pair of Stomping Boots` },
    limit: { tries: 1 },
  };
}

export function innerElf(): Task {
  return {
    name: "Inner Elf",
    ready: () => myLevel() >= 13 && get("_kgbTranquilizerDartUses") < 3,
    prepare: () => Clan.join(args.slimeclan),
    completed: () => have($effect`Inner Elf`),
    do: $location`The Slime Tube`,
    post: () => Clan.join(args.vipclan),
    combat: new CombatStrategy().macro(Macro.skill($skill`KGB tranquilizer dart`)),
    choices: { 326: 1 },
    effects: [$effect`Blood Bubble`],
    outfit: { acc1: $item`Kremlin's Greatest Briefcase`, familiar: $familiar`Machine Elf` },
    limit: { tries: 1 },
  };
}

export function meteorShower(): Task {
  return {
    name: "Meteor Shower",
    ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
    completed: () => have($effect`Meteor Showered`),
    do: $location`The Dire Warren`,
    combat: new CombatStrategy().macro(
      Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
    ),
    choices: { 1387: 3 },
    outfit: { weapon: $item`Fourth of May Cosplay Saber` },
    limit: { tries: 1 },
  };
}
