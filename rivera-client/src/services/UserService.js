import axios from "axios";
import { API_URL } from "../constants";

const API = axios.create({
  baseURL: API_URL,
});

export const loginUser = async (userData) => {
  const response = await API.post("/users/login", userData);
  return response.data;
};

export const getUsers = async () => {
  const response = await API.get("/users");
  return response.data;
};

export const createUser = async (userData) => {
  const response = await API.post("/users", userData);
  return response.data;
};