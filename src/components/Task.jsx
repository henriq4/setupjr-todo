import { RiDeleteBin6Line } from "react-icons/ri";

export const Task = () => {
  const a = true;
  const b = false;

  return (
    <>
      <ul
        className={`w-4/6 m-auto p-3 rounded-md bg-box mb-2 ${
          // !props.task.isComplete === false ? "opacity-30" : "opacity-100"
          a === b ? "opacity-30" : "opacity-100"
        }`}
      >
        <li className="flex justify-between items-center">
          <div className="space-x-2">
            <input
              // defaultChecked={props.task.isComplete}
              defaultChecked={false}
              // onClick={() => props.handleToggleTaskCompletion(props.task.id)}
              type="checkbox"
            />
            <span
              // className={`text-white ${
              //   !props.task.isComplete === false
              //     ? "line-through"
              //     : "no-underline"
              // }`}
              className="text-white"
            >
              {/* {props.title} */}
              AA
            </span>
          </div>
          <button /*onClick={() => props.onDeleteTask(task.id)}*/ type="button">
            <div className="hover:text-red-800 transition-colors text-gray-700">
              <RiDeleteBin6Line />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};
