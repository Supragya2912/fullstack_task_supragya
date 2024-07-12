import { Task, ITask } from '../models/Task';
import { addToCache, getFromCache, flushCache } from './redisClient';

const MAX_CACHE_SIZE = 50;

export const addTask = async (content: string) => {
  const cachedItems = await getFromCache();

  if (cachedItems.length >= MAX_CACHE_SIZE) {
    await Task.insertMany(cachedItems.map(item => ({ content: item })));
    await flushCache();
  }

  await addToCache(content);
};

export const fetchAllTasks = async (): Promise<ITask[]> => {
  const cachedItems = await getFromCache();
  const dbItems = await Task.find().lean(); 
  const allItems = [
    ...cachedItems.map(content => ({ _id: '', content } as ITask)), 
    ...dbItems
  ];
  return allItems;
};
