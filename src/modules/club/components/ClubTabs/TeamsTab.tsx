import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Team } from "../../../teams/teamsTypes";
import { postDeleteTeam } from "../../../teams/api/postDeleteTeam";

interface TabDataProps {
  data: Team[];
  onChange: () => void;
}

export const TeamsTab = ({ data, onChange }: TabDataProps) => {
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
          key={entity.teamId}
          expanded={expandedAccordion === entity.teamId}
          onChange={handleAccordionChange(entity.teamId)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${entity.teamId}-content`}
            id={`${entity.teamId}-header`}
          >
            <Typography>{entity.teamName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <IconButton onClick={() => handleDeleteEntity({ teamId: entity.teamId })}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
