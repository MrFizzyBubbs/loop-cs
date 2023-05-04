# loop-cs

`loop-cs` is a script for looping softcore Community Service runs designed to work if you are me, [Baden (#2460823)](https://api.aventuristo.net/av-snapshot?u=Baden). It is built using the task-based engine from [grimoire](https://github.com/Loathing-Associates-Scripting-Society/grimoire) and achieves a near cost-optimal run with 0/4/1 organ use for any class. This script is a greatly improved version of my previous Community Service script: [fizz-sccs](https://github.com/MrFizzyBubbs/fizz-sccs).

## Installation

Run this command in the graphical CLI:

```text
git checkout MrFizzyBubbs/loop-cs.git release
```

Will require [a recent build of KoLMafia](http://builds.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/).

## Usage

Be in a softcore Community Service run that meets the [requirements](#requirements) and run `loopcs`.

The script provides several options that can be changed in a few different ways:

- By setting a mafia setting, e.g. `set loopcs_vipclan="Margaretting Tye"`.
- By providing an argument at runtime, e.g. `loopcs vipclan="Margaretting Tye"`. Note that any arguments provided at runtime override mafia settings.

Run `loopcs help` for the full set of script commands and options:

```

```

## Requirements

If you meet the requirements in the following sections, there is a good chance that this script will work for you. However, the requirements are not exhaustive and assume you have quite a few skills permed to help with combat, among other things.

### Before Ascending

- Access to a fully stocked clan [VIP Lounge](https://kol.coldfront.net/thekolwiki/index.php/VIP_Lounge)
- Access to a clan Slime Tube with [Mother Slime](https://kol.coldfront.net/thekolwiki/index.php/Showdown) ready
- All 11 beach heads unlocked for the [Beach Comb](https://kol.coldfront.net/thekolwiki/index.php/Beach_Comb)
- [Chateau Mantegna](https://kol.coldfront.net/thekolwiki/index.php/Chateau_Mantegna) containing:
  - ceiling fan
  - class-appropriate nightstand
  - continental juice bar
- [Gold detective badge](https://kol.coldfront.net/thekolwiki/index.php/Gold_detective_badge) purchased from the [11th Precinct](https://kol.coldfront.net/thekolwiki/index.php/The_Precinct)
- [Your cowboy boots](https://kol.coldfront.net/thekolwiki/index.php/Your_cowboy_boots) modified with a class-appropriate skin
- [Peppermint patch](https://kol.coldfront.net/thekolwiki/index.php/A_Peppermint_Patch) growing in your garden
- [Source Terminal](https://kol.coldfront.net/thekolwiki/index.php/Source_Terminal) fully upgraded
- [Spacegate Vaccination Machine](https://kol.coldfront.net/thekolwiki/index.php/Spacegate_Vaccination_Machine) with the [Broad-Spectrum Vaccine](https://kol.coldfront.net/thekolwiki/index.php/Broad-Spectrum_Vaccine) unlocked
- All 150 [Witchess puzzles](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Puzzles) completed
- Eudora set to [Our Daily Candles™ order form](https://kol.coldfront.net/thekolwiki/index.php/Our_Daily_Candles%E2%84%A2_order_form)
- An [ungulith](https://kol.coldfront.net/thekolwiki/index.php/Ungulith) and [Evil Olive](https://kol.coldfront.net/thekolwiki/index.php/Evil_Olive) in your [combat lover's locket](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket)

### In Valhalla

- astral six-pack from The Deli Lama
- astral chapeau from Pet Heaven
- class-appropriate knoll moon sign

### Owned Resources

The table below lists the Mr. Store content required to run this script. Other resource requirements, such as skill perms, are too exhaustive to enumerate but generally include everything that [reduces test turns](https://kol.coldfront.net/thekolwiki/index.php/Community_Service#Strategy), [improves leveling](https://kol.coldfront.net/thekolwiki/index.php/Advancement), or [makes combat easier](https://kol.coldfront.net/thekolwiki/index.php/Combat_Style). Some notable (and expensive) examples are [Bow-Legged Swagger](<https://kol.coldfront.net/thekolwiki/index.php/Bow-Legged_Swagger_(skill)>), [Sweet Synthesis](https://kol.coldfront.net/thekolwiki/index.php/Sweet_Synthesis), and [Mini-Trainbot](https://kol.coldfront.net/thekolwiki/index.php/Mini-Trainbot).

| Year | Month      | Resource                                                                                                                                      |
| ---- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 2008 | October    | [spooky rattling cigar box](https://kol.coldfront.net/thekolwiki/index.php/Spooky_rattling_cigar_box)                                         |
| 2009 | February   | [Libram of Love Songs](https://kol.coldfront.net/thekolwiki/index.php/Libram_of_Love_Songs)                                                   |
| 2009 | December   | [suspicious stocking](https://kol.coldfront.net/thekolwiki/index.php/Suspicious_stocking)                                                     |
| 2011 | March      | [Sorcerers of the Shore Grimoire](https://kol.coldfront.net/thekolwiki/index.php/Sorcerers_of_the_Shore_Grimoire)                             |
| 2011 | August     | [fairy-worn boots](https://kol.coldfront.net/thekolwiki/index.php/Fairy-worn_boots)                                                           |
| 2011 | September  | [Tome of Clip Art](https://kol.coldfront.net/thekolwiki/index.php/Tome_of_Clip_Art)                                                           |
| 2011 | December   | [Mint Salton Pepper's Peppermint Seed Catalog](https://kol.coldfront.net/thekolwiki/index.php/Mint_Salton_Pepper%27s_Peppermint_Seed_Catalog) |
| 2012 | November   | [deactivated nanobots](https://kol.coldfront.net/thekolwiki/index.php/Deactivated_nanobots)                                                   |
| 2013 | June       | [adventurer clone egg](https://kol.coldfront.net/thekolwiki/index.php/Adventurer_clone_egg)                                                   |
| 2014 | December   | [Crimbo sapling](https://kol.coldfront.net/thekolwiki/index.php/Crimbo_sapling)                                                               |
| 2015 | January    | [Chateau Mantegna room key](https://kol.coldfront.net/thekolwiki/index.php/Chateau_Mantegna_room_key)                                         |
| 2015 | February   | [bottle of lovebug pheromones](https://kol.coldfront.net/thekolwiki/index.php/Bottle_of_lovebug_pheromones)                                   |
| 2015 | July       | [Pack of Every Card](https://kol.coldfront.net/thekolwiki/index.php/Pack_of_Every_Card)                                                       |
| 2015 | September  | [shrine to the Barrel god](https://kol.coldfront.net/thekolwiki/index.php/Shrine_to_the_Barrel_god)                                           |
| 2015 | December   | [machine elf capsule](https://kol.coldfront.net/thekolwiki/index.php/Machine_elf_capsule)                                                     |
| 2016 | January    | [X-32-F snowman crate](https://kol.coldfront.net/thekolwiki/index.php/X-32-F_snowman_crate)                                                   |
| 2016 | March      | [Witchess Set](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Set)                                                                   |
| 2016 | June       | [Source terminal](https://kol.coldfront.net/thekolwiki/index.php/Source_terminal)                                                             |
| 2016 | July       | [detective school application](https://kol.coldfront.net/thekolwiki/index.php/Detective_school_application)                                   |
| 2016 | August     | [DIY protonic accelerator kit](https://kol.coldfront.net/thekolwiki/index.php/DIY_protonic_accelerator_kit)                                   |
| 2016 | September  | [Dear Past Self Package](https://kol.coldfront.net/thekolwiki/index.php/Dear_Past_Self_Package)                                               |
| 2016 | October    | [li'l orphan tot](https://kol.coldfront.net/thekolwiki/index.php/Li%27l_orphan_tot)                                                           |
| 2017 | February   | [heart-shaped crate](https://kol.coldfront.net/thekolwiki/index.php/Heart-shaped_crate)                                                       |
| 2017 | May        | [New-You Club Membership Form](https://kol.coldfront.net/thekolwiki/index.php/New-You_Club_Membership_Form)                                   |
| 2017 | June       | [suspicious package](https://kol.coldfront.net/thekolwiki/index.php/Suspicious_package)                                                       |
| 2017 | July       | [LI-11 Motor Pool voucher](https://kol.coldfront.net/thekolwiki/index.php/LI-11_Motor_Pool_voucher)                                           |
| 2017 | August     | [Pocket Meteor Guide](https://kol.coldfront.net/thekolwiki/index.php/Pocket_Meteor_Guide)                                                     |
| 2017 | August     | [Horsery contract](https://kol.coldfront.net/thekolwiki/index.php/Horsery_contract)                                                           |
| 2017 | December   | [locked mumming trunk](https://kol.coldfront.net/thekolwiki/index.php/Locked_mumming_trunk)                                                   |
| 2018 | January    | [January's Garbage Tote (unopened)](<https://kol.coldfront.net/thekolwiki/index.php/January%27s_Garbage_Tote_(unopened)>)                     |
| 2018 | May        | [God Lobster Egg](https://kol.coldfront.net/thekolwiki/index.php/God_Lobster_Egg)                                                             |
| 2018 | June       | [SongBoom™ BoomBox Box](https://kol.coldfront.net/thekolwiki/index.php/SongBoom%E2%84%A2_BoomBox_Box)                                         |
| 2018 | August     | [Bastille Battalion control rig crate](https://kol.coldfront.net/thekolwiki/index.php/Bastille_Battalion_control_rig_crate)                   |
| 2018 | September  | [Neverending Party invitation envelope](https://kol.coldfront.net/thekolwiki/index.php/Neverending_Party_invitation_envelope)                 |
| 2018 | November   | [voter registration form](https://kol.coldfront.net/thekolwiki/index.php/Voter_registration_form)                                             |
| 2018 | December   | [Boxing Day care package](https://kol.coldfront.net/thekolwiki/index.php/Boxing_Day_care_package)                                             |
| 2019 | January    | [Kramco Industries packing carton](https://kol.coldfront.net/thekolwiki/index.php/Kramco_Industries_packing_carton)                           |
| 2019 | February   | [mint condition Lil' Doctor™ bag](https://kol.coldfront.net/thekolwiki/index.php/Mint_condition_Lil%27_Doctor%E2%84%A2_bag)                   |
| 2019 | March      | [vampyric cloake pattern](https://kol.coldfront.net/thekolwiki/index.php/Vampyric_cloake_pattern)                                             |
| 2019 | May        | [Fourth of May Cosplay Saber kit](https://kol.coldfront.net/thekolwiki/index.php/Fourth_of_May_Cosplay_Saber_Kit)                             |
| 2019 | June       | [rune-strewn spoon cocoon](https://kol.coldfront.net/thekolwiki/index.php/Rune-strewn_spoon_cocoon)                                           |
| 2019 | July       | [Beach Comb Box](https://kol.coldfront.net/thekolwiki/index.php/Beach_Comb_Box)                                                               |
| 2019 | August     | [Distant Woods Getaway Brochure](https://kol.coldfront.net/thekolwiki/index.php/Distant_Woods_Getaway_Brochure)                               |
| 2019 | October    | [Unopened Eight Days a Week Pill Keeper](https://kol.coldfront.net/thekolwiki/index.php/Unopened_Eight_Days_a_Week_Pill_Keeper)               |
| 2020 | February   | [mint-in-box Powerful Glove](https://kol.coldfront.net/thekolwiki/index.php/Mint-in-box_Powerful_Glove)                                       |
| 2020 | April      | [sinistral homunculus](https://kol.coldfront.net/thekolwiki/index.php/Sinistral_homunculus)                                                   |
| 2020 | May        | [Guzzlr application](https://kol.coldfront.net/thekolwiki/index.php/Guzzlr_application)                                                       |
| 2020 | June       | [bag of Iunion stones](https://kol.coldfront.net/thekolwiki/index.php/Bag_of_Iunion_stones)                                                   |
| 2020 | July       | [baby camelCalf](https://kol.coldfront.net/thekolwiki/index.php/Baby_camelCalf)                                                               |
| 2020 | August     | [packaged SpinMaster™ lathe](https://kol.coldfront.net/thekolwiki/index.php/Packaged_SpinMaster%E2%84%A2_lathe)                               |
| 2020 | September  | [Bagged Cargo Cultist Shorts](https://kol.coldfront.net/thekolwiki/index.php/Bagged_Cargo_Cultist_Shorts)                                     |
| 2020 | October    | [Comprehensive Cartographic Compendium](https://kol.coldfront.net/thekolwiki/index.php/Comprehensive_Cartographic_Compendium)                 |
| 2020 | November   | [packaged knock-off retro superhero cape](https://kol.coldfront.net/thekolwiki/index.php/Packaged_knock-off_retro_superhero_cape)             |
| 2020 | December   | [box o' ghosts](https://kol.coldfront.net/thekolwiki/index.php/Box_o%27_ghosts)                                                               |
| 2021 | February   | [emotion chip](https://kol.coldfront.net/thekolwiki/index.php/Emotion_chip)                                                                   |
| 2021 | May        | [shortest-order cook](https://kol.coldfront.net/thekolwiki/index.php/Shortest-order_cook)                                                     |
| 2021 | June       | [packaged familiar scrapbook](https://kol.coldfront.net/thekolwiki/index.php/Packaged_familiar_scrapbook)                                     |
| 2021 | August     | [Our Daily Candles™ order form](https://kol.coldfront.net/thekolwiki/index.php/Our_Daily_Candles%E2%84%A2_order_form)                         |
| 2021 | September  | [packaged industrial fire extinguisher](https://kol.coldfront.net/thekolwiki/index.php/Packaged_industrial_fire_extinguisher)                 |
| 2021 | November   | [packaged Daylight Shavings Helmet](https://kol.coldfront.net/thekolwiki/index.php/Packaged_Daylight_Shavings_Helmet)                         |
| 2022 | January    | [undrilled cosmic bowling ball](https://kol.coldfront.net/thekolwiki/index.php/Undrilled_cosmic_bowling_ball)                                 |
| 2022 | February   | [combat lover's locket lockbox](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket_lockbox)                               |
| 2022 | April      | [undamaged Unbreakable Umbrella](https://kol.coldfront.net/thekolwiki/index.php/Undamaged_Unbreakable_Umbrella)                               |
| 2022 | May        | [MayDay™ contract](https://kol.coldfront.net/thekolwiki/index.php/MayDay%E2%84%A2_contract)                                                   |
| 2022 | July       | [designer sweatpants (new old stock)](<https://kol.coldfront.net/thekolwiki/index.php/Designer_sweatpants_(new_old_stock)>)                   |
| 2022 | August     | [unopened tiny stillsuit](https://kol.coldfront.net/thekolwiki/index.php/Unopened_tiny_stillsuit)                                             |
| 2022 | September  | [packaged Jurassic Parka](https://kol.coldfront.net/thekolwiki/index.php/Packaged_Jurassic_Parka)                                             |
| 2022 | October    | [boxed autumn-aton](https://kol.coldfront.net/thekolwiki/index.php/Boxed_autumn-aton)                                                         |
| 2022 | November   | [deed to Oliver's Place](http://kol.coldfront.net/thekolwiki/index.php/deed%20to%20Oliver's%20Place)                                          |
| 2023 | May        | [shrink-wrapped Cincho de Mayo](https://kol.coldfront.net/thekolwiki/index.php/Shrink-wrapped_Cincho_de_Mayo)                                 |
|      |
