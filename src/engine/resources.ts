import { CombatResource as BaseCombatResource, OutfitSpec } from "grimoire-kolmafia";
import { Skill } from "kolmafia";
import { $effect, $item, $skill, get, have } from "libram";

export interface Resource {
  name: string;
  available: () => boolean;
  equip?: OutfitSpec;
}

export type CombatResource = Resource & BaseCombatResource;

export interface FreekillSource extends CombatResource {
  do: Skill;
}

export const freekillSources: FreekillSource[] = [
  {
    name: "Shattering Punch",
    available: () => get("_shatteringPunchUsed") < 3,
    do: $skill`Shattering Punch`,
  },
  {
    name: "Gingerbread Mob Hit",
    available: () => !get("_gingerbreadMobHitUsed"),
    do: $skill`Gingerbread Mob Hit`,
  },
  {
    name: "Chest X-Ray",
    available: () => get("_chestXRayUsed") < 3,
    do: $skill`Chest X-Ray`,
    equip: { acc1: $item`Lil' Doctor™ bag` },
  },
  {
    name: "Spit Jurassic Acid",
    available: () => !have($effect`Everything Looks Yellow`),
    do: $skill`Spit jurassic acid`,
    equip: { shirt: $item`Jurassic Parka`, modes: { parka: "dilophosaur" } },
  },
];
