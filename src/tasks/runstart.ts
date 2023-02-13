import {
  Class,
  cliExecute,
  getCampground,
  getClanName,
  getWorkshed,
  myPrimestat,
  retrieveItem,
  runChoice,
  takeStorage,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $classes,
  $familiar,
  $item,
  $location,
  $skill,
  AutumnAton,
  Clan,
  get,
  have,
  SongBoom,
} from "libram";
import { Quest } from "../engine/task";
import { byClass } from "../lib";
import { args } from "../main";
import { deckTask } from "./common";

const PULLS = [$item`Great Wolf's beastly trousers`, $item`Stick-Knife of Loathing`];

const BEST_INITIATIVE = byClass({
  options: new Map<Class, number>([
    [$class`Seal Clubber`, 2], // Familiar exp: 2
    [$class`Turtle Tamer`, 3], // Weapon Damage Percent: 100
    [$class`Disco Bandit`, 4], // Maximum MP Percent: 30
    [$class`Accordion Thief`, 1], // Booze Drop: 30
    [$class`Pastamancer`, 2], // Familiar exp: 2
    [$class`Sauceror`, 1], // Exp: 3
  ]),
  default: 0,
});

export const RunStartQuest: Quest = {
  name: "Run Start",
  tasks: [
    {
      name: "Workshed",
      completed: () => getWorkshed() === $item`Asdon Martin keyfob`,
      do: () => use($item`Asdon Martin keyfob`),
      limit: { tries: 1 },
    },
    {
      name: "Garden",
      completed: () => [0, undefined].includes(getCampground()[$item`peppermint sprout`.name]),
      do: () => cliExecute("garden pick"),
      limit: { tries: 1 },
    },
    {
      name: "Non-Staff Pulls",
      completed: () => PULLS.every((item) => have(item)),
      do: () => PULLS.filter((item) => !have(item)).forEach((item) => takeStorage(1, item)),
      limit: { tries: 1 },
    },
    {
      name: "Clan",
      completed: () => getClanName() === args.vipclan,
      do: () => Clan.join(args.vipclan),
      limit: { tries: 1 },
    },
    {
      name: "Council",
      completed: () => get("lastCouncilVisit") > 0,
      do: () => visitUrl("council.php"),
      limit: { tries: 1 },
    },
    {
      name: "Toot",
      prepare: () => visitUrl("tutorial.php?action=toot"),
      completed: () =>
        get("questM05Toot") === "finished" && !have($item`letter from King Ralph XI`),
      do: () => use($item`letter from King Ralph XI`),
      limit: { tries: 1 },
    },
    {
      name: "Skeleton Store",
      completed: () => get("questM23Meatsmith") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=meatsmith&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Overgrown Lot",
      completed: () => get("questM24Doc") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=doc&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Madness Bakery",
      completed: () => get("questM25Armorer") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Alice's Army",
      completed: () => !!get("grimoire3Summons"),
      ready: () => have($skill`Summon Alice's Army Cards`),
      do: () => useSkill(1, $skill`Summon Alice's Army Cards`),
      limit: { tries: 1 },
    },
    {
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested"),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_desk"),
      limit: { tries: 1 },
    },
    deckTask("Forest"),
    deckTask("Rope"),
    {
      name: "Barrel Hoop Earring",
      completed: () => get("_barrelPrayer"),
      class: $classes`Seal Clubber, Disco Bandit`,
      do: () => cliExecute("barrelprayer glamour"),
      limit: { tries: 1 },
    },
    {
      name: "Cowboy Boots",
      completed: () => have($item`your cowboy boots`),
      do: () => visitUrl("place.php?whichplace=town_right&action=townright_ltt"),
      limit: { tries: 1 },
    },
    {
      name: "Detective Badge",
      completed: () => have($item`gold detective badge`),
      do: () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct"),
      limit: { tries: 1 },
    },
    // {
    //   name: "Pantogramming",
    //   completed: () => Pantogram.havePants(),
    //   do: (): void => {
    //     Pantogram.makePants(
    //       "Mysticality",
    //       "Hot Resistance: 2",
    //       "Maximum HP: 40",
    //       "Combat Rate: -5",
    //       "Spell Damage Percent: 20"
    //     );
    //   },
    //   limit: { tries: 1 },
    // },
    {
      name: "Mummery",
      completed: () => get("_mummeryMods").includes(myPrimestat().toString()),
      do: () => cliExecute(`mummery ${myPrimestat().toString().toLowerCase()}`),
      outfit: { familiar: $familiar`Melodramedary` },
      limit: { tries: 1 },
    },
    {
      name: "BoomBox",
      completed: () => SongBoom.song() === "Total Eclipse of Your Meat",
      do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
      limit: { tries: 1 },
    },
    {
      name: "Horsery",
      completed: () => get("_horsery") === "dark horse",
      do: () => cliExecute("horsery dark"),
      limit: { tries: 1 },
    },
    {
      name: "Vote!",
      completed: () => have($item`"I Voted!" sticker`),
      do: (): void => {
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        visitUrl(
          `choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=${BEST_INITIATIVE}&local%5B%5D=${BEST_INITIATIVE}`
        );
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
      },
    },
    {
      name: "Scavenge",
      completed: () => get("_daycareGymScavenges") > 0,
      do: (): void => {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
        runChoice(3);
        runChoice(2);
      },
      limit: { tries: 1 },
    },
    {
      name: "Cosplay Saber",
      completed: () => get("_saberMod") > 0,
      do: () => cliExecute("saber familiar"),
      limit: { tries: 1 },
    },
    {
      name: "Unlock Bird",
      completed: () => have($skill`Seek out a Bird`),
      do: () => use($item`Bird-a-Day calendar`),
      limit: { tries: 1 },
    },

    {
      name: "Lathe",
      prepare: () => visitUrl("shop.php?whichshop=lathe"),
      completed: () => have($item`weeping willow wand`),
      do: () => retrieveItem($item`weeping willow wand`),
      limit: { tries: 1 },
    },
    {
      name: "Backup Camera Reverser",
      completed: () => get("backupCameraReverserEnabled"),
      do: () => cliExecute("backupcamera reverser"),
      limit: { tries: 1 },
    },
    {
      name: "Fallbot",
      completed: () => !AutumnAton.available() || get("_autumnatonQuests") > 0,
      do: () => AutumnAton.sendTo($location`The Sleazy Back Alley`),
    },
  ],
};
