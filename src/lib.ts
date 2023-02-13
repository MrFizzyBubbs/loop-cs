import { Class, myClass, myPrimestat, StatType } from "kolmafia";
import { $effects } from "libram";

// From phccs
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

export const crimboCarols = $effects`Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping`;
export const shavingsBuffs = $effects`Barbell Moustache, Cowboy Stache, Friendly Chops, Grizzly Beard, Gull-Wing Moustache, Musician's Musician's Moustache, Pointy Wizard Beard, Space Warlord's Beard, Spectacle Moustache, Surrealist's Moustache, Toiletbrush Moustache`;

type StatSwitch<T> = Record<StatType, T> | (Partial<{ [x in StatType]: T }> & { default: T });
type ClassSwitch<T> = { options: Map<Class, T>; default: T };
export function byClass<T>(thing: ClassSwitch<T>): T {
  return thing.options.get(myClass()) ?? thing.default;
}
export function byStat<T>(thing: StatSwitch<T>): T {
  const stat = myPrimestat().toString();
  return "default" in thing ? thing[stat] ?? thing.default : thing[stat];
}
