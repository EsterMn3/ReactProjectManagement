import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  const modal = useRef();
  const taskName = useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value); //extracting the value that was entered by the user
  }

  // Handle click for Add Task button
  function handleClick() {
    const taskValue = taskName.current.value;

    // If input is empty, show the modal
    if (taskValue.trim() === "") {
      modal.current.open(); // Open the modal using ref
      return;
    }

    // Forward the entered value to the parent component (App)
    onAdd(taskValue);
    setEnteredTask(""); // Reset the input field
  }
  return (
    <>
      <div className="flex items-center gap-4 xs:gap-2">
        <input
          ref={taskName}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 xs:w-40"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className=" text-stone-700 hover:text-stone-950 xs:text-sm"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold  my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops.. Looks like you forgot to enter the task
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for the input field.
        </p>
      </Modal>
    </>
  );
}
