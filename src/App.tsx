import React, { Fragment, useState } from "react";

type formElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: formElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              className="form-control"
            />
            <button>Save</button>
          </form>
        </div>
      </div>
      {tasks.map((t: ITask, i: number) => {
        return <h1 key={i}>{t.name}</h1>;
      })}
        </div>
      </div>
    </div>
  );
}

export default App;
