import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserClubRole } from "../../../users/types/userTypes";
interface TabDataProps {
  data: UserClubRole[];
}

const TabData = ({ data }: TabDataProps) => {
  //fetch data base on entity as well from store

  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent | MouseEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item) => (
        <Accordion key={item.id} expanded={expandedAccordion === item.id} onChange={handleAccordionChange(item.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.user?.fullName}</Typography>
          </AccordionSummary>
          <AccordionDetails>{/* Render specific details here */}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TabData;
