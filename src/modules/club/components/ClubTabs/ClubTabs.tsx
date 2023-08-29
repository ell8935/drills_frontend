import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import TabData from "./TabData";
import { UserClubRole } from "../../../users/types/userTypes";
interface ClubTabsProps {
  managers: UserClubRole[];
  trainers: UserClubRole[];
  players: UserClubRole[];
}

const ClubTabs = ({ managers, trainers, players }: ClubTabsProps) => {
  const [tab, setTab] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <div>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Managers" value="1" />
            <Tab label="Trainers" value="2" />
            <Tab label="Players" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabData data={managers} />
        </TabPanel>
        <TabPanel value="2">
          <TabData data={trainers} />
        </TabPanel>
        <TabPanel value="3">
          <TabData data={players} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
