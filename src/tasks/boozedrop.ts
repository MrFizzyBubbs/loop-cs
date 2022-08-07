import { cliExecute } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  have,
  Macro,
} from "libram";
import { tryUse } from "../lib";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";

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
      name: "Test",
      prepare: (): void => {
        cliExecute("umbrella item");
        tryUse($item`MayDay™ supply package`);
        ensureEffect($effect`Glowing Hands`);
      },
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
      },
      effects: [
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
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
