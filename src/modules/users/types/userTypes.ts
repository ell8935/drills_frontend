import { Club } from "../../club/types/club.types";

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
export type RolesIds = 11 | 22 | 33;

export interface AssignUserInput {
  userId: string;
  clubId: string;
  roleName: RolesNames;
}
export interface AssignPlaceholderProps extends AssignUserInput {
  fullName: string;
}

export interface UserClubRole {
  id: string;
  user: User;
  club: Club;
  roleName: RolesNames;
  description: string;
}
