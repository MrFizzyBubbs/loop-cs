import {
  adv1,
  cliExecute,
  myPrimestat,
  retrieveItem,
  runChoice,
  sweetSynthesis,
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
  byStat,
  get,
  getKramcoWandererChance,
  getModifier,
  getTodaysHolidayWanderers,
  have,
  TunnelOfLove,
  Witchess,
} from "libram";
import Macro from "../combat";
import { CSQuest } from "../engine/task";
import { burnLibrams, byPrimaryClass, peridotChoice } from "../lib";
import { beachTask, innerElfTask, potionTask, skillTask } from "./common";
import { CSCombatStrategy } from "../engine/combat";
import { freeKillSources } from "../engine/resources";

export const generalStoreItem = byStat({
  Muscle: $item`Ben-Gal™ Balm`,
  Mysticality: $item`glittery mascara`,
  Moxie: $item`hair spray`,
});

const buffs = {
  stats: $effects`Triple-Sized, Big, Song of Bravado, Stevedave's Shanty of Superiority, Rage of the Reindeer, Feeling Excited, Carol of the Thrills`,
  familiarWeight: $effects`Empathy, Leash of Linguini, Blood Bond`,
  item: $effects`Singer's Faithful Ocelot, The Spirit of Taking`,
  damage: $effects`Carol of the Hells, Carol of the Bulls, Frenzied\, Bloody`,
  elementalDamage: $effects`Takin' It Greasy, Intimidating Mien, Rotten Memories, Pyromania, Frostbeard`,
  survivability: $effects`Blood Bubble, Ruthlessly Efficient, Feeling Peaceful, Astral Shell, Ghostly Shell, Elemental Saucesphere`,
  monsterLevel: $effects`Ur-Kel's Aria of Annoyance, Pride of the Puffin, Drescher's Annoying Noise`,
  aprilShield: $effects`Thoughtful Empathy, Slippery as a Seal, Strength of the Tortoise, Tubes of Universal Meat, Lubricating Sauce, Disco over Matter, Mariachi Moisture`,
};

const { saucePotion, sauceFruit, sauceEffect } = byStat({
  Muscle: {
    sauceFruit: $item`lemon`,
    saucePotion: $item`philter of phorce`,
    sauceEffect: $effect`Phorcefullness`,
  },
  Mysticality: {
    sauceFruit: $item`grapefruit`, // From Prevent Scurvy and Sobriety
    saucePotion: $item`ointment of the occult`,
    sauceEffect: $effect`Mystically Oiled`,
  },
  Moxie: {
    sauceFruit: $item`olive`, // From Evil Olive
    saucePotion: $item`serum of sarcasm`,
    sauceEffect: $effect`Superhuman Sarcasm`,
  },
});

const synthEffect = byStat({
  Muscle: $effect`Synthesis: Movement`,
  Mysticality: $effect`Synthesis: Learning`,
  Moxie: $effect`Synthesis: Style`,
});

