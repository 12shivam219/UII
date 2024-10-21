import { Box, Icon, Card, Typography } from "@mui/material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";


export const StatisticCard = () => {
  const StatisticData = [
    {
      statisticHead: "Total Records",
      statisticData: 3257,
      statisticGrowth: "76% Growth This Month",
      statisticBackgroundColor:
        "linear-gradient(to right, #664dc9, rgba(102, 77, 201, .6))",
    },
    {
      statisticHead: "Total InterViews",
      statisticData: 3257,
      statisticGrowth: "76% Growth This Month",
      statisticBackgroundColor: "linear-gradient(to right, #1d976c, #2fd38a)",
    },
    {
      statisticHead: "Completed Interviews",
      statisticData: 3257,
      statisticGrowth: "76% Growth This Month",
      statisticBackgroundColor: "linear-gradient(to right, #fa5420, #f6a800)",
    },
    {
      statisticHead: "Total Project",
      statisticData: 3257,
      statisticGrowth: "76% Growth This Month",
      statisticBackgroundColor: "linear-gradient(to right, #5b73e8, #44c4fa)",
    },
  ];

  return (
    <>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        width="100%"
        flexWrap={"wrap"}
      >
        {StatisticData.map((data) => {
          return (
            <Card
              key={data.statisticHead}
              sx={{
                width: "200px",
                background: data.statisticBackgroundColor,
              }}
            >
              <Box component="div" padding={"10px"} borderRadius={"4px"}>
                <Box component={"div"}>
                  <Box component={"div"} fontSize={"14px"}>
                    <Typography
                      component={"span"}
                      fontSize={"14px"}
                      fontWeight="700"
                      color="white"
                    >
                      {data.statisticHead}
                    </Typography>
                    <Typography
                      component={"h2"}
                      margin={0}
                      fontWeight={"700"}
                      color="white"
                    >
                      {data.statisticData}
                    </Typography>
                  </Box>
                  <Typography
                    component={"p"}
                    color="white"
                    fontFamily="700"
                    display="flex"
                    alignItems="center"
                    fontSize="12px"
                  >
                    <Icon
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <TrendingUpOutlinedIcon fontSize="small" />
                    </Icon>{" "}
                    {data.statisticGrowth}
                  </Typography>
                </Box>
                <Box component={"div"}></Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
