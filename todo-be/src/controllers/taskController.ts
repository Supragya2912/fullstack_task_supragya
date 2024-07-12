import { Request, Response } from "express";
import { fetchAllTasks } from '../services/TaskService';


export const fetchAllTasksController = async (req: Request, res: Response) => {
    const tasks = await fetchAllTasks();
    res.json(tasks);
}