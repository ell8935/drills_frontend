import React, { useEffect, useState } from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import { EntityNames, RolesNames } from "../../../users/types/userTypes";
import { RadioButton } from "../../../../shared/components/RadioButton/RadioButton";
import { placeholderRadioOptions } from "../../constants/radioButtonOptions";
import { ManagerTab } from "./ManagerTab";
import { TrainerTab } from "./TrainerTab";
import { PlayerTab } from "./PlayerTab";
import { getClubId } from "../../../../shared/utils/localStorageUtils";
import { handleCreatePlaceHolder } from "../../utils/assignPlaceholder";
import { handleAssignUser } from "../../utils/assignUser";
interface AssignUserTabsProps {
  onAssignUser: () => void;
}
export const AssignUserTabs = ({ onAssignUser }: AssignUserTabsProps) => {
  const [tab, setTab] = React.useState<EntityNames>("manager");
  const [isPlaceholder, setIsPlaceholder] = useState(placeholderRadioOptions[0].value);
  const [clubId, setClubId] = useState<string | null>();

  useEffect(() => {
    setClubId(getClubId());
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: RolesNames) => {
    setTab(newValue);
  };

  const handleOptionChange = (value: any) => {
    setIsPlaceholder(value);
  };

  const handleSubmit = async ({ roleName, fullName }: any) => {
    if (isPlaceholder === "placeholder" && clubId) {
      await handleCreatePlaceHolder({ clubId: clubId, fullName, roleName });
      onAssignUser();
    }
    if (isPlaceholder === "assign" && clubId) {
      await handleAssignUser({ clubId, roleName });
      onAssignUser();
    }
  };

  return (
    <div>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="tabs">
            <Tab label="Managers" value="manager" />
            <Tab label="Trainers" value="trainer" />
            <Tab label="Teams" value="team" />
            <Tab label="Players" value="player" />
          </TabList>
        </Box>
        {tab !== "team" && (
          <RadioButton
            options={placeholderRadioOptions}
            handleOnChange={handleOptionChange}
            selectedValue={isPlaceholder}
          />
        )}
        <TabPanel value="manager">
          <ManagerTab onSubmit={handleSubmit} />
        </TabPanel>
        <TabPanel value="trainer">
          <TrainerTab onSubmit={handleSubmit} />
        </TabPanel>
        <TabPanel value="team">
          <ManagerTab />
        </TabPanel>
        <TabPanel value="player">
          <PlayerTab onSubmit={handleSubmit} />
        </TabPanel>
      </TabContext>
    </div>
  );
};
