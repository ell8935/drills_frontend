import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { QuickActionItem } from "../../../shared/types/globalTypes";

export const clubQuickActiongs: QuickActionItem[] = [
  {
    icon: <AccessibilityIcon />,
    name: "Placeholder",
    action: () => {},
    needsId: false,
  },
  {
    icon: <PersonAddIcon />,
    name: "Assign",
    action: (id) => {
      if (id) {
      }
    },
    needsId: true,
  },
  {
    icon: <GroupsIcon />,
    name: "Team",
    action: () => {},
    needsId: false,
  },
];
