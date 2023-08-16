import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Club } from "../../types/club.types";
import { useMutation } from "@apollo/client";
import { UPDATE_CLUB } from "../../queries/updateClub";

const useStyles = makeStyles({
  clubCard: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "16px",
    padding: "16px",
    transition: "background-color 0.3s",
    "&.hovered": {
      backgroundColor: "#f5f5f5",
    },
  },
  clubDetails: {
    display: "flex",
    flexDirection: "column",
  },
});

interface ClubCardProps {
  club: Club;
  onClick?: any;
  editable?: boolean;
}

const ClubCard: React.FC<ClubCardProps> = ({ club, onClick, editable = false }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Card
      className={`${classes.clubCard} ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <CardContent>
        <div className={classes.clubDetails}>
          <Typography variant="h5">{club.clubName}</Typography>
          <Typography variant="body1">Sport: {club.sport}</Typography>
          <Typography variant="body1">Manager: {club.clubManager}</Typography>
          <Typography variant="body1">Admin: {club.clubAdmin}</Typography>
          <Typography variant="body1">Teams Count: {club.teamsCount}</Typography>
          <Typography variant="body1">Players Count: {club.playersCount}</Typography>
          <Typography variant="body1">League: {club.league}</Typography>
          <Typography variant="body1">City: {club.city}</Typography>
          <Typography variant="body1">Country: {club.country}</Typography>
          <Typography variant="body1">Description: {club.description}</Typography>
          <Typography variant="body1">Contact: {club.contactInformation}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubCard;
