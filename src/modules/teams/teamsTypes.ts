import { User } from "../users/types/userTypes";

export interface Team {
  teamId: string;
  teamName: string;
  league: string;
  defaultTrainer: User;
  logo: string;
  description: string;
  status: boolean;
  gender: "male" | "female";
}
