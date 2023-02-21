import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  cliExecute,
  myPrimestat,
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
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  Cartography,
  get,
  getKramcoWandererChance,
  getTodaysHolidayWanderers,
  have,
  TunnelOfLove,
  Witchess,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { burnLibrams, byClass, byStat } from "../lib";
import { beachTask, innerElfTask, potionTask, skillTask } from "./common";

export const generalStoreItem = byStat({
  Muscle: $item`Ben-Gal™ Balm`,
  Mysticality: $item`glittery mascara`,
  Moxie: $item`hair spray`,
});

const buffs = {
  stats: $effects`Triple-Sized, Big, Song of Bravado, Stevedave's Shanty of Superiority, Rage of the Reindeer, Feeling Excited, Carol of the Thrills`,
  familiarWeight: $effects`Empathy, Leash of Linguini, Blood Bond`,
  damage: $effects`Carol of the Hells, Carol of the Bulls, Frenzied\, Bloody`,
  elementalDamage: $effects`Takin' It Greasy, Intimidating Mien, Rotten Memories, Pyromania, Frostbeard`,
  survivability: $effects`Blood Bubble, Ruthlessly Efficient, Feeling Peaceful, Astral Shell, Ghostly Shell, Elemental Saucesphere`,
  monsterLevel: $effects`Ur-Kel's Aria of Annoyance, Pride of the Puffin, Drescher's Annoying Noise`,
};

const { saucePotion, sauceFruit, sauceEffect } = byStat({
  Muscle: {
    sauceFruit: $item`lemon`,
    saucePotion: $item`philter of phorce`,
    sauceEffect: $effect`Phorcefullness`,
  },
  Mysticality: {
    sauceFruit: $item`grapefruit`,
    saucePotion: $item`ointment of the occult`,
    sauceEffect: $effect`Mystically Oiled`,
  },
  Moxie: {
    sauceFruit: $item`olive`,
    saucePotion: $item`serum of sarcasm`,
    sauceEffect: $effect`Superhuman Sarcasm`,
  },
});

const synthEffect = byStat({
  Mysticality: $effect`Synthesis: Learning`,
  Moxie: $effect`Synthesis: Style`,
  Muscle: $effect`Synthesis: Movement`,
});

const synthPairs = byStat({
  Mysticality: [
    [$item`Crimbo fudge`, $item`Crimbo fudge`],
    [$item`Crimbo fudge`, $item`bag of many confections`],
    [$item`Crimbo peppermint bark`, $item`Crimbo candied pecan`],
    [$item`Crimbo peppermint bark`, $item`peppermint sprout`],
    [$item`Crimbo candied pecan`, $item`peppermint crook`],
  ],
  Muscle: [
    [$item`Crimbo fudge`, $item`Crimbo peppermint bark`],
    [$item`bag of many confections`, $item`Crimbo peppermint bark`],
    [$item`Crimbo candied pecan`, $item`peppermint patty`],
    [$item`peppermint sprout`, $item`peppermint twist`],
  ],
  Moxie: [
    [$item`Crimbo fudge`, $item`Crimbo candied pecan`],
    [$item`Crimbo fudge`, $item`peppermint sprout`],
    [$item`bag of many confections`, $item`Crimbo candied pecan`],
    [$item`bag of many confections`, $item`peppermint sprout`],
    [$item`Crimbo peppermint bark`, $item`peppermint twist`],
  ],
});

