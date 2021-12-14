import "./App.css"; // import the style sheet used to run the program.
import "./assets/styles.css"; // css styles used for the background.

import { useState } from "react";

import Header from "./components/Header"; // the header js scripts used in the program.
import Tasks from "./components/Tasks"; // the tasks js scripts
import TaskEdit from "./components/TaskEdit"; // taskedit js scripts.


 
function App() {

  // When the App runs the default tasks are displayed for the user to see.
  const [tasks, setTasks] = useState([
    {
      desc: "Have Homework", // task description
      id: 1,                 // task id for CSS purposes
      date: "2021-12-14",    // date to complete task by
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      date: "2021-01-05",
      complete: false,
    },
  ]);

  /**
   * @description Performs an action when a mouse toggles on it. 
   * @param {*} task contains data type tasks that interacts with mouse toggle.
   * @return the tasks which is clicked. 
   */
  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };

  return ( // the File returns the following cascading sheets to the user. 
    <div className="App">
      <Header></Header>

      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;
