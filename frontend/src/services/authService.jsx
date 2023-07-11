import axios from "axios";
export const BACKEND_URL = "http://localhost:8000";
import { toast } from "react-toastify";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//    Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Registered User Successfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.respose && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.respose && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// Login User
export const logoutUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.respose && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
