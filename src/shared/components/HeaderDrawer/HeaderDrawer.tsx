import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface HeadDrawerProps {
  toggle: boolean;
}

export default function HeaderDrawer({ toggle }: HeadDrawerProps) {
  const { t } = useTranslation();

  const drawerOptions = [
    { text: "header.club", route: "/club" },
    { text: "header.drills", route: "/drills" },
    { text: "header.teams", route: "/teams" },
    { text: "header.trainers", route: "/trainers" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {drawerOptions.map(({ text, route }, index) => (
          <ListItem key={route} disablePadding>
            <ListItemButton onClick={() => handleNavigate(route)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={t(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {toggle && (
        <Drawer anchor={"left"} open={toggle}>
          {list()}
        </Drawer>
      )}
    </>
  );
}