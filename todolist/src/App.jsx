import React, { useEffect } from "react";
import "./App.scss";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const addTask = useRef();
  return (
    <div className="toDoList">
      <div className="layOut">
        <div className="group">
          <input
            className="inputAddTask"
            type="text"
            ref={addTask}
            placeholder="Add Your Task"
          />
          <button
            className="btnAdd"
            onClick={() => {
              let otask=[...tasks]
              if (addTask.current.value == "") {
                alert("Enter Yout Task First");
              } else {
                otask.push({
                  title: addTask.current.value,
                  type: "On Work",
                });
                setTasks(otask);
                addTask.current.value='';
              }
            }}
          >
            Add Task
          </button>
        </div>
        <div className="render">
          {tasks.map((el, index) => {
            return (
              <div className="task" key={index}>
                <div className="task-name">
                  <p
                    className={`${el.type == "Done" ? "td-1" : "td-2"}`}
                    onClick={() => {
                      setIsDone(!isDone);
                      let otask = [...tasks];
                      // console.log(otask);
                      isDone
                        ? otask.splice(index, 1, {
                            title: otask[index].title,
                            type: "Done",
                          })
                        : otask.splice(index, 1, {
                            title: otask[index].title,
                            type: "On Work",
                          });
                      setTasks(otask);
                    }}
                  >
                    {el.title}
                  </p>
                </div>
                <div
                  className="status"
                  onClick={() => {
                    setIsDone(!isDone);
                    let otask = [...tasks];
                    // console.log(otask);
                    isDone
                      ? otask.splice(index, 1, {
                          title: otask[index].title,
                          type: "Done",
                        })
                      : otask.splice(index, 1, {
                          title: otask[index].title,
                          type: "On Work",
                        });
                    setTasks(otask);
                  }}
                >
                  <div
                    className={`style  ${el.type == "Done" ? "bg-2" : "bg-1"}`}
                  ></div>
                  <div className="task-status">{el.type}</div>
                </div>
                <button
                  className="delete"
                  onClick={() => {
                    let otask = [...tasks];
                    otask.splice(index, 1);
                    setTasks(otask);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
