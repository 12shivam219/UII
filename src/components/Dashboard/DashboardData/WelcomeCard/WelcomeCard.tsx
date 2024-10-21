import {
  Card,
  Box,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import "../../../../index.css";

export const WelcomeCard = () => {
  return (
    <>
      <Card>
        <Box
          component="div"
          display="flex"
          sx={{
            backgroundColor: "rgba(85,110,230,.25)",
            width: "100%",
            height: "150px",
          }}
        >
          <Box component="div" width="50%">
            <CardContent sx={{ padding: "16px" }}>
              <Typography
                gutterBottom
                variant="h1"
                color="#ff34ac"
                fontWeight="700"
                fontSize="18px"
                component="div"
              >
                Hello Shivam !{" "}
                <Box component="span" className="wave" fontSize="26px">
                  👋
                </Box>
              </Typography>
              <Typography color="#00bbf9" component="p" fontSize="16px">
                Welcome to Unistack
              </Typography>
            </CardContent>
          </Box>
          <Box component="div" width="50%">
            <CardMedia
              sx={{ height: "100%" }}
              image="./src/assets/Images/WelcomeImg.png"
            />
          </Box>
        </Box>
        <Box component="div">
          <Box component="div" display="flex" justifyContent='space-evenly' padding="16px">
            <Box component="div">
              <Box
                component="div"
                height="70px"
                width="70px"
                marginTop="-48px"
                border="4px solid white"
                borderRadius="100%"
              >
                <Avatar
                  src="./src/assets/Images/face.jpg"
                  sx={{ height: "70px", width: "70px" }}
                />
              </Box>
              <Typography
                variant="h6"
                marginTop="16px"
                fontSize="15px"
                color="#ff34ac"
              >
                Shivam Tiwari
              </Typography>
              <Typography
                variant="h6"
                marginTop="10px"
                fontSize="16px"
                color="#00bbf9"
              >
                Marketing Support
              </Typography>
            </Box>
            <Box component="div" display='flex' gap='20px'>
              <Box component="div" display='flex' flexDirection='column' >
                <Typography variant="h6" fontSize='15px' color='#00bbf9' component="span">
                  125
                </Typography>
                <Typography variant="h6" fontSize='15px' color='#ff34ac' component="span">
                  Projects
                </Typography>
              </Box>
              <Box component="div"  display='flex' flexDirection='column'>
                <Typography variant="h6" fontSize='15px' color='#00bbf9' component="span">
                  12125
                </Typography>
                <Typography variant="h6" fontSize='15px' color='#ff34ac' component="span">
                  Total Records
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};
