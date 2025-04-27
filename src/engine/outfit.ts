import { Outfit, OutfitSpec } from "grimoire-kolmafia";
import { $familiar, $item, $items, $slot, byStat } from "libram";

export function equipDefaults(outfit: Outfit): void {
  outfit.equip(
    byStat({
      Muscle: $items`Apriling band helmet`,
      Mysticality: $items`astral chapeau, Apriling band helmet`,
      Moxie: $items`very pointy crown, Apriling band helmet`,
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
  outfit.equip(
    byStat({
      Muscle: $items`Brutal brogues, Kremlin's Greatest Briefcase`,
      Mysticality: $items`battle broom, Kremlin's Greatest Briefcase`,
      Moxie: $items`LOV Earrings, Beach Comb`,
    }),
    $slot`acc1`
  );
  outfit.equip($item`your cowboy boots`, $slot`acc2`);
  outfit.equip($item`Powerful Glove`, $slot`acc3`);
  outfit.equip($familiar`Melodramedary`);
  outfit.equip($item`tiny stillsuit`, $slot`familiar`);
  outfit.setModes({
    retrocape: [byStat({ Muscle: "vampire", Mysticality: "heck", Moxie: "robot" }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur",
  });
}

export const defaultOutfit: OutfitSpec = {
  hat: byStat({
    Muscle: $items`Iunion Crown`,
    Mysticality: $items`astral chapeau, Iunion Crown`,
    Moxie: $items`very pointy crown, Iunion Crown`,
  }),
  weapon: byStat({
    Muscle: $items`dented scepter, Fourth of May Cosplay Saber`,
    default: $items`Fourth of May Cosplay Saber`,
  }),
  offhand: $item`unbreakable umbrella`,
  back: $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
  shirt: $items`LOV Eardigan, Jurassic Parka`,
  pants: $item`Cargo Cultist Shorts`,
  acc1: byStat({
    Muscle: $items`Brutal brogues, Kremlin's Greatest Briefcase`,
    Mysticality: $items`battle broom, Kremlin's Greatest Briefcase`,
    Moxie: $items`LOV Earrings, Beach Comb`,
  }),
  acc2: $item`your cowboy boots`,
  acc3: $item`Powerful Glove`,
  familiar: $familiar`Melodramedary`,
  famequip: $item`tiny stillsuit`,
  modes: {
    retrocape: [byStat({ Muscle: "vampire", Mysticality: "heck", Moxie: "robot" }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur",
  },
};
