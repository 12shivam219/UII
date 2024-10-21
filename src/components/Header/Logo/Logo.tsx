import {
  Toolbar,
  Box,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MenuIcon } from "./MenuIcon/MenuIcon";

export const Logo = ({sidebar}: any) => {
  return (
    <>
      <Grid2>
        <Toolbar>
            
        {/* // ==============================|| MenuLogo ||============================== // */}
         
        { sidebar && <MenuIcon/> }

          <img
            src="./src/assets/Images/unistack.png"
            height={30}
            width={30}
            alt="Unistack"
          />
          <Box
            component="div"
            marginLeft={2}
            fontFamily={"monospace"}
            fontSize={{ xs: 18, sm: 22 }}
            fontWeight={600}
          >
            <Box component="span" color={"#00bbf9"}>
              UNI
            </Box>
            <Box component="span" color={"#ff34ac"}>
              STA
            </Box>
            <Box component="span" color={"#fee440"}>
              CK
            </Box>
          </Box>
        </Toolbar>
      </Grid2>
    </>
  );
};
