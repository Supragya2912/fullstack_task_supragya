import {v4 as uuidV4} from 'uuid';
import { getJSONValue, setJSONValue } from '../services/redisClient';
import { ITask } from './Task.d';

const redis_key = process.env.REDIS_KEY || "FULLSTACK_TASK_Supragya";

export const getTasksFromCache = async (): Promise<ITask[]> => {
    const tasks = await getJSONValue(redis_key);
    return Array.isArray(tasks) ? tasks : [];
}

export const addTaskToCache = async (content: string) => {
    const contentId = uuidV4();
    const contentObj = {contentId, content};

    // Add content to cache
    const existingTasks = await getTasksFromCache();
    const newTasks = [...existingTasks, contentObj];
    await setJSONValue(redis_key, newTasks);
    console.log(`Added task to cache: ${content}`);
};

export const flushCache = async () => {
    await setJSONValue(redis_key, []);
};
