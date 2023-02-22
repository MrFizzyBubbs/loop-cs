import { Outfit } from "grimoire-kolmafia";
import { $familiar, $item, $items, $slot } from "libram";
import { byStat } from "../lib";

export function equipDefaults(outfit: Outfit): void {
  outfit.equip(
    byStat({
      Muscle: $items`Iunion Crown`,
      Mysticality: $items`astral chapeau, Iunion Crown`,
      Moxie: $items`very pointy crown, Iunion Crown`,
    }),
    $slot`hat`
  );
  outfit.equip(
    byStat({
      Muscle: $items`dented scepter, Fourth of May Cosplay Saber`,
      default: $items`Fourth of May Cosplay Saber`,
    }),
    $slot`weapon`
  );
  outfit.equip($item`unbreakable umbrella`, $slot`off-hand`);
  outfit.equip($items`LOV Epaulettes, unwrapped knock-off retro superhero cape`, $slot`back`);
  outfit.equip($items`LOV Eardigan, Jurassic Parka`, $slot`shirt`);
  outfit.equip($item`Cargo Cultist Shorts`, $slot`pants`);
  outfit.equip($item`Powerful Glove`, $slot`acc1`);
  outfit.equip($item`your cowboy boots`, $slot`acc2`);
  outfit.equip(
    byStat({
      Muscle: $items`Brutal brogues, Kremlin's Greatest Briefcase`,
      Mysticality: $items`battle broom, Kremlin's Greatest Briefcase`,
      Moxie: $items`LOV Earrings, Beach Comb`,
    }),
    $slot`acc3`
  );
  outfit.equip($familiar`Melodramedary`);
  outfit.equip($item`tiny stillsuit`, $slot`familiar`);
  outfit.setModes({
    retrocape: [byStat({ Muscle: "vampire", Mysticality: "heck", Moxie: "robot" }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur",
  });
}
