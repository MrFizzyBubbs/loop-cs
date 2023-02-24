// Entire file courtesy of phccs
import {
  availableAmount,
  haveEffect,
  Item,
  myClass,
  myMp,
  myPrimestat,
  Skill,
  StatType,
  useSkill,
} from "kolmafia";
import {
  $effects,
  $item,
  $skill,
  bestLibramToCast,
  clamp,
  CommunityService,
  get,
  getModifier,
  have,
  possibleLibramSummons,
} from "libram";

export const crimboCarols = $effects`Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping`;

export function convertMilliseconds(milliseconds: number): string {
  const seconds = milliseconds / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = Math.round(minutes - hours * 60);
  return (
    (hours !== 0 ? `${hours} hours, ` : "") +
    (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
    (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
  );
}

type PrimaryClassType =
  | "Seal Clubber"
  | "Turtle Tamer"
  | "Pastamancer"
  | "Sauceror"
  | "Disco Bandit"
  | "Accordion Thief";
type StatSwitch<T> = Record<StatType, T> | (Partial<{ [x in StatType]: T }> & { default: T });
type ClassSwitch<T> =
  | Record<PrimaryClassType, T>
  | (Partial<{ [x in PrimaryClassType]: T }> & { default: T });
export function byClass<T>(thing: ClassSwitch<T>): T {
  const class_ = myClass().toString() as PrimaryClassType;
  return "default" in thing ? thing[class_] ?? thing.default : thing[class_];
}
export function byStat<T>(thing: StatSwitch<T>): T {
  const stat = myPrimestat().toString();
  return "default" in thing ? thing[stat] ?? thing.default : thing[stat];
}

export function canCastLibrams(): boolean {
  const summonNumber = 1 + get("libramSummons");
  const cost = 1 + (summonNumber * (summonNumber - 1)) / 2;
  return myMp() >= cost;
}

function totalDuration(item: Item): number {
  const effect = getModifier("Effect", item);
  return haveEffect(effect) + getModifier("Effect Duration", item) * availableAmount(item);
}

function castPriciestLibram(): boolean {
  const choice = bestLibramToCast();
  if (!choice) return false;
  return useSkill(1, choice);
}

export function burnLibrams(): void {
  while (canCastLibrams()) {
    if (!CommunityService.FamiliarWeight.isDone()) {
      const libramPossibilities = possibleLibramSummons();
      const decisionMap = new Map<Skill, number>();

      if (have($skill`Summon Candy Heart`) && totalDuration($item`green candy heart`) <= 0) {
        const probability =
          libramPossibilities.get($skill`Summon Candy Heart`)?.get($item`green candy heart`) ?? 0;
        decisionMap.set($skill`Summon Candy Heart`, 3 * probability);
      }

      if (have($skill`Summon Taffy`) && totalDuration($item`pulled blue taffy`) < 50) {
        const probability =
          libramPossibilities.get($skill`Summon Taffy`)?.get($item`pulled blue taffy`) ?? 0;
        decisionMap.set($skill`Summon Taffy`, 1 * probability);
      }

      if (have($skill`Summon Love Song`) && totalDuration($item`love song of icy revenge`) < 20) {
        const probability =
          libramPossibilities.get($skill`Summon Love Song`)?.get($item`love song of icy revenge`) ??
          0;
        const currentWeightValue = clamp(
          Math.ceil(totalDuration($item`love song of icy revenge`) / 2),
          0,
          10
        );
        const newWeightValue = clamp(
          Math.ceil((totalDuration($item`love song of icy revenge`) + 5) / 2),
          0,
          10
        );
        decisionMap.set(
          $skill`Summon Love Song`,
          probability * (newWeightValue - currentWeightValue)
        );
      }

      const bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);
      if (bestLibrams.length === 0) {
        if (!castPriciestLibram()) return;
      } else {
        const decision = bestLibrams[0][0];
        useSkill(1, decision);
      }
    } else if (!castPriciestLibram()) return;
  }
}
