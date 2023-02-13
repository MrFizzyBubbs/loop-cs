import {
  $classes,
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  AsdonMartin,
  CommunityService,
  get,
  have,
  Macro,
  SourceTerminal,
} from "libram";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, useSkill, visitUrl } from "kolmafia";
import { deckTask, potionTask, skillTask } from "./common";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Batform",
      completed: () => have($effect`Bat-Adjacent Form`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Become a Bat`)
          .skill($skill`Bowl Straight Up`)
          .skill($skill`Reflex Hammer`)
      ),
      outfit: {
        back: $item`vampyric cloake`,
        acc1: $item`Lil' Doctor™ bag`,
        familiar: $familiar`none`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Play Pool",
      completed: () => have($effect`Hustlin'`),
      do: () => cliExecute("pool 3"),
    },
    {
      name: "Pray",
      class: $classes`Pastamancer`,
      completed: () => get("_barrelPrayer"),
      do: () => cliExecute("barrelprayer buff"),
      limit: { tries: 1 },
    },
    { ...potionTask($item`Salsa Caliente™ candle`), class: $classes`Sauceror` },
    {
      name: "Items.enh",
      completed: () => have($effect`items.enh`),
      do: () => SourceTerminal.enhance($effect`items.enh`),
      limit: { tries: 1 },
    },
    {
      name: "Driving Observantly",
      completed: () => have($effect`Driving Observantly`),
      prepare: () => AsdonMartin.insertFuel($item`20-lb can of rice and beans`),
      do: () => AsdonMartin.drive($effect`Driving Observantly`),
      limit: { tries: 1 },
    },
    {
      name: "Steely-Eyed Squint",
      completed: () => have($effect`Steely-Eyed Squint`),
      do: () => useSkill($skill`Steely-Eyed Squint`),
      limit: { tries: 1 },
    },
    {
      name: "Feel Lost",
      completed: () => have($effect`Feeling Lost`),
      do: () => useSkill($skill`Feel Lost`),
      limit: { tries: 1 },
    },
    {
      ...deckTask("X - The Wheel of Fortune"),
      class: $classes`Turtle Tamer`,
    },
    skillTask($skill`The Spirit of Taking`),
    skillTask($skill`Singer's Faithful Ocelot`),
    skillTask($skill`Fat Leon's Phat Loot Lyric`),
    {
      name: "Anticheese",
      completed: () => get("lastAnticheeseDay") > 0,
      do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
      limit: { tries: 1 },
    },
    potionTask($item`government`, true),
    potionTask($item`bag of grain`),
    potionTask($item`autumn leaf`),
    {
      name: "Test",
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () => CommunityService.BoozeDrop.run(() => undefined, 1),
      outfit: {
        hat: $item`wad of used tape`,
        offhand: $item`unbreakable umbrella`,
        back: $item`vampyric cloake`,
        acc1: $item`Guzzlr tablet`,
        acc2: $item`gold detective badge`,
        acc3: $item`your cowboy boots`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
        modes: { umbrella: "bucket style" },
      },
      acquire: [{ item: $item`wad of used tape` }],
      limit: { tries: 1 },
    },
  ],
};
