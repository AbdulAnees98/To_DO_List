import React, { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCompletedTaskList,
  getCompeletedTaskList,
  setCompeletedTaskList,
} from "../../Redux/Reducer/CompeletedTaskSlice";
import {
  getTodoList,
  removeTaskList,
  setTaskList,
} from "../../Redux/Reducer/TodoListSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector(getTodoList);
  const compeleted_list = useSelector(getCompeletedTaskList);
  // console.log(compeleted_list)

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    if (task === "") {
      // alert("Please, fill task field to add task");
      toast.error("Please, fill task field");
    } else {
      dispatch(setTaskList(task));
      toast("Task added succesfully");
      setTask("");
      // console.log(list);
    }
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (ind) => {
    if (
      window.confirm(
        "are you sure you want to delete this task it was not compeleted"
      )
    ) {
      dispatch(removeTaskList(ind));
      toast.success("Task delete successfully without compeleting");
    }
  };
  const handleDeleteAll = () => {
    if (window.confirm("are you sure you dont need this list????")) {
      dispatch(clearCompletedTaskList());
      toast.success("succesfully delete all comepeleted task");
    }
  };

  const handleCompelete = (ind) => {
    dispatch(setCompeletedTaskList(list[ind]));
    if (window.confirm("are you sure this task was done")) {
      dispatch(removeTaskList(ind));
      toast.success("Congractulatins.!!!! succesfully compeleted");
    }
  };

  return (
    <>
      <main>
        <div className="outerdiv flex-col justify-between w-full h-full p-4  font-serif">
          {/* this div is for adding list */}

          <div
            className="add border-2 h-full flex justify-around w-1/2 text-2xl shadow-xl border-gray-200 m-1 ml-8 p-2 pl-5  "
            autoComplete={"off"}
          >
            <div className="w-3/4 p-2">
              {" "}
              <input
                type="text"
                placeholder="add your task here"
                className=" border-2 pl-2 border-gray-200  hover:border-regal-blue w-full shadow-lg"
                value={"" || task}
                aria-label="Task"
                onChange={(e) => handleInput(e)}
              ></input>
              {task === "" ? (
                <span className="text-xs text-regal-red ">
                  please fill the task and click add button to add task
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="">
              {" "}
              <button
                type="submit"
                value={"Add"}
                className="m-2 shadow-lg border-2 border-regal-red rounded-full pl-4 pr-4 hover:bg-regal-blue hover:border-regal-blue"
                onClick={() => handleSubmit()}
              >
                Add
              </button>
            </div>
          </div>
          {/* this div is for display */}
          <div className="flex justify-between w-full h-96 p-8 mt-8 border-2 border-gray-200 shadow-inner">
            {/* this is for half section add and show uncompelted task */}

            <div className="Section_1 w-1/2 border-2 border-gray-200 shadow-xl rounded-2xl m-3 text-2xl flex-wrap overflow-y-auto">
              <div className="w-full font-bold text-3xl bg-regal-blue shadow-lg text-center">
                {" "}
                TASK
              </div>

              <span className="block border-t-2 border-black"></span>
              <table className="w-full   flex-col justify-around ">
                {list.length === 0 ? (
                  <>
                    <h1 className="font-bold text-center mt-2 text-gray-500 shadow-sm">
                      No Task Added
                    </h1>
                    <div className="">
                      <img
                        className="hover:scale-110 w-2/5 ml-40"
                        src="https://thumbs.dreamstime.com/z/task-manager-concept-professional-marks-completed-tasks-time-management-flat-vector-illustration-145739856.jpg"
                        alt=""
                      ></img>{" "}
                    </div>
                  </>
                ) : (
                  <>
                    <tbody className="justify-between flex-wrap m-1">
                      {list.map((item, ind) => {
                        return (
                          <tr
                            key={ind}
                            className=" hover:bg-slate-200 border-b-2 border-gray-200 shadow-lg flex-row justify-between
                          "
                          >
                            <th>{ind + 1}</th>
                            <td className="hover:bg-slate-200">{item}</td>
                            <td className=" flex">
                              <button
                                className=""
                                onClick={() => navigate(`/edit/${ind}`)}
                              >
                                <IconButton aria-label="edit" size="medium">
                                  <EditNoteIcon />
                                </IconButton>
                              </button>
                            </td>
                            <td>
                              <button
                                className=""
                                onClick={() => handleDelete(ind)}
                              >
                                <IconButton aria-label="delete" size="small">
                                  <DeleteRoundedIcon fontSize="medium" />
                                </IconButton>
                              </button>
                            </td>
                            <td>
                              <button className=" ">
                                <IconButton
                                  onClick={() => handleCompelete(ind)}
                                  aria-label="done"
                                  size="medium"
                                >
                                  <DoneIcon />
                                </IconButton>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </>
                )}
              </table>
            </div>
            {/* this is another hald section of compeleted task     */}
            <div className="Section_2 w-1/2  border-2 border-gray-200 shadow-xl rounded-2xl m-3 overflow-y-scroll ">
              <div className="">
                <div className="font-bold flex text-center justify-evenly text-3xl bg-regal-blue">
                  COMPLETED TASK
                  {compeleted_list.length === 0 ? (
                    <></>
                  ) : (
                    <IconButton aria-label="delete" size="small">
                      <DeleteRoundedIcon
                        fontSize="medium"
                        onClick={() => {
                          handleDeleteAll();
                        }}
                      />
                    </IconButton>
                  )}
                </div>

                <span className="block border-t-2 border-black"></span>

                {compeleted_list.length === 0 ? (
                  <img
                    className=" w-2/5 hover:scale-105 mt-2 shadow-lg ml-40"
                    src="https://image.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg"
                    alt=""
                  ></img>
                ) : (
                  <>
                    {compeleted_list.map((item) => {
                      return (
                        <div className="flex-col ">
                          <div className="bg-regal-blue text-black text-2xl shadow-lg hover:scale-105 rounded-full border-b-2 border-sky-200 m-5 pl-5">
                            {" "}
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
