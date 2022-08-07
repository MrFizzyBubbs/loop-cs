import { Outfit } from "grimoire-kolmafia";
import { $familiar, $item, $items, $slot } from "libram";

export function equipDefaults(outfit: Outfit): void {
  outfit.equip($item`astral chapeau`, $slot`hat`);
  outfit.equip($items`LOV Epaulettes, vampyric cloake`, $slot`back`);
  outfit.equip($item`Fourth of May Cosplay Saber`, $slot`weapon`);
  outfit.equip($item`familiar scrapbook`, $slot`off-hand`);
  outfit.equip($item`pantogram pants`, $slot`pants`);
  outfit.equip($items`battle broom, Powerful Glove`, $slot`acc1`);
  outfit.equip($item`your cowboy boots`, $slot`acc2`);
  outfit.equip($item`Kremlin's Greatest Briefcase`, $slot`acc3`);
  outfit.equip($item`none`, $slot`familiar`);
  outfit.equip($familiar`Melodramedary`);
}
