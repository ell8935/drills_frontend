import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RolesNames } from "../../../users/types/userTypes";

const TabData = ({ entity }: { entity: RolesNames }) => {
  //fetch data base on entity as well from store

  const club: any = { id: "asd", name: "asd" };
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent | MouseEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  let itemsToMap: any[] = [];

  // Select the appropriate array based on the entity prop
  if (entity === "manager" && club.managers) {
    itemsToMap = club.managers;
  } else if (entity === "trainer" && club.trainers) {
    itemsToMap = club.trainers;
  } else if (entity === "player" && club.players) {
    itemsToMap = club.players;
  }

  return (
    <div>
      {itemsToMap.map((item) => (
        <Accordion key={item.id} expanded={expandedAccordion === item.id} onChange={handleAccordionChange(item.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>{/* Render specific details here */}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TabData;
