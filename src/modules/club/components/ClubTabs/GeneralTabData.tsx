import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserClubRole } from "../../../users/types/userTypes";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { postRemoveUserClubRole } from "../../api/postRemoveEntity";

interface TabDataProps {
  data: UserClubRole[];
  onChange: () => void;
}

export const GeneralTabData = ({ data, onChange }: TabDataProps) => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent | MouseEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleDeleteEntity = async ({ entityId }: { entityId: string }) => {
    await postRemoveUserClubRole({ id: entityId });
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
            <Typography>{entity.user?.fullName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <IconButton onClick={() => handleDeleteEntity({ entityId: entity.id })}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
