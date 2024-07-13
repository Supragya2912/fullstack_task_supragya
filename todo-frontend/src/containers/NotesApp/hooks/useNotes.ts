import { getAllTasks } from "../../../api/api";
import { addTask, addTaskSuccess } from "../../../redux/reducers/taskReducers";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { ITask } from "../../../constants/types";
import useSocket from "../../../services/ws";
import { useAppSelector } from "../../../redux/store";

const useNotes = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const tasks = useAppSelector((state) => state.task.tasks);

  const onSubmitNote = useCallback(
    (note: string) => {
      if (note.trim() && socket && socket.connected) {
        socket.emit("add", note);
      }
    },
    [socket]
  );

  useEffect(() => {
    if (!socket) return;

    const messageListener = (message: ITask) => {
      dispatch(addTask(message));
    };

    socket.on("added", messageListener);

    return () => {
      socket.off("added", messageListener);
    };
  }, [socket, dispatch]);

  const getTasks = useCallback(async () => {
    const tasks = await getAllTasks();
    dispatch(addTaskSuccess(tasks));
  }, [dispatch]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return { onSubmitNote, tasks };
};

export default useNotes;
