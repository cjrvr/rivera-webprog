import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const DashboardPage = () => {
  return (
    <Box>

      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        F1 Dashboard Overview
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: "#ef4444",
              color: "white",
              borderRadius: 3,
            }}
          >
            <SpeedIcon sx={{ fontSize: 40 }} />

            <Typography variant="h6">
              Fastest Laps
            </Typography>

            <Typography variant="h3">
              128
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: "white",
              borderRadius: 3,
            }}
          >
            <GroupsIcon sx={{ fontSize: 40 }} />

            <Typography variant="h6">
              Drivers
            </Typography>

            <Typography variant="h3">
              20
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: "#111827",
              color: "white",
              borderRadius: 3,
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 40 }} />

            <Typography variant="h6">
              Championships
            </Typography>

            <Typography variant="h3">
              16
            </Typography>
          </Paper>
        </Grid>

      </Grid>

    </Box>
  );
};

export default DashboardPage;