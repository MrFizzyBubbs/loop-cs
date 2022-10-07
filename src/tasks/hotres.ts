import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, CommunityService, get, have } from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Foam Suit",
      ready: () => get("_fireExtinguisherCharge") >= 10 && get("_saberForceUses") < 5,
      completed: () => have($effect`Fireproof Foam Suit`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
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
      prepare: (): void => {
        cliExecute("retrocape vampire hold");
        cliExecute("parka pterodactyl");
      },
      completed: () => CommunityService.HotRes.isDone(),
      do: () => CommunityService.HotRes.run(() => undefined, 1),
      outfit: {
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        shirt: $item`Jurassic Parka`,
        pants: $item`pantogram pants`,
        acc1: $item`Brutal brogues`,
        acc2: $item`hewn moon-rune spoon`,
        acc3: $item`Beach Comb`,
        famequip: $item`Snow Suit`,
        familiar: $familiar`Exotic Parrot`,
      },
      effects: [
        $effect`Astral Shell`,
        $effect`Elemental Saucesphere`,
        $effect`Empathy`,
        $effect`Feeling Peaceful`,
        $effect`Hot-Headed`,
        $effect`Leash of Linguini`,
        $effect`Sleazy Hands`,
      ],
      limit: { tries: 1 },
    },
  ],
};
