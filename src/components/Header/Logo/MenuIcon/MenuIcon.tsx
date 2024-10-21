import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton } from "@mui/material";

export const MenuIcon = ({
  sidebar,
  setSidebar,
}: any) => {
  return (
    <>
      <Box
        component={"div"}
        alignItems="center"
        paddingRight="10px"
        display="flex"
      >
        <IconButton
          edge="start"
          onClick={() => {
            setSidebar(!sidebar);
          }}
          color="info"
        >
          <MenuOutlinedIcon sx={{ color: "#00bbf9" }} />
        </IconButton>
      </Box>
    </>
  );
};
