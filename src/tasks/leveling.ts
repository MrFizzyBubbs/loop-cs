import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  cliExecute,
  drink,
  getCampground,
  myInebriety,
  myLevel,
  retrieveItem,
  runChoice,
  sweetSynthesis,
  totalFreeRests,
  toUrl,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  ChateauMantegna,
  ensureEffect,
  get,
  getKramcoWandererChance,
  getTodaysHolidayWanderers,
  have,
  StompingBoots,
  TunnelOfLove,
  Witchess,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { crimboCarols, mapMonster, tryUse } from "../lib";
import { innerElf } from "./common";

const levelingBuffs = [
  // Skill
  $effect`Big`,
  $effect`Blood Bond`,
  $effect`Blood Bubble`,
  $effect`Carol of the Bulls`,
  $effect`Carol of the Hells`,
  $effect`Carol of the Thrills`,
  $effect`Feeling Excited`,
  $effect`Feeling Peaceful`,
  $effect`Frenzied, Bloody`,
  $effect`Inscrutable Gaze`,
  $effect`Ruthlessly Efficient`,
  $effect`Song of Bravado`,
  $effect`Triple-Sized`,
  // Class Skill
  $effect`Astral Shell`,
  $effect`Elemental Saucesphere`,
  $effect`Empathy`,
  $effect`Ghostly Shell`,
  $effect`Leash of Linguini`,
  $effect`Stevedave's Shanty of Superiority`,
  // ML
  $effect`Drescher's Annoying Noise`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Pride of the Puffin`,
  // Beach Comb
  $effect`Do I Know You From Somewhere?`,
  $effect`You Learned Something Maybe!`,
  // Items
  $effect`Baconstoned`,
  $effect`Confidence of the Votive`,
  $effect`Glittering Eyelashes`,
  // Other
  $effect`Broad-Spectrum Vaccine`,
  $effect`Favored by Lyle`,
  $effect`Puzzle Champ`,
  $effect`Starry-Eyed`,
  $effect`Thaumodynamic`,
  $effect`Total Protonic Reversal`,
  $effect`Uncucumbered`,
];

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
    {
      name: "Buffs",
      completed: () => levelingBuffs.every((ef) => have(ef)),
      do: () => levelingBuffs.forEach((ef) => ensureEffect(ef)),
      outfit: { acc1: $item`Powerful Glove` },
      effects: $effects`The Odour of Magick`, // Reduce skill MP cost
      limit: { tries: 1 },
    },
    {
      name: "Range",
      completed: () => get("hasRange"),
      do: () => use($item`Dramatic™ range`),
      acquire: [{ item: $item`Dramatic™ range` }],
      limit: { tries: 1 },
    },
    {
      name: "Saucecraft",
      prepare: () =>
        $skills`Advanced Saucecrafting, Prevent Scurvy and Sobriety`.forEach((s) => useSkill(s)),
      completed: () => have($effect`Mystically Oiled`),
      do: () =>
        $items`ointment of the occult, cordial of concentration`.forEach((item) =>
          retrieveItem(item)
        ),
      post: () => use($item`ointment of the occult`),
      limit: { tries: 1 },
    },
    {
      name: "Cloud-Talk",
      completed: () => have($effect`That's Just Cloud-Talk, Man`),
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
      limit: { tries: 1 },
    },
    {
      name: "Garden",
      completed: () => getCampground()[$item`peppermint sprout`.name] === 0,
      do: () => cliExecute("garden pick"),
      limit: { tries: 1 },
    },
    {
      name: "Synth Learning",
      completed: () => have($effect`Synthesis: Learning`),
      do: () => sweetSynthesis($item`peppermint twist`, $item`peppermint patty`),
      acquire: [{ item: $item`peppermint twist` }, { item: $item`peppermint patty` }],
      limit: { tries: 1 },
    },
    {
      name: "Bastille",
      completed: () => get("_bastilleGames") > 0,
      do: () => cliExecute("bastille.ash mainstat brutalist"),
      outfit: { offhand: $item`familiar scrapbook` },
      limit: { tries: 1 },
    },
    {
      name: "Holiday Runaway",
      ready: () => StompingBoots.couldRunaway(),
      completed: () => getTodaysHolidayWanderers().length === 0 || get("_banderRunaways") >= 2,
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.runaway()),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      limit: { tries: 1 },
    },
    {
      name: "Ninja Costume",
      ready: () => get("_monstersMapped") < 3 && get("_chestXRayUsed") < 3,
      completed: () => have($item`li'l ninja costume`) && have($effect`Giant Growth`),
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      post: () => visitUrl("questlog.php?which=1"), // Check quest log for protonic ghost location
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Giant Growth`).skill($skill`Chest X-Ray`)
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        acc1: $item`Lil' Doctor™ bag`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Nanobrainy",
      ready: () => get("ghostLocation") !== $location`none` && get("_nanorhinoCharge") >= 100,
      completed: () => have($effect`Nanobrainy`),
      do: () => adv1(get("ghostLocation", $location`none`), 0, ""),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Entangling Noodles`) // Myst skill to trigger nanorhino buff
          .delevel()
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Trap Ghost`)
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        familiar: $familiar`Nanorhino`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Carol",
      ready: () =>
        crimboCarols.every((ef) => !have(ef)) && get("cosmicBowlingBallReturnCombats") < 1,
      completed: () => have($effect`Holiday Yoked`),
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Bowl a Curveball`)),
      outfit: { familiar: $familiar`Ghost of Crimbo Carols` },
      limit: { tries: 1 },
    },
    {
      name: "LOV Tunnel",
      completed: () => get("_loveTunnelUsed"),
      do: () =>
        TunnelOfLove.fightAll(
          "LOV Epaulettes",
          "Open Heart Surgery",
          "LOV Extraterrestrial Chocolate"
        ),
      combat: new CombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_($monster`LOV Engineer`, Macro.skill($skill`Candyblast`).repeat())
          .if_($monster`LOV Equivocator`, Macro.default())
      ),
      outfit: { shirt: $item`makeshift garbage shirt` },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Ten-Percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      outfit: { back: $item`LOV Epaulettes`, offhand: $item`familiar scrapbook` },
      limit: { tries: 1 },
    },
    {
      name: "Chateau",
      prepare: () => ChateauMantegna.changeNightstand("foreign language tapes"),
      completed: () => get("timesRested") >= totalFreeRests(),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_restbox"),
      outfit: { back: $item`LOV Epaulettes`, offhand: $item`familiar scrapbook` },
      limit: { tries: 40 },
    },
    {
      name: "Snojo",
      prepare: (): void => {
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
      },
      completed: () => get("_snojoFreeFights") >= 10,
      do: $location`The X-32-F Combat Training Snowman`,
      post: (): void => {
        if (get("_snojoFreeFights") === 10) cliExecute("hottub"); // Clean -stat effects
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Bowl Straight Up`).default()),
      outfit: { shirt: $item`makeshift garbage shirt` },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 10 },
    },
    {
      name: "Eldritch Tentacle",
      completed: () => get("_eldritchHorrorEvoked"),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
      },
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: { shirt: $item`makeshift garbage shirt` },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "God Lobster",
      completed: () => get("_godLobsterFights") >= 3,
      do: () => visitUrl("main.php?fightgodlobster=1"),
      combat: new CombatStrategy().macro(Macro.default()),
      choices: { 1310: () => (have($item`God Lobster's Ring`) ? 3 : 1) }, // Get -stats on last fight
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Witchess Witch",
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Curse of Weaksauce`)
          .attack()
          .repeat()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        shirt: $item`makeshift garbage shirt`,
        modes: { umbrella: "broken" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess King",
      prepare: () => cliExecute("terminal educate portscan"),
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      combat: new CombatStrategy().macro(
        Macro.delevel()
          .skill($skill`Portscan`) // Portscan so government agent appears in DMT later
          .attack()
          .repeat()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        shirt: $item`makeshift garbage shirt`,
        modes: { umbrella: "broken" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess Queen",
      completed: () => Witchess.fightsDone() >= 5,
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CombatStrategy().macro(
        Macro.item($item`Time-Spinner`)
          .attack()
          .repeat()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        shirt: $item`makeshift garbage shirt`,
        modes: { umbrella: "broken" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "DMT",
      completed: () => get("_machineTunnelsAdv") >= 5,
      do: $location`The Deep Machine Tunnels`,
      combat: new CombatStrategy().macro(
        Macro.if_($monster`Government agent`, Macro.skill($skill`Disintegrate`)).default()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        familiar: $familiar`Machine Elf`,
        modes: { umbrella: "broken", backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 5 },
    },
    innerElf(),
    {
      name: "Party Fair",
      completed: () => get("_questPartyFair") !== "unstarted",
      do: (): void => {
        visitUrl(toUrl($location`The Neverending Party`));
        if (["food", "booze"].includes(get("_questPartyFairQuest"))) runChoice(1);
        else runChoice(2);
      },
      limit: { tries: 1 },
    },
    {
      name: "Sausage Goblin",
      completed: () => get("_sausageFights") > 1,
      ready: () => getKramcoWandererChance() >= 1.0 && have($item`cosmic bowling ball`),
      do: $location`The Neverending Party`,
      choices: { 1322: 1 },
      combat: new CombatStrategy().macro(
        Macro.if_($monster`sausage goblin`, Macro.skill($skill`Bowl Sideways`).default()).abort()
      ),
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Neverending Party",
      completed: () => get("_neverendingPartyFreeTurns") >= 10,
      do: $location`The Neverending Party`,
      choices: { 1324: 5 },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Feel Pride`).default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        modes: { umbrella: "broken", backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 10 },
    },
    {
      name: "Pilsners",
      ready: () => myLevel() >= 11,
      prepare: () => tryUse($item`astral six-pack`),
      completed: () => myInebriety() >= 4,
      do: () => drink(4 - myInebriety(), $item`astral pilsner`),
      effects: $effects`Ode to Booze`,
      limit: { tries: 1 },
    },
  ],
};
