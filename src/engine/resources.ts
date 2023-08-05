import { CombatResource, OutfitSpec } from "grimoire-kolmafia";
import { Item } from "kolmafia";
import { $effect, $item, $skill, get, have } from "libram";

export interface FreeKillSource extends Pick<CombatResource, "do"> {
  available: () => boolean;
  equip?: Item | OutfitSpec;
}

export const freeKillSources: FreeKillSource[] = [
  {
    available: () => !have($effect`Everything Looks Yellow`),
    do: $skill`Spit jurassic acid`,
    equip: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
  },
  {
    available: () => get("_chestXRayUsed") < 3,
    do: $skill`Chest X-Ray`,
    equip: $item`Lil' Doctor™ bag`,
  },
  { available: () => get("_shatteringPunchUsed") < 3, do: $skill`Shattering Punch` },
  { available: () => !get("_gingerbreadMobHitUsed"), do: $skill`Gingerbread Mob Hit` },
];
