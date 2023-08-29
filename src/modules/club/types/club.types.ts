export interface Club {
  clubId: string;
  clubName: string;
  sport: string;
  league: string;
  city: string;
  country: string;
  logo: string;
  description: string;
  foundedAt: string;
  website: string;
  email: string;
  phoneNumber: string;
}

export type CreateClubProps = Omit<Club, "clubId">;
