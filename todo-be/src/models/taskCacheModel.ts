import { getJSONValue, setJSONValue } from '../services/redisClient';
import { ITask } from './Task.d';

const redis_key = process.env.REDIS_KEY || 'FULLSTACK_TASK_Supragya';

export const getTasksFromCache = async (): Promise<ITask[]> => {
  const tasks = await getJSONValue(redis_key);
  return Array.isArray(tasks) ? tasks : [];
};

export const addTaskToCache = async (task: ITask) => {
  // Add content to cache
  const existingTasks = await getTasksFromCache();
  const newTasks = [...existingTasks, task];
  await setJSONValue(redis_key, newTasks);
};

export const flushCache = async () => {
  await setJSONValue(redis_key, []);
};
