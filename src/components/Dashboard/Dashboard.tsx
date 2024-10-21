import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { WelcomeCard } from "./DashboardData/WelcomeCard/WelcomeCard";
import { StatisticCard } from "./DashboardData/StatisticsDetails/StatisticCard/StatisticCard";

export const Dashboard = () => {
  return (
    <>
      <Box component="main" width={"100%"}>
        <Box
          component="div"
          paddingTop="94px"
          paddingLeft="20px"
          paddingRight="8px"
        >
          <Box component="div" display="flex" flexWrap="wrap">
            <Grid2 container width="33.33%" paddingRight="20px">
              <Box component="div" width="100%">
                <WelcomeCard />
              </Box>
            </Grid2>
            <Grid2 container width="66.66%">
              <Box component="div" width='100%'>
                <Typography>
                  Statistics Card Total 48.5% growth 😎 this month
                </Typography>
                <StatisticCard />
              </Box>
            </Grid2>
          </Box>
        </Box>
      </Box>
    </>
  );
};
