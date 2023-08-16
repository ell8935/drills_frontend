import axios from "axios";

interface CreateClubProps {
  clubName: string;
  sport: string;
  clubManager: string;
  clubAdmin: string;
  teamsCount?: number;
  playersCount?: number;
  league: string;
  city: string;
  country: string;
  logo?: string;
  description?: string;
  contactInformation: string;
}

export const createClub = async (form: CreateClubProps) =>
  axios({
    data: form,
    method: "POST",
    url: "club/create",
  });
