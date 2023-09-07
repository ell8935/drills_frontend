import { Team } from "../../teams/teamsTypes";
import { RolesNames, User, UserClubRole } from "../../users/types/userTypes";

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
  userClubRoles?: UserClubRole[];
  teams?: Team[];
  joinRequests?: ClubJoinRequest[];
}

export interface ClubTabsDataProps {
  managers: UserClubRole[];
  trainers: UserClubRole[];
  players: UserClubRole[];
  teams: Team[];
  joinRequests: ClubJoinRequest[];
}

export type CreateClubProps = Omit<Club, "clubId">;

export interface RequestToJoinInput {
  userId: string;
  clubId: string;
}

export interface ClubJoinRequest {
  id: string;
  user: User;
  club: Club;
  isApproved: boolean;
  createdAt: Date;
}

export interface PlaceholderProps {
  onSubmit?: ({ roleName, fullName }: { roleName: RolesNames; fullName: string }) => void;
}
