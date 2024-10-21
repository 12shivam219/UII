import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { Avatar, Box, ThemeProvider, MenuItem, Menu } from "@mui/material";
import { Fragment } from "react";
import { theme } from "../Theme/Theme";

/* // ==============================|| PROFILE MENU COMPONENT ||============================== // */

export const ProfileMenu = ({ profileAnchor, setProfileAnchor }: any) => {
  const ProfileMenuList = [
    {
      picture: "",
      name: "Shivam Tiwari",
      email: "shivam.tiwari.Unicodez.com",
      options: [
        { icon: <PermIdentityIcon color="primary" />, option: "My Profile" },
        { icon: <MessageOutlinedIcon color="primary" />, option: "Messages" },
        {
          icon: <EventAvailableOutlinedIcon color="primary" />,
          option: "Activity",
        },
        { icon: <HelpOutlineOutlinedIcon color="primary" />, option: "FAQ" },
        {
          icon: <PowerSettingsNewOutlinedIcon color="primary" />,
          option: "Sign Out",
        },
      ],
    },
  ];

  return (
    <>
      {ProfileMenuList.map((item, index) => {
        return (
          <Fragment key={index}>
            <ThemeProvider theme={theme}>
              <Menu
                open={Boolean(profileAnchor)}
                anchorEl={profileAnchor}
                onClose={() => setProfileAnchor(!profileAnchor)}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                variant="menu"
              >
                <Box
                  component="div"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  paddingRight="10px"
                  justifyContent="center"
                >
                  <Avatar src="./src/assets/Images/face.jpg" />
                </Box>
                <MenuItem
                  sx={{
                    justifyContent: "center",
                    color: "#00bbf9",
                  }}
                >
                  {item.name}
                </MenuItem>
                <MenuItem sx={{ justifyContent: "center", color: "#ff34ac" }}>
                  {item.email}
                </MenuItem>
                {item.options.map((opt, index) => {
                  return (
                    <Box component={"div"} key={index}>
                      <MenuItem divider>
                        <Box
                          component="span"
                          display="flex"
                          marginRight="8px"
                          alignItems="center"
                        >
                          {opt.icon}
                        </Box>
                        <Box sx={{ color: "#00bbf9" }}>{opt.option}</Box>
                      </MenuItem>
                    </Box>
                  );
                })}
              </Menu>
            </ThemeProvider>
          </Fragment>
        );
      })}
    </>
  );
};
