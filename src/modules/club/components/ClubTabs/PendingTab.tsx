import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { postDeleteTeam } from "../../../teams/api/postDeleteTeam";
import { ClubJoinRequest } from "../../types/club.types";

interface TabDataProps {
  data: ClubJoinRequest[];
  onChange: () => void;
}

export const PendingTab = ({ data, onChange }: TabDataProps) => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
  console.log(data);

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent | MouseEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleDeleteEntity = async ({ teamId }: { teamId: string }) => {
    await postDeleteTeam({ teamId });
    onChange();
  };

  return (
    <div>
      {data.map((entity) => (
        <Accordion
          key={entity.id}
          expanded={expandedAccordion === entity.id}
          onChange={handleAccordionChange(entity.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${entity.id}-content`}
            id={`${entity.id}-header`}
          >
            <Typography>{entity.user.fullName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <IconButton onClick={() => handleDeleteEntity({ teamId: entity.user.userId })}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
