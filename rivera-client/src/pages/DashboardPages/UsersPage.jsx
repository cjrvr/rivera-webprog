import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export const driversData = [
  { id: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 435 },
  { id: 2, driver: "Lando Norris", team: "McLaren", points: 374 },
  { id: 3, driver: "Charles Leclerc", team: "Ferrari", points: 356 },
  { id: 4, driver: "Oscar Piastri", team: "McLaren", points: 292 },
  { id: 5, driver: "Carlos Sainz", team: "Ferrari", points: 290 },
  { id: 6, driver: "George Russell", team: "Mercedes", points: 245 },
  { id: 7, driver: "Lewis Hamilton", team: "Mercedes", points: 223 },
  { id: 8, driver: "Sergio Perez", team: "Red Bull Racing", points: 152 },
];

const cols = [
  { field: "id", headerName: "No.", width: 70 },
  { field: "driver", headerName: "Driver", flex: 1, minWidth: 180 },
  { field: "team", headerName: "Team", flex: 1, minWidth: 160 },
  { field: "points", headerName: "Pts", width: 100 },
];

const UsersPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        color: "#111827",
        p: 3,
        borderRadius: 2,
        border: "1px solid #e5e7eb",
      }}
    >
      <Typography variant="h5" mb={2} sx={{ color: "#111827", fontWeight: "bold" }}>
        Drivers grid
      </Typography>

      <Box
        sx={{
          height: 400,
          width: "100%",
          bgcolor: "#ffffff",
          border: "1px solid #d1d5db",
          borderRadius: 2,
          padding: "8px",
        }}
      >
        <DataGrid
          rows={driversData}
          columns={cols}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          sx={{
            border: "none",
            bgcolor: "#ffffff",
            color: "#111827",
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #e5e7eb",
              color: "#111827",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              color: "#b91c1c",
              fontWeight: "bold",
              borderBottom: "2px solid #ef4444",
            },
            "& .MuiDataGrid-columnSeparator": {
              color: "#e5e7eb",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#f3f4f6",
              color: "#374151",
            },
            "& .MuiTablePagination-root": {
              color: "#374151",
            },
            "& .MuiTablePagination-selectIcon": {
              color: "#374151",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UsersPage;
