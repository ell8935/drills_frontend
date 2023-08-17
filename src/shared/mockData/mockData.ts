import { Manager, OrganizationalData, Player, Team, Trainer } from "../../modules/club/types/club.types";

const mockPlayer1: Player = { id: "p1", name: "Player 1" };
const mockPlayer2: Player = { id: "p2", name: "Player 2" };
const mockPlayer3: Player = { id: "p3", name: "Player 3" };

const mockTeam1: Team = { id: "t1", name: "Team A", players: [mockPlayer1, mockPlayer2] };
const mockTeam2: Team = { id: "t2", name: "Team B", players: [mockPlayer3] };

const mockTrainer1: Trainer = { id: "tr1", name: "Trainer X", teams: [mockTeam1] };
const mockTrainer2: Trainer = { id: "tr2", name: "Trainer Y", teams: [mockTeam2] };

const mockManager1: Manager = { id: "m1", name: "Manager John", trainers: [mockTrainer1, mockTrainer2] };
const mockManager2: Manager = { id: "m2", name: "Manager John", trainers: [mockTrainer1, mockTrainer2] };

const mockOrganizationalData: OrganizationalData = {
  id: "c1",
  name: "bestClub",
  managers: [mockManager1, mockManager2],
};

export default mockOrganizationalData;
