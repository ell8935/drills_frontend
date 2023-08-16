import LoginScreen from "../auth/screens/LoginScreen";
import HomeScreen from "../home/screens/HomeScreen";
import HomeIcon from "@mui/icons-material/Home";
import TeamsScreen from "../teams/screens/TeamsScreen";
import ForgotPasswordScreen from "../auth/screens/ForgotPasswordScreen";
import RegisterScreen from "../auth/screens/RegisterScreen";
import ClubCreationScreen from "../club/screens/ClubCreationScreen/ClubCreationScreen";
import ClubScreen from "../club/screens/ClubsScreen";
import { UsersScreen } from "../users/screens/UsersScreen/UsersScreen";

interface Route {
  path: string;
  Component: () => JSX.Element;
  drawerName?: string;
  Icon?: any;
  title?: string;
  adminOnly?: boolean;
  noHeader?: boolean;
}

export type RoutesListType = {
  [key in keyof typeof routesList]: Route;
};

const routesList = {
  home: {
    Icon: HomeIcon,
    path: "/",
    Component: HomeScreen,
  },
  club: {
    Icon: HomeIcon,
    path: "/club",
    drawerName: "Club",
    title: "Club",
    Component: HomeScreen,
  },
  clubs: {
    Icon: HomeIcon,
    path: "/clubs",
    drawerName: "Clubs",
    title: "Clubs",
    Component: ClubScreen,
  },
  createClub: {
    Icon: HomeIcon,
    path: "/createClub",
    drawerName: "Club",
    Component: ClubCreationScreen,
  },
  drills: {
    Icon: HomeIcon,
    path: "/drills",
    drawerName: "Drills",
    title: "Drills",
    Component: HomeScreen,
  },
  trainers: {
    Icon: HomeIcon,
    path: "/trainers",
    drawerName: "Trainers",
    title: "Trainers",
    Component: HomeScreen,
  },
  login: {
    path: "/login",
    Component: LoginScreen,
    noHeader: true,
  },
  register: {
    path: "/register",
    Component: RegisterScreen,
  },
  users: {
    path: "/users",
    Component: UsersScreen,
  },
  teams: {
    noHeader: true,
    path: "/teams",
    Component: TeamsScreen,
  },
  forgotPassword: {
    path: "/forgotPassword",
    Component: ForgotPasswordScreen,
  },
};

export default routesList as RoutesListType;
