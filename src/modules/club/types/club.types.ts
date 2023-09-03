import { RolesNames, UserClubRole } from "../../users/types/userTypes";

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

export interface UserClubRoleRowsData {
  managers: UserClubRole[];
  trainers: UserClubRole[];
  players: UserClubRole[];
}

export type CreateClubProps = Omit<Club, "clubId">;

export interface RequestToJoinInput {
  userId: string;
  clubId: string;
}

export interface PlaceholderProps {
  onSubmit?: ({ roleName, fullName }: { roleName: RolesNames; fullName: string }) => void;
}
