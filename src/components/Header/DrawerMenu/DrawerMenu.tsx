import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Fragment } from "react";
import { Logo } from "../Logo/Logo";
import { DrawerWidth } from "../Theme/Theme";

/*// ==============================|| DRAWER COMPONENT (DASHBOARD-SIDEBAR)||============================== //*/

export const DrawerMenu = ({ sidebar }: any) => {
  const drawerData = [
    {
      subHeader: "HOME",
      nav: ["Dashboard"],
      icon: [<GridViewOutlinedIcon />],
    },
    {
      subHeader: "REQ & INTERVIEWS",
      nav: ["Requirements", "Interviews", "Tests", "Reports"],
      icon: [
        <SpeakerNotesOutlinedIcon />,
        <ShowChartOutlinedIcon />,
        <EventAvailableOutlinedIcon />,
        <ReceiptOutlinedIcon />,
      ],
    },
    {
      subHeader: "CONSULTANTS",
      nav: [],
      icon: [],
    },
    {
      subHeader: "AUTHENTICATION",
      nav: ["Logout"],
      icon: [<AccountCircleOutlinedIcon />],
    },
  ];

  const drawer = (
    <>
      {drawerData.map((item, index) => {
        return (
          <List
            key={index}
            sx={
              item.subHeader === "HOME"
                ? { marginTop: "40px", marginLeft: "6px" }
                : { marginLeft: "6px" }
            }
          >
            <ListSubheader
              sx={{
                lineHeight: "16px",
                fontSize: "11px",
                color: "#fee440",
                fontWeight: "700",
                marginBottom: "10px",
                backgroundColor: "#2a3042",
              }}
            >
              {item.subHeader}
            </ListSubheader>
            {item.nav.map((NavItem, Navindex) => {
              return (
                <Fragment key={Navindex}>
                  <List disablePadding>
                    <ListItem button>
                      <ListItemIcon sx={{ color: "#00bbf9" }}>
                        {item.icon[Navindex]}
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        sx={{
                          fontSize: "12px",
                          color: "#ff34ac",
                          fontWeight: "400",
                        }}
                      >
                        {NavItem}
                      </ListItemText>
                    </ListItem>
                  </List>
                </Fragment>
              );
            })}
          </List>
        );
      })}
    </>
  );

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebar}
        sx={{
          width: sidebar ? DrawerWidth : "",
          flexShrink: 0,
          ".MuiDrawer-paper": {
            width: DrawerWidth,
          },
        }}
      >
        <Logo />
        {drawer}
      </Drawer>
    </>
  );
};
