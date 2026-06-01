import { useState, useEffect } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please Enter Task");
      return;
    }

    const newTask = {
      task,
      desc,
      type: category,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setDesc("");
    setCategory("Study");
    setPriority("Medium");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((item) =>
    item.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="box">
      <h2>📝 Smart Todo Manager</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <textarea
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Study</option>
        <option>Work</option>
        <option>Personal</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="addbtn" onClick={addTask}>
        Add Task
      </button>

      <input
        type="text"
        placeholder="🔍 Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="count">
        Total: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length} |
        Pending:{" "}
        {tasks.filter((t) => !t.completed).length}
      </div>

      {filteredTasks.map((item, index) => (
        <div className="task" key={index}>
          <h3
            style={{
              textDecoration: item.completed
                ? "line-through"
                : "none",
            }}
          >
            {item.task}
          </h3>

          <p>{item.desc}</p>
          <p>
            <strong>Category:</strong> {item.type}
          </p>

          <p>
            <strong>Priority:</strong> {item.priority}
          </p>

          <button
            className="completebtn"
            onClick={() => toggleComplete(index)}
          >
            {item.completed ? "Undo" : "Complete"}
          </button>

          <button
            className="deletebtn"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;