import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

interface HeadDrawerProps {
  toggle: boolean;
}

export default function HeaderDrawer({ toggle }: HeadDrawerProps) {
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["מועדון", "קבוצות", "מאמנים", "תרגילים"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
