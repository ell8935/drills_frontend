import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import { ClubTabsDataProps } from "../../types/club.types";
import { EntitysNames, RolesNames } from "../../../users/types/userTypes";
import { GeneralTabData } from "./GeneralTabData";
import { TeamsTab } from "./TeamsTab";
import { PendingTab } from "./PendingTab";

interface ClubTabsProps {
  entireData: ClubTabsDataProps;
  onChange: () => void;
}

const ClubTabs = ({ entireData, onChange }: ClubTabsProps) => {
  const [tab, setTab] = React.useState<EntitysNames>("manager");

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
            <Tab label="Teams" value="team" />
            <Tab label="Players" value="player" />
            <Tab label="Pending users" value="pendingUsers" />
          </TabList>
        </Box>
        <TabPanel value="manager">
          <GeneralTabData data={entireData.managers} onChange={onChange} />
        </TabPanel>
        <TabPanel value="trainer">
          <GeneralTabData data={entireData.trainers} onChange={onChange} />
        </TabPanel>
        <TabPanel value="team">
          <TeamsTab data={entireData.teams} onChange={onChange} />
        </TabPanel>
        <TabPanel value="player">
          <GeneralTabData data={entireData.players} onChange={onChange} />
        </TabPanel>
        <TabPanel value="pendingUsers">
          <PendingTab data={entireData.joinRequests} onChange={onChange} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
