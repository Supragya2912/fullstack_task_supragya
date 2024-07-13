import { SERVER_URL } from "../constants";
import { ITask } from "../constants/types";

export const getAllTasks = async (): Promise<ITask[]> => {
  const response = await fetch(`${SERVER_URL}/api/fetchAllTasks`);
  return response.json();
};
