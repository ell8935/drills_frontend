import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import TabData from "./TabData";

const ClubTabs = ({ data }: any) => {
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
            <Tab label="Teams" value="3" />
            <Tab label="Players" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabData entity="manager" />
        </TabPanel>
        <TabPanel value="2">
          <TabData entity="trainer" />
        </TabPanel>
        <TabPanel value="3">
          <TabData entity="team" />
        </TabPanel>
        <TabPanel value="4">
          <TabData entity="player" />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
