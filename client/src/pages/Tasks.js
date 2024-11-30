import React from "react";

import { FaList } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import Board from "../components/Board";
import { tasks } from "../assets/data";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";

const TABS = [
  { title: "Grid", icon: <MdGridView /> },
  { title: "List", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-500",
  inprogress: "bg-yellow-400",
  completed: "bg-teal-500",
};

export default function Tasks() {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [load] = useState(false);

  const status = params.status || "";

  const handleOpenModal = () => {
    setOpen(true);
  };

  return load ? (
    <div className="py-15">
      <Loader />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "All Tasks"} />

        {!status && (
          <Button
            gradientDuoTone="purpleToPink"
            type="button"
            onClick={handleOpenModal}
            className="flex items-center justify-center"
          >
            <FaPlus className="text-lg mr-2" />
            ADD TASK
          </Button>
        )}
      </div>
      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
            {/* <TaskTitle label="ToDo" className={TASK_TYPE.todo} />
            <TaskTitle label="In Progress" className={TASK_TYPE.inprogress} />
            <TaskTitle label="Completed" className={TASK_TYPE.completed} /> */}
          </div>
        )}
        {selected === 0 ? (
          <Board tasks={tasks} />
        ) : (
          <div className="w-full">
            <Table tasks={tasks} />
          </div>
        )}
      </Tabs>
      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
}
