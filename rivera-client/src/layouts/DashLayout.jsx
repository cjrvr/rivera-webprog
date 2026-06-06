import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Box,
} from "@mui/material";

const drawerWidth = 220;

const DashLayout = () => {
  const loc = useLocation();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#000000" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: "#000000",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            F1 Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#111111",
            color: "white",
            borderRight: "1px solid #1f2937",
          },
        }}
      >
        <Toolbar />

        <List>
          <ListItem
            component={Link}
            to="/dashboard"
            sx={{
              color: loc.pathname === "/dashboard" ? "#ffffff" : "#9ca3af",
              bgcolor: loc.pathname === "/dashboard" ? "#ef4444" : "transparent",
              borderRadius: 1,
              mb: 0.5,
            }}
          >
            <ListItemText primary="Overview" />
          </ListItem>

          <ListItem
            component={Link}
            to="/reports"
            sx={{
              color: loc.pathname === "/reports" ? "#ffffff" : "#9ca3af",
              bgcolor: loc.pathname === "/reports" ? "#ef4444" : "transparent",
              borderRadius: 1,
              mb: 0.5,
            }}
          >
            <ListItemText primary="Reports" />
          </ListItem>

          {/* drivers */}
          <ListItem
            component={Link}
            to="/users"
            sx={{
              color: loc.pathname === "/users" ? "#ffffff" : "#9ca3af",
              bgcolor: loc.pathname === "/users" ? "#ef4444" : "transparent",
              borderRadius: 1,
            }}
          >
            <ListItemText primary="Drivers" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#0f0f0f",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;
