# loop-cs

`loop-cs` is a script for looping softcore Community Service runs designed to work if you are me, [Baden (#2460823)](https://cheesellc.com/kol/profile.php?u=Baden). It is built using the task-based engine from [grimoire](https://github.com/Loathing-Associates-Scripting-Society/grimoire) and achieves a 105-turn run with 0/4/2 organ use. This script is a greatly improved version of my previous Community Service script, [fizz-sccs](https://github.com/MrFizzyBubbs/fizz-sccs).

## Installation

Run this command in the graphical CLI:

```text
git checkout https://github.com/MrFizzyBubbs/loop-cs.git
```

Will require [a recent build of KoLMafia](http://builds.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/).

## Usage

Be in a softcore Community Service run that meets the [requirements](#requirements) and either type `loopcs` in the graphical CLI or select it from the Scripts menu. There are several optional arguments:

1. `confirm` BOOLEAN - If the user must confirm execution of each task. _[default: false]_ _[setting: loopcs_confirm]_
2. `vipclan` TEXT - Name of clan that has a fully stocked VIP lounge. _[default: Margaretting Tye]_ _[setting: loopcs_vipclan]_
3. `slimeclan` TEXT - Name of clan that has Mother Slime ready in The Slime Tube. _[default: Hobopolis Vacation Home]_ _[setting: loopcs_slimeclan]_

These arguments be specified in the CLI when running the script (e.g., `loopcs confirm=true`) or as a preference (e.g., `set loopcs_vipclan="Bonus Adventures from Hell"`).

## Requirements

If you meet the requirements in the following sections, there is a good chance that this script will work for you. However, the requirements are not exhaustive and assume you have quite a few skills permed to help with combat, among other things.

### Before Ascending

- Access to a fully stocked clan [VIP Lounge](https://kol.coldfront.net/thekolwiki/index.php/VIP_Lounge)
- Access to a clan Slime Tube with [Mother Slime](https://kol.coldfront.net/thekolwiki/index.php/Showdown) ready
- All 11 beach heads unlocked for the [Beach Comb](https://kol.coldfront.net/thekolwiki/index.php/Beach_Comb)
- [Chateau Mantegna](https://kol.coldfront.net/thekolwiki/index.php/Chateau_Mantegna) containing:
  - ceiling fan
  - foreign language tapes
  - continental juice bar
- [Gold detective badge](https://kol.coldfront.net/thekolwiki/index.php/Gold_detective_badge) purchased from the [11th Precinct](https://kol.coldfront.net/thekolwiki/index.php/The_Precinct)
- [Your cowboy boots](https://kol.coldfront.net/thekolwiki/index.php/Your_cowboy_boots) modified with [nicksilver spurs](https://kol.coldfront.net/thekolwiki/index.php/Nicksilver_spurs) and [frontwinder skin](https://kol.coldfront.net/thekolwiki/index.php/Frontwinder_skin) (items drop and mysticality)
- [Peppermint patch](https://kol.coldfront.net/thekolwiki/index.php/A_Peppermint_Patch) growing in your garden
- [Source Terminal](https://kol.coldfront.net/thekolwiki/index.php/Source_Terminal) fully upgraded
- [Spacegate Vaccination Machine](https://kol.coldfront.net/thekolwiki/index.php/Spacegate_Vaccination_Machine) with the [Broad-Spectrum Vaccine](https://kol.coldfront.net/thekolwiki/index.php/Broad-Spectrum_Vaccine) unlocked
- All 150 [Witchess puzzles](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Puzzles) completed
- Eudora set to [Our Daily Candles™ order form](https://kol.coldfront.net/thekolwiki/index.php/Our_Daily_Candles%E2%84%A2_order_form)
- An [ungulith](https://kol.coldfront.net/thekolwiki/index.php/Ungulith) in your [combat lover's locket](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket)

### In Valhalla

- astral six-pack from The Deli Lama
- astral chapeau from Pet Heaven
- Pastamancer class
- Wallaby moon sign

### Resources

| Resource                                                                                                                      | Type       |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| [Beach Comb](https://kol.coldfront.net/thekolwiki/index.php/Beach_Comb)                                                       | Accessory  |
| [combat lover's locket](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket)                               | Accessory  |
| [hewn moon-rune spoon](https://kol.coldfront.net/thekolwiki/index.php/Hewn_moon-rune_spoon)                                   | Accessory  |
| [Kremlin's Greatest Briefcase](https://kol.coldfront.net/thekolwiki/index.php/Kremlin%27s_Greatest_Briefcase)                 | Accessory  |
| [protonic accelerator pack](https://kol.coldfront.net/thekolwiki/index.php/Protonic_accelerator_pack)                         | Back       |
| [vampyric cloake](https://kol.coldfront.net/thekolwiki/index.php/Vampyric_cloake)                                             | Back       |
| [Peppermint Pip Packet](https://kol.coldfront.net/thekolwiki/index.php/Peppermint_Pip_Packet)                                 | Campground |
| [Source Terminal](https://kol.coldfront.net/thekolwiki/index.php/Source_Terminal)                                             | Campground |
| [Witchess Set](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Set)                                                   | Campground |
| [Clan VIP Lounge invitation](https://kol.coldfront.net/thekolwiki/index.php/Clan_VIP_Lounge_invitation)                       | Clan       |
| [Our Daily Candles™ order form](https://kol.coldfront.net/thekolwiki/index.php/Our_Daily_Candles%E2%84%A2_order_form)         | Eudora     |
| [MayDay™ contract](https://kol.coldfront.net/thekolwiki/index.php/MayDay%E2%84%A2_contract)                                   | Eudora-ish |
| [Crimbo Shrub](https://kol.coldfront.net/thekolwiki/index.php/Crimbo_Shrub)                                                   | Familiar   |
| [Disgeist](<https://kol.coldfront.net/thekolwiki/index.php/Disgeist_(familiar)>)                                              | Familiar   |
| [Exotic Parrot](https://kol.coldfront.net/thekolwiki/index.php/Exotic_Parrot)                                                 | Familiar   |
| [Ghost of Crimbo Carols](https://kol.coldfront.net/thekolwiki/index.php/Ghost_of_Crimbo_Carols)                               | Familiar   |
| [God Lobster](https://kol.coldfront.net/thekolwiki/index.php/God_Lobster)                                                     | Familiar   |
| [Left-Hand Man](https://kol.coldfront.net/thekolwiki/index.php/Left-Hand_Man)                                                 | Familiar   |
| [Machine Elf](https://kol.coldfront.net/thekolwiki/index.php/Machine_Elf)                                                     | Familiar   |
| [Melodramedary](https://kol.coldfront.net/thekolwiki/index.php/Melodramedary)                                                 | Familiar   |
| [Nanorhino](https://kol.coldfront.net/thekolwiki/index.php/Nanorhino)                                                         | Familiar   |
| [Pair of Stomping Boots](https://kol.coldfront.net/thekolwiki/index.php/Pair_of_Stomping_Boots)                               | Familiar   |
| [Stocking Mimic](https://kol.coldfront.net/thekolwiki/index.php/Stocking_Mimic)                                               | Familiar   |
| [Trick-or-Treating Tot](https://kol.coldfront.net/thekolwiki/index.php/Trick-or-Treating_Tot)                                 | Familiar   |
| [Daylight Shavings Helment](https://kol.coldfront.net/thekolwiki/index.php/Daylight_Shavings_Helmet)                          | Hat        |
| [Deck of Every Card](https://kol.coldfront.net/thekolwiki/index.php/Deck_of_Every_Card)                                       | Item       |
| [January's Garbage Tote](https://kol.coldfront.net/thekolwiki/index.php/January%27s_Garbage_Tote)                             | Item       |
| [mumming trunk](https://kol.coldfront.net/thekolwiki/index.php/Mumming_trunk)                                                 | Item       |
| [portable pantogram](https://kol.coldfront.net/thekolwiki/index.php/Portable_pantogram)                                       | Item       |
| [SongBoom™ BoomBox](https://kol.coldfront.net/thekolwiki/index.php/SongBoom%E2%84%A2_BoomBox)                                 | Item       |
| [SpinMaster™ lathe](https://kol.coldfront.net/thekolwiki/index.php/SpinMaster%E2%84%A2_lathe)                                 | Item       |
| [Time-Spinner](https://kol.coldfront.net/thekolwiki/index.php/Time-Spinner)                                                   | Item       |
| [Kramco Sausage-o-Matic™](https://kol.coldfront.net/thekolwiki/index.php/Kramco_Sausage-o-Matic%E2%84%A2)                     | Off-hand   |
| [industrial fire extinguisher](https://kol.coldfront.net/thekolwiki/index.php/Industrial_fire_extinguisher)                   | Off-hand   |
| [unbreakable umbrella](https://kol.coldfront.net/thekolwiki/index.php/Unbreakable_umbrella)                                   | Off-hand   |
| [Bird-a-Day calendar](https://kol.coldfront.net/thekolwiki/index.php/Bird-a-Day_calendar)                                     | Skill      |
| [Comprehensive Cartographic Compendium](https://kol.coldfront.net/thekolwiki/index.php/Comprehensive_Cartographic_Compendium) | Skill      |
| [emotion chip](https://kol.coldfront.net/thekolwiki/index.php/Emotion_chip)                                                   | Skill      |
| [Manual of Numberology](https://kol.coldfront.net/thekolwiki/index.php/Manual_of_Numberology)                                 | Skill      |
| [Pocket Meteor Guide](https://kol.coldfront.net/thekolwiki/index.php/Pocket_Meteor_Guide)                                     | Skill      |
| [Rethinking Candy](https://kol.coldfront.net/thekolwiki/index.php/Rethinking_Candy)                                           | Skill      |
| [Tome of Clip Art](https://kol.coldfront.net/thekolwiki/index.php/Tome_of_Clip_Art)                                           | Skill      |
| [Fourth of May Cosplay Saber](https://kol.coldfront.net/thekolwiki/index.php/Fourth_of_May_Cosplay_Saber)                     | Weapon     |
| [airplane charter: Dinseylandfill](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_Dinseylandfill)           | Zone       |
| [airplane charter: That 70s Volcano](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_That_70s_Volcano)       | Zone       |
| [Bastille Battalion control rig](https://kol.coldfront.net/thekolwiki/index.php/Bastille_Battalion_control_rig)               | Zone       |
| [Boxing Day care package](https://kol.coldfront.net/thekolwiki/index.php/Boxing_Day_care_package)                             | Zone       |
| [Chateau Mantegna room key](https://kol.coldfront.net/thekolwiki/index.php/Chateau_Mantegna_room_key)                         | Zone       |
| [Detective school application](https://kol.coldfront.net/thekolwiki/index.php/Detective_school_application)                   | Zone       |
| [Distant Woods Getaway Brochure](https://kol.coldfront.net/thekolwiki/index.php/Distant_Woods_Getaway_Brochure)               | Zone       |
| [heart-shaped crate](https://kol.coldfront.net/thekolwiki/index.php/Heart-shaped_crate)                                       | Zone       |
| [Horsery contract](https://kol.coldfront.net/thekolwiki/index.php/Horsery_contract)                                           | Zone       |
| [LT&T telegraph office deed](https://kol.coldfront.net/thekolwiki/index.php/LT%26T_telegraph_office_deed)                     | Zone       |
| [Neverending Party invitation envelope](https://kol.coldfront.net/thekolwiki/index.php/Neverending_Party_invitation_envelope) | Zone       |
| [shrine to the Barrel god](https://kol.coldfront.net/thekolwiki/index.php/Shrine_to_the_Barrel_god)                           | Zone       |
| [Spacegate access badge](https://kol.coldfront.net/thekolwiki/index.php/Spacegate_access_badge)                               | Zone       |
| [voter registration form](https://kol.coldfront.net/thekolwiki/index.php/Voter_registration_form)                             | Zone       |
| [X-32-F snowman crate](https://kol.coldfront.net/thekolwiki/index.php/X-32-F_snowman_crate)                                   | Zone       |
