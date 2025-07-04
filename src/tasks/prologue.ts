import {
  autosell,
  cliExecute,
  getCampground,
  getClanName,
  getWorkshed,
  retrieveItem,
  runChoice,
  takeStorage,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $classes,
  $item,
  $location,
  $skill,
  AutumnAton,
  Clan,
  get,
  have,
  SongBoom,
  SourceTerminal,
} from "libram";
import { CSQuest } from "../engine/task";
import { byPrimaryClass } from "../lib";
import { args } from "../main";
import { deckTask } from "./common";

const PULLS = [
  $item`Great Wolf's beastly trousers`,
  $item`Stick-Knife of Loathing`,
  $item`Stephen's lab coat`,
  $item`extremely wet T-shirt`,
  // chef staff, pulled before spell damage test
];

const BEST_INITIATIVE = byPrimaryClass({
  "Seal Clubber": 2, // Familiar exp: 2
  "Turtle Tamer": 0, // Weapon Damage Percent: 100
  Pastamancer: 3, // Familiar exp: 2
  Sauceror: 1, // Exp: 3
  "Disco Bandit": 0, // Maximum MP Percent: 30
  "Accordion Thief": 2, // Booze Drop: 30
});

export const PrologueQuest: CSQuest = {
  name: "Prologue",
  tasks: [
    {
      name: "Workshed",
      completed: () => getWorkshed() === $item`Asdon Martin keyfob (on ring)`,
      do: () => use($item`Asdon Martin keyfob (on ring)`),
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
    deckTask("Island"),
    deckTask("1952 Mickey Mantle"),
    {
      name: "Sell Mickey Mantle",
      completed: () => !have($item`1952 Mickey Mantle card`),
      do: () => autosell(1, $item`1952 Mickey Mantle card`),
      limit: { tries: 1 },
    },
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
      name: "Terminal Skill",
      completed: () => SourceTerminal.getSkills().includes($skill`Portscan`),
      do: () => SourceTerminal.educate($skill`Portscan`),
      limit: { tries: 1 },
    },
    {
      name: "Detective Badge",
      completed: () => have($item`gold detective badge`),
      do: () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct"),
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
    {
      name: "Backup Camera Reverser",
      completed: () => get("backupCameraReverserEnabled"),
      do: () => cliExecute("backupcamera reverser"),
      limit: { tries: 1 },
    },
    {
      name: "Fallbot",
      completed: () => !AutumnAton.available() || get("_autumnatonQuests") > 0,
      do: (): void => {
        AutumnAton.sendTo($location`The Sleazy Back Alley`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Learn About Bugs",
      ready: () => have($item`S.I.T. Course Completion Certificate`),
      completed: () => get("_sitCourseCompleted") || have($skill`Insectologist`),
      do: () => use($item`S.I.T. Course Completion Certificate`),
      choices: { 1494: 2 },
      limit: { tries: 1 },
    },
    {
      name: "Embers",
      completed: () => get("_septEmberBalanceChecked"),
      do: () => visitUrl("shop.php?whichshop=september"),
      limit: { tries: 1 },
    },
    {
      name: "McHugeLarge",
      completed: () => have($item`McHugeLarge left ski`),
      ready: () => have($item`McHugeLarge duffel bag`),
      do: () => cliExecute("inventory.php?action=skiduffel&pwd"),
      limit: { tries: 1 },
    },
  ],
};
