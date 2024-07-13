import { insertTaskToDB, getAllTasks } from '../models/Task';
import { addTaskToCache, getTasksFromCache, flushCache } from '../models/taskCacheModel';
import { MAX_CACHE_SIZE } from '../constants';
import { v4 as uuidV4 } from 'uuid';
import { ITask } from '../models/Task';

export const addTask = async (content: string) => {
  const cachedItems = await getTasksFromCache();
  const newTask = { contentId: uuidV4(), content } as ITask;

  if (cachedItems.length >= MAX_CACHE_SIZE) {
    const updatedCachedItems = [...cachedItems, newTask];
    await insertTaskToDB(updatedCachedItems);
    await flushCache();
  } else {
    await addTaskToCache(newTask);
  }

  return newTask;
};

export const getTasks = async () => {
  const cachedItems = await getTasksFromCache();
  const dbItems = await getAllTasks();
  const allTasks = [...cachedItems, ...dbItems];
  return allTasks;
};
