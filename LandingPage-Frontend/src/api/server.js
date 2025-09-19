import axios from "axios";
import { catchError } from "../utlis/helper";
import { AUTH_URL, CLIENT_URL } from "./client";

//login
export const login = async (formData) => {
  try {
    const { data } = await axios.post(`${AUTH_URL}/login`, formData);
    return data;
  } catch (err) {
    return catchError(err);
  }
};

//register
export const signUp = async (formData) => {
  try {
    const { data } = await axios.post(`${AUTH_URL}/register`, formData);
    return data;
  } catch (err) {
    return catchError(err);
  }
};

export const fetchAllClient = async () => {
  try {
    const { data } = await axios.get(`${CLIENT_URL}/get-all-active-client`);
    return data;
  } catch (err) {
    return catchError(err);
  }
};
