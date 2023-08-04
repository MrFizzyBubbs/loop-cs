import { CommunityService, get } from "libram";
import { CSQuest } from "../engine/task";

export const DonateQuest: CSQuest = {
  name: "Donate",
  tasks: [
    {
      name: "Test",
      completed: () => get("kingLiberated"),
      do: () => CommunityService.donate(),
      limit: { tries: 1 },
    },
  ],
};
