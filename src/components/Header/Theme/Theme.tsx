export const DrawerWidth = "250px";


/* // ==============================|| CREATETHEME FUNCTION FOR CHANGING THE APPBAR COMPONENT DEFAULT CSS BEHAVIOUR ||
============================== // */

import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "white",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: "230px",
          border: "2px solid white",
          overflow: "hidden",
          marginTop: "6px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "12px",
          fontWeight: "400",
          color: "#484848",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          zIndex: "auto",
          overflow: "hidden",
          border: "none",
          backgroundColor: "#2a3042",
        },
        docked: {
          height: "100vh",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});
