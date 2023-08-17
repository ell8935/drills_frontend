import React, { useState } from "react";
import { Tab, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import mockOrganizationalData from "../../../../shared/mockData/mockData";
import TabData from "./TabData";

const ClubTabs = () => {
  //useSelector to get the data for the managers
  const club = mockOrganizationalData;

  const [tab, setTab] = React.useState("1");

  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent | MouseEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

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
          {club.managers.map((manager) => (
            <Accordion
              key={manager.id}
              expanded={expandedAccordion === manager.id}
              onChange={handleAccordionChange(manager.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${manager.id}-content`}
                id={`${manager.id}-header`}
              >
                <Typography>{manager.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>{/* Render trainers, teams, and players here */}</AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
        <TabPanel value="2">
          <TabData entity="trainer" />
        </TabPanel>
        <TabPanel value="3">
          <TabData entity="team" />
        </TabPanel>
        <TabPanel value="4">
          <TabData entity="player" />r
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ClubTabs;
