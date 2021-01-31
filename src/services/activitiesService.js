import axios from "axios";
import { headers } from "./headersService";

export const getActivityAttempts = (activity = null) => {
  return (
    axios.get(
      `${process.env.REACT_APP_API_BASE}/activity/attempt/?activity=${activity}`,
      { headers }
    )
  )
};

export const getTimeSpent = () => {
  return (
    axios.get(
      `${process.env.REACT_APP_API_BASE}/assets/timeSpent`,
      { headers }
    )
  )
};