const LOVEquipment = byStat({
  Muscle: $item`LOV Eardigan`,
  Mysticality: $item`LOV Epaulettes`,
  Moxie: $item`LOV Earrings`,
});

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () =>
    get("csServicesPerformed").split(",").length > 1 || get("_neverendingPartyFreeTurns") >= 10,
  tasks: [
    innerElfTask(),
    potionTask(generalStoreItem),
    { ...potionTask($item`flask of baconstone juice`), class: $classes`Pastamancer, Turtle Tamer` }, // From juice bar
    { ...potionTask($item`potion of temporary gr8ness`), class: $classes`Disco Bandit` }, // From juice bar
    { ...potionTask($item`pressurized potion of proficiency`), class: $classes`Accordion Thief` }, // From juice bar
    {
      ...potionTask($item`natural magick candle`),
      class: $classes`Seal Clubber, Pastamancer, Sauceror, Disco Bandit`,
    },
    {
      ...potionTask($item`Napalm In The Morning™ candle`),
      class: $classes`Seal Clubber, Turtle Tamer`,
    },
    {
      ...potionTask($item`votive of confidence`),
      class: $classes`Turtle Tamer, Pastamancer, Accordion Thief`,
    },
    potionTask($item`MayDay™ supply package`),
    ...$effects`Lack of Body-Building, We're All Made of Starfish, Pomp & Circumsands, You Learned Something Maybe!`.map(
      beachTask
    ),
    {
      name: "Vaccine",
      completed: () => get("_spacegateVaccine"),
      ready: () => get("spacegateVaccine2") && get("spacegateAlways"),
      do: () => cliExecute("spacegate vaccine 2"),
      limit: { tries: 1 },
    },
    {
      name: "Boxing Daybuff",
      completed: () => get("_daycareSpa"),
      do: () => cliExecute(`daycare ${myPrimestat().toString().toLowerCase()}`),
      limit: { tries: 1 },
    },
    {
      name: "Smile of Lyle",
      completed: () => get("_lyleFavored"),
      do: () => cliExecute("monorail buff"),
      limit: { tries: 1 },
    },
    {
      name: "Telescope",
      completed: () => get("telescopeLookedHigh"),
      do: () => cliExecute("telescope look high"),
      limit: { tries: 1 },
    },
    {
      name: "Cross Streams",
      completed: () => get("_streamsCrossed"),
      do: () => cliExecute("crossstreams"),
      limit: { tries: 1 },
    },
    {
      name: "Puzzle Champ",
      completed: () => get("_witchessBuff"),
      do: () => cliExecute("witchess"),
      limit: { tries: 1 },
    },
    ...buffs.stats.map(skillTask),
    ...buffs.familiarWeight.map(skillTask),
    ...buffs.damage.map(skillTask),
    ...buffs.elementalDamage.map(skillTask),
    ...buffs.survivability.map(skillTask),
    {
      ...skillTask(
        byStat({
          Muscle: $effect`Quiet Determination`,
          Mysticality: $effect`Inscrutable Gaze`,
          Moxie: $effect`Quiet Desperation`,
        })
      ),
      name: "Facial Expression",
    },
    ...$skills`Advanced Saucecrafting, Prevent Scurvy and Sobriety, Summon Crimbo Candy`.map(
      skillTask
    ),
    {
      name: "Get Range",
      completed: () => get("hasRange"),
      do: () => use($item`Dramatic™ range`),
      acquire: [{ item: $item`Dramatic™ range` }],
      limit: { tries: 1 },
    },
    {
      name: "Saucecraft",
      ready: () => have(sauceFruit),
      completed: () => have(sauceEffect),
      do: () => use(saucePotion),
      acquire: [{ item: saucePotion }],
      limit: { tries: 1 },
    },
    {
      name: "Cloud-Talk",
      completed: () => have($effect`That's Just Cloud-Talk, Man`),
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
      limit: { tries: 1 },
    },
    {
      name: synthEffect.name,
      completed: () => have(synthEffect),
      do: (): void => {
        for (const [candy1, candy2] of synthPairs) {
          const enough = candy1 === candy2 ? have(candy1, 2) : have(candy1) && retrieveItem(candy2);
          if (enough) {
            if (sweetSynthesis(candy1, candy2)) return;
          }
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "April Shower",
      completed: () => get("_aprilShower"),
      do: () => cliExecute(`shower ${myPrimestat()}`),
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
      completed: () => getTodaysHolidayWanderers().length === 0 || get("_banderRunaways") >= 2,
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.runaway()),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      limit: { tries: 1 },
    },
    {
      name: "Ninja Costume",
      completed: () => have($item`li'l ninja costume`) && have($effect`Giant Growth`),
      do: () => Cartography.mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
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
      name: "Nanorhino Buff",
      ready: () => get("ghostLocation") !== $location`none` && get("_nanorhinoCharge") >= 100,
      completed: () =>
        have(
          byStat({
            Muscle: $effect`Nanobrawny`,
            Mysticality: $effect`Nanobrainy`,
            Moxie: $effect`Nanoballsy`,
          })
        ),
      do: () => adv1(get("ghostLocation", $location`none`), 0, ""),
      combat: new CombatStrategy().macro(
        Macro.skill(
          byClass({
            "Seal Clubber": $skill`Clobber`,
            "Turtle Tamer": $skill`Toss`,
            Pastamancer: $skill`Spaghetti Spear`,
            Sauceror: $skill`Salsaball`,
            "Disco Bandit": $skill`Suckerpunch`,
            "Accordion Thief": $skill`Sing`,
          })
        )
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
      name: "Holiday Yoked",
      completed: () => have($effect`Holiday Yoked`),
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Bowl a Curveball`)),
      outfit: { familiar: $familiar`Ghost of Crimbo Carols`, famequip: $item.none },
      limit: { tries: 1 },
    },
    {
      name: "LOV Tunnel",
      completed: () => get("_loveTunnelUsed"),
      prepare: burnLibrams,
      do: () =>
        TunnelOfLove.fightAll(
          byStat({
            Muscle: "LOV Eardigan",
            Mysticality: "LOV Epaulettes",
            Moxie: "LOV Earring",
          }),
          "Open Heart Surgery",
          "LOV Extraterrestrial Chocolate"
        ),
      combat: new CombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_($monster`LOV Engineer`, Macro.skill($skill`Weapon of the Pastalord`).repeat())
          .if_($monster`LOV Equivocator`, Macro.default())
      ),
      outfit: { offhand: $item`June cleaver`, shirt: $item`makeshift garbage shirt` },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    potionTask($item`LOV Elixir #3`),
    potionTask($item`LOV Elixir #6`),
    {
      name: "Ten-Percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      outfit: { offhand: $item`familiar scrapbook`, equip: [LOVEquipment] },
      limit: { tries: 1 },
    },
    {
      name: "Chateau",
      completed: () => get("timesRested") >= totalFreeRests(),
      prepare: burnLibrams,
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_restbox"),
      outfit: { offhand: $item`familiar scrapbook`, equip: [LOVEquipment] },
      limit: { tries: 40 },
    },
    {
      name: "Set Snojo",
      completed: () => !!get("snojoSetting"),
      do: (): void => {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
        runChoice(3);
      },
      limit: { tries: 1 },
    },
    {
      name: "Snojo",
      completed: () => get("_snojoFreeFights") >= 10,
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Bowl Straight Up`).default()),
      limit: { tries: 10 },
    },
    {
      name: "Post-Snojo Hottub",
      completed: () =>
        $effects`Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut`.every(
          (effect) => !have(effect)
        ),
      do: () => cliExecute("hottub"),
      limit: { tries: 1 },
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
      choices: { 1310: () => (get("_godLobsterFights") === 2 ? 2 : 1) }, // Get -combat buff on last combat
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, tiny stillsuit`,
        familiar: $familiar`God Lobster`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Witchess Witch",
      ready: () => Witchess.fightsDone() < 5,
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Curse of Weaksauce`)
          .trySkill($skill`Micrometeorite`)
          .trySkill($skill`Summon Love Stinkbug`)
          .step(
            byStat({
              Mysticality: Macro.attack(),
              default: Macro.skill($skill`Lunging Thrust-Smack`),
            })
          )
          .repeat()
      ),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`familiar scrapbook`,
        shirt: $item`makeshift garbage shirt`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess King",
      ready: () => Witchess.fightsDone() < 5,
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      combat: new CombatStrategy().macro(Macro.delevel().attack().repeat()),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`familiar scrapbook`,
        shirt: $item`makeshift garbage shirt`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess Queen",
      ready: () => Witchess.fightsDone() < 5,
      completed: () => have($item`very pointy crown`),
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CombatStrategy().macro(
        Macro.item($item`Time-Spinner`)
          .attack()
          .repeat()
      ),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`familiar scrapbook`,
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Shorter-Order Cook`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    ...buffs.monsterLevel.map(skillTask),
    {
      name: "Deep Machine Tunnels",
      completed: () => get("_machineTunnelsAdv") >= 5,
      do: $location`The Deep Machine Tunnels`,
      combat: new CombatStrategy().macro(() =>
        Macro.default(
          Macro.externalIf(get("_machineTunnelsAdv") === 4, Macro.skill($skill`Portscan`))
        )
      ),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        familiar: $familiar`Machine Elf`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 5 },
    },
    {
      name: "Oliver's Place",
      completed: () => get("_speakeasyFreeFights") >= 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(() =>
        Macro.default(
          Macro.trySkill($skill`Portscan`).externalIf(
            !have($item`government cheese`),
            Macro.skill($skill`Feel Envy`)
          )
        )
      ),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Party Fair",
      completed: () => get("_questPartyFair") !== "unstarted",
      do: (): void => {
        visitUrl(toUrl($location`The Neverending Party`));
        if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
          runChoice(1); // Accept quest
        } else {
          runChoice(2); // Decline quest
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Sausage Goblin",
      completed: () => get("_sausageFights") > 1,
      ready: () => getKramcoWandererChance() >= 1 && have($item`cosmic bowling ball`),
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
        shirt: $item`makeshift garbage shirt`,
        acc1: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 10 },
    },
  ],
};
