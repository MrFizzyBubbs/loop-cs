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
import { CSQuest } from "../engine/task";
import { useSkill, visitUrl } from "kolmafia";
import { asdonTask, potionTask, skillTask } from "./common";
import { CSCombatStrategy } from "../engine/combat";

const buffs = $effects`Singer's Faithful Ocelot, Fat Leon's Phat Loot Lyric, The Spirit of Taking`;

export const BoozeDropQuest: CSQuest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    ...buffs.map((effect) => skillTask(effect)),
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
      combat: new CSCombatStrategy().macro(
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
    { ...potionTask($item`Salsa Caliente™ candle`), class: $classes`Sauceror` },
    {
      name: "Items.enh",
      completed: () => have($effect`items.enh`),
      do: () => SourceTerminal.enhance($effect`items.enh`),
      limit: { tries: 1 },
    },
    asdonTask("Observantly"),
    skillTask({ skill: $skill`Sauce Contemplation`, effect: $effect`Lubricating Sauce` }, true),
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
        back: $item`protonic accelerator pack`,
        acc1: $item`Guzzlr tablet`,
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
