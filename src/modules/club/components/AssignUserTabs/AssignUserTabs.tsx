import React, { useState } from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@material-ui/core";
import { TabData } from "./TabData";
import { EntityNames, RolesNames } from "../../../users/types/userTypes";
import { RadioButton } from "../../../../shared/components/RadioButton/RadioButton";
import { radioButtonOptions } from "../../constants/radioButtonOptions";
import { ManagerTab } from "./ManagerTab";

export const AssignUserTabs = () => {
  const [tab, setTab] = React.useState<EntityNames>("manager");
  const [isPlaceholder, setIsPlaceholder] = useState(radioButtonOptions[0].value);

  const handleChange = (_event: React.SyntheticEvent, newValue: RolesNames) => {
    setTab(newValue);
  };

  const handleOptionChange = (value: any) => {
    setIsPlaceholder(value);
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
          <RadioButton options={radioButtonOptions} handleOnChange={handleOptionChange} selectedValue={isPlaceholder} />
        )}
        <TabPanel value="manager">
          <ManagerTab isPlaceholder={isPlaceholder} />
        </TabPanel>
        <TabPanel value="trainer">
          <TabData isPlaceholder={isPlaceholder} tab={tab} />
        </TabPanel>
        <TabPanel value="team">
          <TabData tab={tab} />
        </TabPanel>
        <TabPanel value="player">
          <TabData isPlaceholder={isPlaceholder} tab={tab} />
        </TabPanel>
      </TabContext>
    </div>
  );
};
