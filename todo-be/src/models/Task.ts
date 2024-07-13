import { Schema, model, Document } from 'mongoose';
import { ITask } from './Task.d';
import { v4 as uuidV4 } from 'uuid';
const collection: string = process.env.MONGO_COLLECTION as string;

const taskSchema = new Schema({
  contentId: { type: String, required: true },
  content: { type: String, required: true }
},{collection: collection});

// export const insertTaskToDB = async (content: string) => {
//   const contentId = uuidV4();
//   const task = new Task({ contentId, content });
//   await task.save();
//   console.log(`Added task to DB: ${content}`);
// }
export const insertTaskToDB = async (tasks: ITask[]) => {
  await Task.insertMany(tasks);
  console.log(`Added tasks to DB: ${tasks.map(task => task.content).join(', ')}`);
}

const Task = model<ITask>(collection, taskSchema);

export { Task, ITask };
