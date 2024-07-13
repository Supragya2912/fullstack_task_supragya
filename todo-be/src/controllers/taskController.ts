import { Task, insertTaskToDB } from "../models/Task";
import {
  addTaskToCache,
  getTasksFromCache,
  flushCache,
} from "../models/taskCacheModel";
import { MAX_CACHE_SIZE } from "../constants";
import { v4 as uuidV4 } from "uuid";
import { ITask } from "../models/Task";

export const addTask = async (content: string) => {
  const cachedItems = await getTasksFromCache();
  console.log("Cached item:",cachedItems);

  if (cachedItems.length >= MAX_CACHE_SIZE) {
    const updatedCachedItems = [...cachedItems, { contentId: uuidV4(), content }];
    await insertTaskToDB(updatedCachedItems);
    await flushCache();
  } else {
   const response = await addTaskToCache(content);
   console.log(response);
  }
};

export const getTasks = async () => {
  const cachedItems = await getTasksFromCache();
  const dbItems = await Task.find();
  return [...cachedItems, ...dbItems];
};
