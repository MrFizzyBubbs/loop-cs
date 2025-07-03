import { Outfit, OutfitSpec } from "grimoire-kolmafia";
import { Familiar } from "kolmafia";
import {
  $familiar,
  $familiars,
  $item,
  $items,
  $slot,
  byStat,
  get,
  have,
  ToyCupidBow,
  undelay,
} from "libram";

export function equipDefaults(outfit: Outfit, canAttack: boolean): void {
  outfit.equip(chooseFamiliar(canAttack));
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
  outfit.setModes({
    retrocape: [byStat({ Muscle: "vampire", Mysticality: "heck", Moxie: "robot" }), "thrill"],
    umbrella: "broken",
    parka: "kachungasaur",
  });
}

const FAMILIAR_PICKS = [
  {
    familiar: $familiar`Stocking Mimic`,
    famequip: $item.none,
    condition: () => !get("_bagOfCandy"),
  },
  {
    familiar: $familiar`Garbage Fire`,
    condition: () => $familiar`Garbage Fire`.dropsToday < 1,
  },
  {
    familiar: $familiar`Cornbeefadon`,
    condition: () => {
      if (ToyCupidBow.doneToday($familiar`Cornbeefadon`)) return false;
      const currentCupidFamiliar = ToyCupidBow.currentFamiliar();
      if (!currentCupidFamiliar || currentCupidFamiliar === $familiar`Cornbeefadon`) return true;
      return ToyCupidBow.doneToday(currentCupidFamiliar);
    },
  },
];

function findFirstFamiliar(fams: Familiar[]) {
  return fams.find((f) => have(f));
}

export function chooseFamiliar(canAttack: boolean): Pick<OutfitSpec, "familiar" | "famequip"> {
  const pick = FAMILIAR_PICKS.find(
    ({ condition, familiar }) =>
      condition() &&
      have(familiar) &&
      (canAttack || !(familiar.elementalDamage || familiar.physicalDamage))
  );
  if (pick) {
    return {
      famequip:
        undelay(pick.famequip) ??
        (ToyCupidBow.familiarsToday().includes(pick.familiar)
          ? $item`tiny stillsuit`
          : $item`toy Cupid bow`),
      familiar: pick.familiar,
    };
  }
  return {
    famequip: $item`tiny stillsuit`,
    familiar:
      findFirstFamiliar($familiars`Puck Man, Ms. Puck Man`) ?? $familiar`Blood-Faced Volleyball`,
  };
}
