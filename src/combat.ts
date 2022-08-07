import { mpCost } from "kolmafia";
import { $item, $skill, StrictMacro } from "libram";

export default class Macro extends StrictMacro {
  delevel(): Macro {
    return this.trySkill($skill`Curse of Weaksauce`)
      .trySkill($skill`Micrometeorite`)
      .tryItem($item`Time-Spinner`)
      .trySkill($skill`Summon Love Gnats`);
  }

  static delevel(): Macro {
    return new Macro().delevel();
  }

  sing(): Macro {
    return this.skill($skill`Sing Along`);
  }

  static sing(): Macro {
    return new Macro().sing();
  }

  kill(): Macro {
    return this.while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
      .attack()
      .repeat();
  }

  static kill(): Macro {
    return new Macro().kill();
  }

  default(): Macro {
    return this.delevel().sing().kill();
  }

  static default(): Macro {
    return new Macro().default();
  }
}

export function main(): void {
  Macro.load().submit();
}
