import axios from "axios";
import { headers } from "./headersService";

export const loginService = (email, password) => {
  return (
    axios.post(
      `${process.env.REACT_APP_API_BASE}/auth/login`,
      {
        email: email,
        password: password
      },
      headers
    )
  )
};

export const registerService = (name, email, password) => {
  return (
    axios.post(
      `${process.env.REACT_APP_API_BASE}/auth/register`,
      {
        name: name,
        email: email,
        password: password
      },
      headers
    )
  )
};
