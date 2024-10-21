import { AppBar, Avatar, Box, ThemeProvider,Divider} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import "../../index.css";
import { ProfileMenu } from "./ProfileMenu/ProfileMenu";
import { DrawerMenu } from "./DrawerMenu/DrawerMenu";
import { Logo } from "./Logo/Logo";
import { DrawerWidth, theme } from "./Theme/Theme";
import { SearchBar } from "./SearchBar/SearchBar";
import { MenuIcon } from "./Logo/MenuIcon/MenuIcon";

export const Header = () => {
  const [profileAnchor, setProfileAnchor] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  const drawerProps: any = {
    sidebar: sidebar,
    setSidebar: setSidebar,
  };

  const ProfleProps = {
    profileAnchor: profileAnchor,
    setProfileAnchor: setProfileAnchor,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{width:sidebar ?`calc(100% - ${DrawerWidth})`:'100%'}}>
          <Grid2 container display="flex" padding='10px' justifyContent="space-between">
            {/* // ==============================|| HEADER-LEFTSIDE ||============================== // */}

            <Grid2 container display="flex">
               <MenuIcon {...drawerProps} />
              {!sidebar && <Logo {...drawerProps} />}
              <SearchBar />
            </Grid2>

            {/* // ==============================|| HEADER-RIGHTSIDE ||============================== // */}
            <Grid2 container alignItems="center">
              <Box>
                <Avatar
                  onClick={(e: any)=>setProfileAnchor(e.currentTarget)}
                  src="./src/assets/Images/face.jpg"
                />
                <ProfileMenu {...ProfleProps} />
              </Box>
            </Grid2>
          </Grid2>
          <Divider/>
        </AppBar>
        <DrawerMenu {...drawerProps} />
      </ThemeProvider>
    </>
  );
};
