import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { BarChart } from "@mui/x-charts/BarChart";
import { driversData } from "./UsersPage";

const ReportsPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const totalDrivers = driversData.length;
  const activeDrivers = driversData.filter(
    (d) => d.status === "Active"
  ).length;
  const inactiveDrivers = driversData.filter(
    (d) => d.status === "Inactive"
  ).length;

  return (
    <Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          pb: 2,
          borderBottom: "2px solid #ef4444",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Reports Summary
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              mt: 1,
            }}
          >
            Generated on {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handlePrint}
          sx={{
            backgroundColor: "#ef4444",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#dc2626",
            },
          }}
        >
          PRINT PDF
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 2,
          mb: 4,
        }}
      >
        <Paper
          sx={{
            p: 3,
            backgroundColor: "#1f2937",
            borderRadius: 3,
            textAlign: "center",
            border: "2px solid #ef4444",
          }}
        >
          <Typography variant="h5" sx={{ color: "#ef4444", fontWeight: "bold" }}>
            {totalDrivers}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
            Total Drivers
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 3,
            backgroundColor: "#1f2937",
            borderRadius: 3,
            textAlign: "center",
            border: "2px solid #10b981",
          }}
        >
          <Typography variant="h5" sx={{ color: "#10b981", fontWeight: "bold" }}>
            {activeDrivers}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
            Active Drivers
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 3,
            backgroundColor: "#1f2937",
            borderRadius: 3,
            textAlign: "center",
            border: "2px solid #f59e0b",
          }}
        >
          <Typography variant="h5" sx={{ color: "#f59e0b", fontWeight: "bold" }}>
            {inactiveDrivers}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
            Inactive Drivers
          </Typography>
        </Paper>
      </Box>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          mb: 4,
        }}
      >
        <Typography variant="h6" mb={2}>
          Monthly Race Analytics
        </Typography>

        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Jan", "Feb", "Mar", "Apr"],
            },
          ]}
          series={[
            {
              data: [4, 7, 5, 8],
              label: "Wins",
              color: "#ef4444",
            },
            {
              data: [2, 3, 6, 4],
              label: "Pole Positions",
              color: "#111827",
            },
          ]}
          width={700}
          height={350}
        />
      </Paper>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          mb: 4,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h6" mb={2} sx={{ fontWeight: "bold" }}>
          Monthly Driver Statistics
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["Jan", "Feb", "Mar", "Apr"],
              },
            ]}
            series={[
              {
                data: [3, 4, 2, 3],
                label: "Active",
                color: "#10b981",
              },
              {
                data: [1, 2, 3, 2],
                label: "Inactive",
                color: "#ef4444",
              },
            ]}
            width={700}
            height={350}
          />
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h6" mb={2} sx={{ fontWeight: "bold" }}>
          Drivers Details
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#ef4444",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Role
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {driversData.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9fafb" : "white",
                    "&:hover": {
                      backgroundColor: "#f3f4f6",
                    },
                  }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor:
                          row.status === "Active" ? "#d1fae5" : "#fee2e2",
                        color:
                          row.status === "Active" ? "#065f46" : "#991b1b",
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Footer */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
          color: "gray",
        }}
      >
        <Typography variant="body2">
          © 2026 Formula 1 Dashboard. All rights reserved.
        </Typography>
        <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
          This report is confidential and for internal use only.
        </Typography>
      </Box>

      <style>{`
        @media print {
          body {
            background-color: white;
            margin: 0;
            padding: 20px;
          }

          button {
            display: none;
          }

          .MuiPaper-root {
            box-shadow: none !important;
            border: 1px solid #e5e7eb;
          }

          table {
            page-break-inside: avoid;
          }

          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }

          .no-print {
            display: none !important;
          }
        }
      `}</style>

    </Box>
  );
};

export default ReportsPage;