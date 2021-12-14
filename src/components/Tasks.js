import Task from "./Task"; // Import the Task JSON class used here. 


// This Creates a new Tasks Class when clicked on <new> 
function Tasks({ tasks, onTglStatus }) {
  return (
    <div className="card">
      <div className="row">
        {tasks.map((task) => (
          <div className="col-12" key={task.id}>
            <Task task={task} onTglStatus={onTglStatus} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
