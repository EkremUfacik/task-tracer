import { v4 as uuid } from "uuid";
import { useState } from "react";

const Input = ({ setList }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList({ id: uuid(), task, date, completed: false });

    setTask("");
    setDate("");
  };

  return (
    <div>
      <form className="d-flex flex-column" action="" onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          className="form-control"
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <label className="" htmlFor="day">
          Day & Time
        </label>
        <input
          className="form-control"
          type="datetime-local"
          value={date}
          id="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button className="btn btn-success w-50 mx-auto mt-3" type="submit">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default Input;
