import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const SearchBar = () => {
  return (
    <>
      <Grid2 container>
        <Box component={"div"} display="flex" alignItems="center">
          <Box component="div">
            <Box component="div" position="relative">
              <input type="search" className="input" placeholder="Search..." />
              <span className="input-search">
                <SearchOutlinedIcon sx={{ color: '#00bbf9' }} fontSize="small" />
              </span>
            </Box>
          </Box>
        </Box>
      </Grid2>
    </>
  );
};
