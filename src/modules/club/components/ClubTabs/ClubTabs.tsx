import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import TabData from "./TabData";
import { RolesNames } from "../../../users/types/userTypes";
import { UserClubRoleRowsData } from "../../types/club.types";

interface ClubTabsProps {
  userClubRoleRows: UserClubRoleRowsData;
  onChange: () => void;
}

const ClubTabs = ({ userClubRoleRows, onChange }: ClubTabsProps) => {
  const [tab, setTab] = React.useState<RolesNames>("manager");

  const handleChange = (_event: React.SyntheticEvent, newValue: RolesNames) => {
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
          </TabList>
        </Box>
        <TabPanel value="manager">
          <TabData data={userClubRoleRows.managers} onChange={onChange} />
        </TabPanel>
        <TabPanel value="trainer">
          <TabData data={userClubRoleRows.trainers} onChange={onChange} />
        </TabPanel>
        <TabPanel value="player">
          <TabData data={userClubRoleRows.players} onChange={onChange} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
