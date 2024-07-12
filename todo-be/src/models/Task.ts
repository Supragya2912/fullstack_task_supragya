import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
  content: string;
}

const taskSchema = new Schema({
  content: { type: String, required: true }
});

const Task = model<ITask>('Task', taskSchema);

export { Task, ITask };
