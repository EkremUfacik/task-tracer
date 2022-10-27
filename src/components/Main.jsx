import { useState } from "react";
import Input from "./Input";
import Output from "./Output";

const Main = () => {
  const [show, setShow] = useState(true);
  const [list, setList] = useState({});

  return (
    <div
      className="container d-flex flex-column align-items-center p-4 w-75"
      style={{ maxWidth: "40rem" }}
    >
      <div className="text-center">
        <h1 className="display-4">Task Tracker</h1>
        <button className="btn btn-danger" onClick={() => setShow(!show)}>
          {show ? "Close Add Task Bar" : "Show Add Task Bar"}
        </button>
      </div>

      <div className="w-100">
        {show && <Input setList={setList} />}

        <Output list={list} setList={setList} />
      </div>
    </div>
  );
};

export default Main;
