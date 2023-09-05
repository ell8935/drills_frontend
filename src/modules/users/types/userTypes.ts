import { Club } from "../../club/types/club.types";
import { Team } from "../../teams/teamsTypes";

export interface UserRoleClub {
  clubId: string;
  roleName: string;
  userId: string;
}

export interface User {
  userId: string;
  fullName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  dateOfBirth: Date;
  createdAt: Date;
  updatedAt: Date;
  description: string;

  userClubRoles: UserClubRole[];
}

export type RolesNames = "manager" | "trainer" | "player";
export type EntitysNames = "manager" | "trainer" | "team" | "player";
export type RolesIds = 11 | 22 | 33;

export interface AssignUserInput {
  userId: string;
  clubId: string;
  roleName: RolesNames;
}
export interface CreatePlaceholderProps extends AssignUserInput {
  fullName: string;
}

export interface UserClubRole {
  id: string;
  user: User;
  club: Club;
  team: Team;
  roleName: RolesNames;
  description: string;
}
