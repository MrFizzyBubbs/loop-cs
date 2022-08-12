import { Item, Location, Monster, runChoice, toUrl, use, useSkill, visitUrl } from "kolmafia";
import { $effects, $skill, get, have } from "libram";

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

// From phccs
export function mapMonster(location: Location, monster: Monster): void {
  useSkill($skill`Map the Monsters`);
  if (!get("mappingMonsters")) throw new Error(`I am not actually mapping anything. Weird!`);
  else {
    while (get("mappingMonsters")) {
      visitUrl(toUrl(location));
      runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
    }
  }
}

export function tryUse(item: Item): void {
  if (have(item)) use(item);
}

export const crimboCarols = $effects`Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping`;
export const shavingsBuffs = $effects`Barbell Moustache, Cowboy Stache, Friendly Chops, Grizzly Beard, Gull-Wing Moustache, Musician's Musician's Moustache, Pointy Wizard Beard, Space Warlord's Beard, Spectacle Moustache, Surrealist's Moustache, Toiletbrush Moustache`;
