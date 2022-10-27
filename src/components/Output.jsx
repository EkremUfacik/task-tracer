// import { useState } from "react";
import "./Output.css";
import { TiDelete } from "react-icons/ti";

const Output = ({ list, setList }) => {
  let taskDateList = JSON.parse(localStorage.getItem("taskDateList")) || [];

  Object.keys(list).length &&
    taskDateList.at(-1)?.id !== list?.id &&
    taskDateList.push(list);

  localStorage.setItem("taskDateList", JSON.stringify(taskDateList));

  const del = (id) => {
    taskDateList = taskDateList.filter((li) => li.id !== id);
    localStorage.setItem("taskDateList", JSON.stringify(taskDateList));
    setList({});
  };

  const lineTask = (id) => {
    taskDateList.forEach((item, index) => {
      if (item.id === id) {
        return (taskDateList[index].completed = !taskDateList[index].completed);
      }
    });
    localStorage.setItem("taskDateList", JSON.stringify(taskDateList));
    setList({});
  };

  return (
    <div>
      {taskDateList?.map((item, index) => {
        return (
          <div
            id={item.id}
            key={index}
            className="task-li my-2 px-3 py-1 d-flex justify-content-between"
            style={{
              textDecoration: item.completed && "line-through",
              borderLeft: item.completed && "10px solid rgb(60, 15, 80)",
            }}
            onClick={() => lineTask(item.id)}
          >
            <div>
              <p className="p1 m-1">{item.task}</p>
              <p className="p2 m-1">{item.date}</p>
            </div>
            <TiDelete
              className=" delete text-danger text-end"
              onClick={() => del(item.id)}
              size={24}
              type="button"
            />
          </div>
        );
      })}

      <p>{!taskDateList.length && "No Task to Show"}</p>
    </div>
  );
};
export default Output;
