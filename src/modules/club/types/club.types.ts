export interface Club {
  clubId: string;
  clubName: string;
  sport: string;
  clubManager: string;
  clubAdmin: string;
  teamsCount: number;
  playersCount: number;
  league: string;
  city: string;
  country: string;
  logo: string;
  description: string;
  contactInformation: string;
}

export interface Player {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
}

export interface Trainer {
  id: string;
  name: string;
  teams: Team[];
}

export interface Manager {
  id: string;
  name: string;
  trainers: Trainer[];
}

export interface OrganizationalData {
  id: string;
  name: string;
  managers: Manager[];
}

export interface TabsDataProps {
  id: string;
  name: string;
  managers?: Manager[];
  trainers?: Trainer[];
  teams?: Team[];
  players?: Player[];
}

export type Role = "manager" | "trainer" | "team" | "player";
