import { Schema, model } from 'mongoose';
import { ITask } from './Task.d';

const collection: string = process.env.MONGO_COLLECTION as string;

const taskSchema = new Schema(
  {
    contentId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: collection },
);
const Task = model<ITask>(collection, taskSchema);

export const insertTaskToDB = async (tasks: ITask[]) => {
  await Task.insertMany(tasks);
};

export const getAllTasks = async () => {
  const tasksResponse = await Task.find({});
  const tasks: ITask[] = tasksResponse.map((task) => {
    return {
      contentId: task.contentId,
      content: task.content,
    };
  });
  return tasks;
};

export { Task, ITask };
