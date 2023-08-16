import React, { useState } from "react";
import "./ClubCard.css"; // Create a CSS file for styling
import { Club } from "../../types/club.types";

interface ClubCardProps {
  club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className={`club-card ${hovered ? "hovered" : ""}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className="club-details">
        <h2>{club.clubName}</h2>
        <p>Sport: {club.sport}</p>
        <p>Manager: {club.clubManager}</p>
        <p>Admin: {club.clubAdmin}</p>
        <p>Teams Count: {club.teamsCount}</p>
        <p>Players Count: {club.playersCount}</p>
        <p>League: {club.league}</p>
        <p>City: {club.city}</p>
        <p>Country: {club.country}</p>
        <p>Description: {club.description}</p>
        <p>Contact: {club.contactInformation}</p>
      </div>
    </div>
  );
};

export default ClubCard;
