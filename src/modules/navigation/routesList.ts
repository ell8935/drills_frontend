import LoginScreen from "../auth/screens/LoginScreen";
import HomeScreen from "../home/screens/HomeScreen";
import HomeIcon from "@mui/icons-material/Home";
import TeamsScreen from "../teams/screens/TeamsScreen";

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
    drawerName: "Home",
    title: "Home",
    Component: HomeScreen,
  },
  club: {
    Icon: HomeIcon,
    path: "/club",
    drawerName: "Club",
    title: "Club",
    Component: HomeScreen,
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
  teams: {
    noHeader: true,
    path: "/teams",
    Component: TeamsScreen,
  },
};

export default routesList as RoutesListType;
