import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Paper } from "@mui/material";

const ReportsPage = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem", mb: 2, color: "black" }}>
        Lap time trends
      </Typography>

      <Paper sx={{ padding: 2, backgroundColor: "white" }}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
          series={[
            { data: [2, 5, 3, 8, 7, 6], label: "Run A", color: "red" },
            { data: [1, 3, 4, 6, 5, 9], label: "Run B", color: "#333" },
          ]}
          width={600}
          height={280}
        />
      </Paper>
    </Box>
  );
};

export default ReportsPage;
