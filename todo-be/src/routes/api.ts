import express from "express";
// import {  } from "../controllers/taskController";

const router = express.Router();

router.get('/ping', (req, res) => {
    res.send('api pong');
});

// router.get('/fetchAllTasks', fetchAllTasksController);

export default router;
