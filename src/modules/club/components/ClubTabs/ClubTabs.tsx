import React from "react";
import { Button, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import TabData from "./TabData";
import { RolesNames, UserClubRole } from "../../../users/types/userTypes";
import { handleAssignUser } from "../../utils/assignUser";
interface ClubTabsProps {
  managers: UserClubRole[];
  trainers: UserClubRole[];
  players: UserClubRole[];
  clubId: string;
}

const ClubTabs = ({ managers, trainers, players, clubId }: ClubTabsProps) => {
  console.log(managers);

  const [tab, setTab] = React.useState<RolesNames>("manager");

  const handleChange = (event: React.SyntheticEvent, newValue: RolesNames) => {
    setTab(newValue);
  };

  return (
    <div>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="tabs">
            <Tab label="Managers" value="manager" />
            <Tab label="Trainers" value="trainer" />
            <Tab label="Players" value="player" />
            <Button onClick={() => handleAssignUser({ tab, clubId })}>+</Button>
          </TabList>
        </Box>
        <TabPanel value="manager">
          <TabData data={managers} />
        </TabPanel>
        <TabPanel value="trainer">
          <TabData data={trainers} />
        </TabPanel>
        <TabPanel value="player">
          <TabData data={players} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
