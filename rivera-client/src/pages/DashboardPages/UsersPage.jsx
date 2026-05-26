import { useEffect, useState } from "react";
import { getUsers, createUser } from "../../services/UserService";

function UsersPage() {
  const userType = localStorage.getItem("type");

  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    type: "editor",
    username: "",
    password: "",
    address: "",
  });

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#1f1f1f] px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-200";

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userType === "admin") {
      fetchUsers();
    }
  }, [userType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(formData);

      alert("User added successfully");

      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        contactNumber: "",
        email: "",
        type: "editor",
        username: "",
        password: "",
        address: "",
      });

      fetchUsers();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add user");
    }
  };

  if (userType !== "admin") {
    return (
      <div className="min-h-screen bg-[#0f0f0f] px-8 py-8 text-white flex items-center justify-center">
        <div className="rounded-2xl border border-red-500/30 bg-[#151515] p-10 text-center shadow-xl max-w-md">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Access Denied
          </h1>

          <p className="text-gray-300 text-lg">
            Only admin users can access the Users Management page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] px-8 py-8 text-white">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white">Users Page</h1>

        <p className="mt-2 text-gray-400">Add a new user to the system.</p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-white/10 bg-[#151515] p-8 shadow-xl"
        >
          <div className="mb-5">
            <label className={labelClass}>First Name</label>

            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Last Name</label>

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Age</label>

            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Gender</label>

            <input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Enter gender"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Contact Number</label>

            <input
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Email</label>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>User Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="admin">admin</option>
              <option value="editor">editor</option>
              <option value="viewer">viewer</option>
            </select>
          </div>

          <div className="mb-5">
            <label className={labelClass}>Username</label>

            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>Password</label>

            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={inputClass}
              required
            />
          </div>

          <div className="mb-8">
            <label className={labelClass}>Address</label>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className={inputClass}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-red-500 py-4 text-lg font-bold text-white transition hover:bg-red-600"
          >
            Add User
          </button>
        </form>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#151515] p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">User List</h2>

          {users.length === 0 ? (
            <p className="text-gray-400">No users added yet.</p>
          ) : (
            users.map((user) => (
              <div
                key={user._id}
                className="mb-4 rounded-xl bg-[#1f1f1f] p-4"
              >
                <p className="font-semibold text-white">
                  {user.firstName} {user.lastName}
                </p>

                <p className="text-sm text-gray-400">{user.email}</p>

                <p
                  className="text-sm font-semibold"
                  style={{ color: "#ef4444" }}
                >
                  {user.type}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;