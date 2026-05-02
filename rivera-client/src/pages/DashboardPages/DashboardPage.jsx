import { Box, Paper, Typography } from "@mui/material";
import { driversData } from "./UsersPage";

// garage-style summary stacked list (different from 3 side by side tiles)
const DashboardPage = () => {
  var howManyDrivers = driversData.length;

  return (
    <Box sx={{ maxWidth: 560, margin: "auto" }}>
      <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1.6rem", mb: 2 }}>
        Race weekend board
      </Typography>

      <Paper sx={{ p: 2, mb: 1.5, bgcolor: "#252525", color: "white" }}>
        <Typography sx={{ fontSize: "0.9rem", color: "#ccc" }}>
          Entries on leaderboard
        </Typography>
        <Typography sx={{ fontSize: "1.75rem", fontWeight: "bold" }}>{howManyDrivers}</Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 1.5, bgcolor: "white", color: "black" }}>
        <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
          Telemetry records stored
        </Typography>
        <Typography sx={{ fontSize: "1.75rem", fontWeight: "bold", color: "#b91c1c" }}>75</Typography>
      </Paper>

      <Paper sx={{ p: 2, bgcolor: "#151515", color: "white", borderLeft: "5px solid #ef4444" }}>
        <Typography sx={{ fontSize: "0.9rem", color: "#bbb" }}>Crowd turnout</Typography>
        <Typography sx={{ fontSize: "1.75rem", fontWeight: "bold" }}>1240</Typography>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
