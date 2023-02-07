import {
  cliExecute,
  getClanName,
  getWorkshed,
  myPrimestat,
  retrieveItem,
  reverseNumberology,
  runChoice,
  takeStorage,
  use,
  visitUrl,
} from "kolmafia";
import { $classes, $familiar, $item, $skill, Clan, get, have, Pantogram, SongBoom } from "libram";
import { Quest } from "../engine/task";
import { args } from "../main";

const PULLS = [
  $item`Great Wolf's beastly trousers`,
  $item`Stick-Knife of Loathing`,
  $item`Staff of the Roaring Hearth`,
];

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
      name: "Numberology",
      ready: () => Object.keys(reverseNumberology()).includes("69"),
      completed: () => get("_universeCalculated") >= Math.min(get("skillLevel144"), 3),
      do: () => cliExecute("numberology 69"),
      limit: { tries: 3 },
    },
    {
      name: "Borrowed Time",
      completed: () => get("_borrowedTimeUsed"),
      do: () => use($item`borrowed time`),
      acquire: [{ item: $item`borrowed time` }],
      limit: { tries: 1 },
    },
    {
      name: "Pulls",
      completed: () => PULLS.every((item) => have(item)),
      do: () => PULLS.filter((item) => !have(item)).forEach((item) => takeStorage(1, item)),
      limit: { tries: 1 },
    },
    {
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested"),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_desk"),
      limit: { tries: 1 },
    },
    {
      name: "Deck",
      completed: () => get("_deckCardsDrawn") >= 10,
      do: () => cliExecute("cheat rope; cheat forest"),
      limit: { tries: 1 },
    },
    {
      name: "Barrel Hoop Earring",
      completed: () => get("_barrelPrayer"),
      class: $classes`Seal Clubber, Disco Bandit`,
      do: () => cliExecute("barrelprayer earring"),
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
    {
      name: "Pantogramming",
      completed: () => Pantogram.havePants(),
      do: (): void => {
        Pantogram.makePants(
          "Mysticality",
          "Hot Resistance: 2",
          "Maximum HP: 40",
          "Combat Rate: -5",
          "Spell Damage Percent: 20"
        );
      },
      limit: { tries: 1 },
    },
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
      name: "Vote",
      completed: () => have($item`"I Voted!" sticker`),
      do: () => cliExecute("VotingBooth.ash"),
      limit: { tries: 1 },
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
  ],
};
