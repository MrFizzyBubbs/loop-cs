import { Task } from "./task";
import { Engine as BaseEngine, Outfit, wanderingNCs } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { myClass, myHp, myMaxhp, userConfirm, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";
import { args } from "../main";

const turtleNCs = [
  "Nantucket Snapper",
  "Blue Monday",
  "Capital!",
  "Training Day",
  "Boxed In",
  "Duel Nature",
  "Slow Food",
  "A Rolling Turtle Gathers No Moss",
  "The Horror...",
  "Slow Road to Hell",
  "C'mere, Little Fella",
  "The Real Victims",
  "Like That Time in Tortuga",
  "Cleansing your Palette",
  "Harem Scarum",
  "Turtle in peril",
  "No Man, No Hole",
  "Slow and Steady Wins the Brawl",
  "Stormy Weather",
  "Turtles of the Universe",
  "O Turtle Were Art Thou",
  "Allow 6-8 Weeks For Delivery",
  "Kick the Can",
  "Turtles All The Way Around",
  "More eXtreme Than Usual",
  "Jewel in the Rough",
  "The worst kind of drowning",
  "Even Tamer Than Usual",
  "Never Break the Chain",
  "Close, but Yes Cigar",
  "Armchair Quarterback",
  "This Turtle Rocks!",
  "Really Sticking Her Neck Out",
  "It Came from Beneath the Sewer? Great!",
  "Don't Be Alarmed, Now",
  "Puttin' it on Wax",
  "More Like... Hurtle",
  "Musk! Musk! Musk!",
  "Silent Strolling",
];
turtleNCs.forEach((nc) => wanderingNCs.add(nc));

export class Engine extends BaseEngine<never, Task> {
  confirmed: Set<string>;

  constructor(tasks: Task[]) {
    // Remove tasks for other classes
    tasks = tasks.filter((task) => !task.class || task.class.includes(myClass()));
    super(tasks);
    this.confirmed = new Set();
  }

  execute(task: Task): void {
    if (
      args.confirm &&
      !this.confirmed.has(task.name) &&
      !userConfirm(`Executing ${task.name}, continue?`)
    ) {
      throw `User rejected execution of task ${task.name}`;
    }
    this.confirmed.add(task.name);
    super.execute(task);
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  post(task: Task): void {
    super.post(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
  }
}
