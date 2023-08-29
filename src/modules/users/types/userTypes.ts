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

export interface UserRole {
  roleId: RolesIds;
  roleName: RolesNames;
  description: string;
}

export type RolesNames = "manager" | "trainer" | "player";
export type RolesIds = 11 | 22 | 33;

export interface AssignUserProps {
  userId: string;
  clubId: string;
  roleId: RolesIds;
}

export interface UserClubRole {
  id: string;
  user: User;
  club: Club;
  role: UserRole;
}
