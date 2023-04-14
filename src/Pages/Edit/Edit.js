import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTaskList, getTodoList } from "../../Redux/Reducer/TodoListSlice";
import { toast } from "react-toastify";

function Edit() {
  const tasklist = useSelector(getTodoList);
  let userId = useParams().id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [change_task, setChange_task] = useState(tasklist[userId]);
  console.log(tasklist);

  console.log(userId);

  const handleInput = (e) => {
    setChange_task(e.target.value);
  };

  const handleSubmitEdit = () => {
    console.log(change_task);
    if (!change_task) {
      toast.error("Please fill the updated task");
    } else {
      dispatch(editTaskList({ id: userId, task: change_task }), navigate("/"));
      toast.success("Updated... succesfully");
    }
  };
  return (
    <div className="mt-10 text-3xl font-serif font-bold ml-10">
      Edit
      <div className="add border-2 h-full flex-col justify-around w-4/5 text-2xl border-gray-200 shadow-2xl m-1 p-5 ">
        <div className="w-3/4">
          {" "}
          <textarea
            type="text"
            placeholder="Update your task here"
            className=" border-2 shadow-xl border-regal-blue w-full h-24 "
            value={"" || change_task}
            onChange={(e) => handleInput(e)}
          ></textarea>
        </div>
        <div className="">
          {" "}
          <button
            type="submit"
            value={"Add"}
            className=" m-2 shadow-lg border-2 border-regal-red rounded-full pl-4 pr-4 hover:bg-regal-blue hover:border-regal-blue"
            onClick={() => handleSubmitEdit()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
