import React, { useContext } from "react";
import { TaskDispatchContext } from "../../utils/Context/TaskProvider";

function Overlay({ value}) {
  const dispatch = useContext(TaskDispatchContext)
  return (
    <div
      onClick={() => dispatch({ type: value })}
      className="fixed w-full h-full top-0 left-0 backdrop-blur-[1.5px] z-10"
    ></div>
  );
}
export default Overlay;
