import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

export const driversData = [
  {
    id: 1,
    firstName: "Max",
    lastName: "Verstappen",
    username: "max33",
    email: "max@gmail.com",
    role: "Champion",
    gender: "Male",
    status: "Active",
    age: 27,
    contact: "09123456789",
  },
  {
    id: 2,
    firstName: "Lewis",
    lastName: "Hamilton",
    username: "ham44",
    email: "lewis@gmail.com",
    role: "Driver",
    gender: "Male",
    status: "Inactive",
    age: 39,
    contact: "09987654321",
  },
  {
    id: 3,
    firstName: "Charles",
    lastName: "Leclerc",
    username: "charles16",
    email: "charles@gmail.com",
    role: "Driver",
    gender: "Male",
    status: "Active",
    age: 26,
    contact: "09111111111",
  },
  {
    id: 4,
    firstName: "Lando",
    lastName: "Norris",
    username: "lando4",
    email: "lando@gmail.com",
    role: "Driver",
    gender: "Male",
    status: "Active",
    age: 26,
    contact: "09111111111",
  },
  {
    id: 5,
    firstName: "Carlos",
    lastName: "Sainz",
    username: "carlos5",
    email: "carlos@gmail.com",
    role: "Driver",
    gender: "Male",
    status: "Active",
    age: 26,
    contact: "09111111111",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
  },

  {
    field: "lastName",
    headerName: "Last Name",
    flex: 1,
  },

  {
    field: "username",
    headerName: "Username",
    flex: 1,
  },

  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },

  {
    field: "role",
    headerName: "Role",
    flex: 1,
  },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
];

const UsersPage = () => {
  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] = useState("");

  const [genderFilter, setGenderFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    contact: "",
    age: "",
  });

  const filteredRows = driversData.filter((row) => {
    const matchesSearch =
      row.firstName.toLowerCase().includes(search.toLowerCase()) ||
      row.lastName.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.username.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "" || row.role === roleFilter;

    const matchesGender =
      genderFilter === "" || row.gender === genderFilter;

    const matchesStatus =
      statusFilter === "" || row.status === statusFilter;

    return (
      matchesSearch &&
      matchesRole &&
      matchesGender &&
      matchesStatus
    );
  });

  const handleSubmit = () => {
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (!/^\d{11}$/.test(formData.contact)) {
      alert("Contact number must be 11 digits");
      return;
    }

    if (isNaN(formData.age)) {
      alert("Age must be numbers only");
      return;
    }

    if (formData.username.includes(" ")) {
      alert("Username must not contain spaces");
      return;
    }

    alert("User added successfully!");
    setOpen(false);
  };

  return (
    <Box>

      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Drivers Management
      </Typography>


      <Paper
        sx={{
          p: 2,
          mb: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          backgroundColor: "#1f2937",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
          }}
        />

        <TextField
          select
          label="Role"
          size="small"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: 150,
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Champion">Champion</MenuItem>
          <MenuItem value="Driver">Driver</MenuItem>
        </TextField>

        <TextField
          select
          label="Gender"
          size="small"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: 150,
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>

        <TextField
          select
          label="Status"
          size="small"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            width: 150,
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ef4444",
          }}
          onClick={() => setOpen(true)}
        >
          ADD USER
        </Button>
      </Paper>


      <Box
        sx={{
          height: 500,
          backgroundColor: "white",
          borderRadius: 3,
          p: 2,
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>


      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Driver</DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
            width: 350,
          }}
        >
          <TextField
            label="Username"
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
          />

          <TextField
            label="Password"
            type="password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          <TextField
            label="Contact Number"
            onChange={(e) =>
              setFormData({
                ...formData,
                contact: e.target.value,
              })
            }
          />

          <TextField
            label="Age"
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default UsersPage;