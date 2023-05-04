import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
  SourceTerminal,
} from "libram";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, useSkill, visitUrl } from "kolmafia";
import { asdonTask, deckTask, potionTask, skillTask } from "./common";

const buffs = $effects`Singer's Faithful Ocelot, Fat Leon's Phat Loot Lyric, The Spirit of Taking`;

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    ...buffs.map(skillTask),
    {
      ...skillTask($effect`Spice Haze`),
      class: $classes`Seal Clubber, Turtle Tamer, Sauceror, Disco Bandit, Accordion Thief`,
    },
    {
      name: "Anticheese",
      completed: () => get("lastAnticheeseDay") > 0,
      do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
      limit: { tries: 1 },
    },
    potionTask($item`government`, true),
    potionTask($item`autumn leaf`),
    {
      name: "Oversized Sparkler",
      completed: () => have($item`oversized sparkler`),
      prepare: () => visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2", false),
      do: () => visitUrl("shop.php?whichshop=fwshop&action=buyitem&quantity=1&whichrow=1257&pwd"),
      limit: { tries: 1 },
    },
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
        acc3: $item`Lil' Doctor™ bag`,
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
      ...deckTask("X of Fortune"),
      class: $classes`Turtle Tamer`,
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
    asdonTask("Observantly"),
    potionTask($item`bag of grain`),
    {
      name: "Steely-Eyed Squint",
      completed: () => have($effect`Steely-Eyed Squint`),
      do: () => useSkill($skill`Steely-Eyed Squint`),
      limit: { tries: 1 },
    },
    skillTask($effect`Feeling Lost`),
    {
      name: "Test",
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () => CommunityService.BoozeDrop.run(() => undefined, 1),
      outfit: {
        hat: $item`wad of used tape`,
        weapon: $item`oversized sparkler`,
        offhand: $item`unbreakable umbrella`,
        back: $item`vampyric cloake`,
        acc1: $item`Guzzlr tablet`,
        // eslint-disable-next-line libram/verify-constants
        acc2: $item`Cincho de Mayo`,
        acc3: $items`barrel hoop earring, gold detective badge`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
        modes: { umbrella: "bucket style" },
      },
      acquire: [{ item: $item`wad of used tape` }],
      limit: { tries: 1 },
    },
  ],
};
