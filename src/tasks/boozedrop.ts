import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";
import { use } from "kolmafia";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Batform & Bowling",
      ready: () =>
        get("_vampyreCloakeFormUses") < 10 &&
        have($item`cosmic bowling ball`) &&
        get("_reflexHammerUsed") < 3,
      completed: () => have($effect`Bat-Adjacent Form`) && have($effect`Cosmic Ball in the Air`),
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
      name: "MayDay",
      completed: () => !have($item`MayDay™ supply package`),
      do: () => use($item`MayDay™ supply package`),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () => CommunityService.BoozeDrop.run(() => undefined, 1),
      outfit: {
        hat: $item`wad of used tape`,
        back: $item`vampyric cloake`,
        offhand: $item`unbreakable umbrella`,
        acc1: $item`Guzzlr tablet`,
        acc2: $item`gold detective badge`,
        acc3: $item`your cowboy boots`,
        famequip: $item`li'l ninja costume`,
        familiar: $familiar`Trick-or-Treating Tot`,
        modes: { umbrella: "bucket style" },
      },
      effects: [
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        $effect`Glowing Hands`,
        $effect`Hustlin'`,
        $effect`items.enh`,
        $effect`I See Everything Thrice!`,
        $effect`Nearly All-Natural`,
        $effect`Pork Barrel`,
        $effect`There's No N in Love`,
        $effect`Singer's Faithful Ocelot`,
        $effect`Steely-Eyed Squint`,
        $effect`The Spirit of Taking`,
      ],
      acquire: [{ item: $item`wad of used tape` }],
      limit: { tries: 1 },
    },
  ],
};