const synthPairs = byStat({
  Muscle: [
    [$item`Crimbo fudge`, $item`Crimbo peppermint bark`],
    [$item`bag of many confections`, $item`Crimbo peppermint bark`],
    [$item`Crimbo candied pecan`, $item`peppermint patty`],
    [$item`peppermint sprout`, $item`peppermint patty`],
  ],
  Mysticality: [
    [$item`Crimbo fudge`, $item`Crimbo fudge`],
    [$item`Crimbo fudge`, $item`bag of many confections`],
    [$item`Crimbo peppermint bark`, $item`Crimbo candied pecan`],
    [$item`Crimbo peppermint bark`, $item`peppermint sprout`],
    [$item`Crimbo candied pecan`, $item`peppermint crook`],
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

export const LevelingQuest: CSQuest = {
  name: "Leveling",
  completed: () =>
    get("csServicesPerformed").split(",").length > 1 ||
    freeKillSources.every((source) => !source.available()),
  tasks: [
    innerElfTask(),
    potionTask(generalStoreItem, true),
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
      // Minimize pants switching
      name: "Sewer Items",
      completed: () => $items`turtle totem, saucepan, stolen accordion`.every((item) => have(item)),
      do: () =>
        $items`turtle totem, saucepan, stolen accordion`.forEach((item) => retrieveItem(item)),
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    ...buffs.stats.map((effect) => skillTask(effect)),
    ...buffs.familiarWeight.map((effect) => skillTask(effect)),
    ...buffs.damage.map((effect) => skillTask(effect)),
    ...buffs.item.map((effect) => skillTask(effect)),
    ...buffs.elementalDamage.map((effect) => skillTask(effect)),
    ...buffs.survivability.map((effect) => skillTask(effect)),
    ...buffs.aprilShield.map((effect) => skillTask(effect, true)),
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
      (effect) => skillTask(effect)
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
      completed: () => have(sauceEffect),
      ready: () => have(sauceFruit),
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
      combat: new CSCombatStrategy().macro(Macro.runaway()),
      outfit: { familiar: $familiar`Pair of Stomping Boots` },
      limit: { tries: 1 },
    },
    {
      name: "Ninja Costume",
      completed: () => have($item`li'l ninja costume`) && have($effect`Giant Growth`),
      do: $location`The Haiku Dungeon`,
      post: () => visitUrl("questlog.php?which=1"), // Check quest log for protonic ghost location
      choices: peridotChoice($monster`amateur ninja`),
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Giant Growth`).skill($skill`Chest X-Ray`)
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        acc2: $item`Peridot of Peril`,
        acc3: $item`Lil' Doctor™ bag`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Nanorhino Buff",
      completed: () =>
        have(
          byStat({
            Muscle: $effect`Nanobrawny`,
            Mysticality: $effect`Nanobrainy`,
            Moxie: $effect`Nanoballsy`,
          })
        ),
      ready: () => get("ghostLocation") !== $location`none` && get("_nanorhinoCharge") >= 100,
      do: () => adv1(get("ghostLocation", $location`none`), 0, ""),
      combat: new CSCombatStrategy().macro(
        Macro.skill(
          byPrimaryClass({
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
      limit: { tries: 2 }, // Intro NC
    },
    {
      name: "Do You Crush What I Crush?",
      completed: () => have($effect`Do You Crush What I Crush?`),
      do: $location`The Dire Warren`,
      combat: new CSCombatStrategy().macro(Macro.skill($skill`Bowl a Curveball`)),
      outfit: { familiar: $familiar`Ghost of Crimbo Carols`, famequip: $item.none },
      limit: { tries: 1 },
    },
    {
      name: "LOV Tunnel",
      completed: () => get("_loveTunnelUsed"),
      prepare: (): void => {
        burnLibrams();
        const itemDrop = getModifier("Item Drop");
        if (itemDrop < 100) {
          throw `Unable to guarantee the LOV Elixir drops, current item drop of ${itemDrop}% is < 100%`;
        }
      },
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
      post: (): void => {
        const elixirs = $items`LOV Elixir #3, LOV Elixir #6`.filter((elixir) => !have(elixir));
        if (elixirs.length > 0) throw `${elixirs} did not drop`;
      },
      combat: new CSCombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_($monster`LOV Engineer`, Macro.skill($skill`Toynado`).repeat())
          .if_($monster`LOV Equivocator`, Macro.default())
      ),
      outfit: {
        offhand: $item`June cleaver`,
        shirt: $item`makeshift garbage shirt`,
        famequip: $item.none,
      },
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
      combat: new CSCombatStrategy().macro(Macro.trySkill($skill`Bowl Straight Up`).default()),
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
      combat: new CSCombatStrategy().macro(Macro.default()),
      outfit: { shirt: $item`makeshift garbage shirt` },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "God Lobster",
      completed: () => get("_godLobsterFights") >= 3,
      do: () => visitUrl("main.php?fightgodlobster=1"),
      combat: new CSCombatStrategy().macro(Macro.default()),
      choices: { 1310: 1 },
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, tiny stillsuit`,
        familiar: $familiar`God Lobster`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Oliver's Place: Goblin Flapper",
      completed: () => have($item`imported taffy`) || have($effect`Imported Strength`),
      ready: () => get("_speakeasyFreeFights") < 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      choices: peridotChoice($monster`goblin flapper`),
      combat: new CSCombatStrategy().macro(
        Macro.skill($skill`Feel Envy`)
          .skill($skill`Portscan`)
          .sing()
          .kill()
      ),
      outfit: { acc3: $item`Peridot of Peril` },
      limit: { tries: 1 },
    },
    potionTask($item`imported taffy`),
    {
      name: "Oliver's Place: Government Agent",
      completed: () => get("_speakeasyFreeFights") >= 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CSCombatStrategy().macro(() =>
        Macro.externalIf(!have($item`government cheese`), Macro.skill($skill`Feel Envy`))
          .externalIf(get("_speakeasyFreeFights") < 2, Macro.skill($skill`Portscan`))
          .default()
      ),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 2 },
    },
    {
      name: "Witchess Witch",
      completed: () => have($item`battle broom`),
      ready: () => Witchess.fightsDone() < 5,
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CSCombatStrategy().macro(
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
      completed: () => have($item`dented scepter`),
      ready: () => Witchess.fightsDone() < 5,
      do: () => Witchess.fightPiece($monster`Witchess King`),
      combat: new CSCombatStrategy().macro(Macro.delevel().attack().repeat()),
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
      completed: () => have($item`very pointy crown`),
      ready: () => Witchess.fightsDone() < 5,
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CSCombatStrategy().macro(
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
    ...buffs.monsterLevel.map((effect) => skillTask(effect)),
    {
      name: "Deep Machine Tunnels",
      completed: () => get("_machineTunnelsAdv") >= 5,
      do: $location`The Deep Machine Tunnels`,
      combat: new CSCombatStrategy().macro(Macro.default()),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        familiar: $familiar`Machine Elf`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 5 },
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
      combat: new CSCombatStrategy().macro(
        Macro.if_($monster`sausage goblin`, Macro.skill($skill`Bowl Sideways`).default()).abort()
      ),
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Neverending Party",
      completed: () => get("_neverendingPartyFreeTurns") >= 10 && have($effect`Spit Upon`),
      do: $location`The Neverending Party`,
      choices: { 1324: 5 },
      combat: new CSCombatStrategy().macro(
        Macro.trySkill($skill`Feel Pride`)
          .trySkill($skill`%fn, spit on me!`)
          .default()
      ),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 10 },
    },
    {
      name: "Free Kills",
      completed: () => freeKillSources.every((source) => !source.available()),
      do: $location`The Neverending Party`,
      choices: { 1324: 5 },
      combat: new CSCombatStrategy().killFree(),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        acc3: $item`backup camera`,
        modes: { backupcamera: "ml" },
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 8 },
    },
  ],
};
