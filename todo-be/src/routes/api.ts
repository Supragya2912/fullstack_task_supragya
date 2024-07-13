import express from 'express';
import { getTasks } from '../controllers/taskController';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('api pong');
});

router.get('/fetchAllTasks', async (req, res) => {
  const allTasks = await getTasks();
  res.json(allTasks);
});

export default router;
