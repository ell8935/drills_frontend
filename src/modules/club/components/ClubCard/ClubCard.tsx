import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { Club } from "../../types/club.types";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

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

const ClubCard = ({ club, onClick, editable = false }: ClubCardProps) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleNavigate = () => {
    navigate(`/updateClub/${club.clubId}`);
  };

  //return skeleton
  if (!club) return <div>No club found</div>;

  return (
    <Card
      className={`${classes.clubCard} ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <IconButton onClick={handleNavigate}>
        <EditIcon />
      </IconButton>
      <CardContent>
        <div className={classes.clubDetails}>
          <Typography variant="h5">{club.clubName}</Typography>
          <Typography variant="body1">Sport: {club.sport}</Typography>
          <Typography variant="body1">League: {club.league}</Typography>
          <Typography variant="body1">City: {club.city}</Typography>
          <Typography variant="body1">Country: {club.country}</Typography>
          <Typography variant="body1">Description: {club.description}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubCard;
