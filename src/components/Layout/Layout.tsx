import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Box display={"flex"}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
};
